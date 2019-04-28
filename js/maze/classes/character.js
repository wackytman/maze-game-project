export class Character {
    health = 0;
    damage = 0;
    name = 'ghost';
    items = [];
    target = null;
    is_attacking = true;
    attacking = null
    defeated = false;
    entryText = ""
    
    constructor(health, damage, name, items, isPlayer = false ){
        this.health = health;
        this.damage = damage;
        this.name = name;
        this.items = items;
        this.isPlayer = isPlayer

    }


    attackLoop(){
        if(this.attacking == null){
            var vm = this;
            this.terminal.pushText(this.entryText)
            this.pre_attack = setInterval(function(){ return vm.terminal.pushText('The enemy prepares to attack')}, 2500)
            this.attacking = setInterval(function(){ return vm.attack()}, 5000)
        }
    }

    stopAttack(){
        console.log("called")
        clearInterval(this.attacking);
        clearInterval(this.pre_attack);
        if(this.target.health <= 0){
            this.terminal.pushText("You have been Defeat the game will now exit");
            this.terminal.game.exit();
        }
    }
    attack(){
        console.log("attack");
        if(this.target == null){
            this.terminal.pushText(this.name + " has attacked the air ¯\\_(ツ)_/¯")
        }
        else if(this.target.health <= 0 && !this.isPlayer ){
            return this.stopAttack();
        }
        else if(this.target.health <= 0 && this.isPlayer){
            this.target.stopAttack();
            console.log(this.target)
            this.terminal.pushText("enemy defeated");
            if (this.target.items){
                for(var item in this.target.items){
                    if(item != 'terminal'){
                        this.terminal.pushText("Picked Up " + this.target.items[item].name)
                        this.items[item] = this.target.items[item]
                    }
                }
            }
            return this.target = null;
        }
        else if(this.target != null){
            this.target.hit(this.damage, this.name)
        }
        
    }

   hit(damageAmount, characterName){
        this.health -= damageAmount;
        this.terminal.pushText(this.name + " has recieved " + damageAmount + " damage points from " + characterName )
        if(this.health <= 0 && this.attacking != null){
            this.stopAttack()
            this.defeated = true;
        }
    }

    setTarget(target){
        this.target = target;
    }
     setEntryText(entry) {
         this.entryText = entry
     }
    
}

export class Player extends Character{
    terminal;
    wealth = 0;
  constructor(health, damage, name, items,current_room, maze, isPlayer)  
  {
      super(health, damage, name, items, isPlayer);
      this.current_room = current_room
      this.maze = maze;

  }

  changeRoom(room_id){
      if(room_id){
          this.current_room = this.maze.rooms[room_id];
          this.terminal.pushText(this.current_room.description)
      }
      else{
          this.terminal.pushText("you walked into the wall...")
      }
      
      console.log(this.current_room)
      if (this.current_room.enemies){
          for(var emeny in this.current_room.enemies){
            this.current_room.enemies[emeny].setTarget(this)
            this.current_room.enemies[emeny].attackLoop()
            this.target = this.current_room.enemies[emeny]
          }
      }
  }
  inventory(){
      this.terminal.pushText("Items you carry: ");
    for(var item in this.items) {
        this.terminal.pushText("<strong>" + this.items[item].name + '</strong> -  Key : ' + this.items[item].item_id + " - " + this.items[item].description)
    }
    this.terminal.pushText("<strong>coins</strong> - " + this.wealth);
  }
  pickUpItems(){
      for(var item in this.current_room.items) {
          if(item == 'coins'){
            this.wealth += this.current_room.items[item].effect_value;
            this.terminal.pushText("Picked up " + this.current_room.items[item].name + " your total wealth is " + this.wealth)
            this.current_room.items[item] = null 
          }
          else{
              this.items[item] = this.current_room.items[item] 
              this.terminal.pushText("Picked up " + this.current_room.items[item].name)
              this.current_room.items[item] = null 
          }
      }
  }
}


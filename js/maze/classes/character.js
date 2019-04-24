export class Character {
    health = 0;
    damage = 0;
    name = 'ghost';
    items = [];
    target = null;
    is_attacking = true;
    attacking = null
    defeated = false;
    constructor(health, damage, name, items ){
        this.health = health;
        this.damage = damage;
        this.name = name;
        this.items = items;

    }


    attackLoop(){
        if(this.attacking == null){
            this.attacking = setInterval(this.attack,5000)
        }
    }

    stopAttack(){
        clearInterval(this.attacking)
    }
    attack(){
        if(this.target != null){
            this.target.hit(this, this.damage)
        }
        else{
            this.terminal.pushText(this.name + " has attacked the air ¯\\_(ツ)_/¯")
        }
    }

    damage(damageAmount){
        this.health -= damageAmount;
        
        if(this.health <= 0 && this.attacking != null){
            this.stopAttack()
            this.defeated = true;
        }
    }

    setTarget(target){
        this.target = target;
    }

    
}

export class Player extends Character{
    terminal;
  constructor(health, damage, name, items,current_room, maze)  
  {
      super(health, damage, name, items);
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
  }

  takeInventory(){
    if(this.target.health <= 0){
        this.items.push(this.target.items);
        this.target.items = [];
    }
}


} 

export class character {
    health = 0;
    damage = 0;
    name = 'ghost';
    items = [];
    target = null;
    is_attacking = true;
    attacking = null
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
        }
    }

    setTarget(target){
        this.target = target;
    }

    
}

export class player extends character{
  constructor(health, damage, name, items,current_room, maze)  
  {
      this.current_room = current_room
      this.maze = maze;
      super(health, damage, name, items);
  }

  changeRoom(room_id){
      if(room_id){
          this.current_room = this.maze.rooms[room_id];
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

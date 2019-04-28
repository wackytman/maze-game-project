export class Item {
    damage = 0;
    activated = false;
    constructor(item_id,name,description,type,effect_value,uses){
        this.item_id = item_id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.effect_value = effect_value;
        this.uses = uses;
        
    }

    use(character){
        if(!this.activated){

            this.uses -= 1
            switch(this.type){
                case 'potion':
                character.health += this.effect_value
                
                this.terminal.pushText("Health has increased by " + this.effect_value + " points, total health "  + character.health)
                break;
                case 'weapon':
                character.damage = this.effect_value
                this.terminal.pushText("Damage has increased by " + this.effect_value + " points, total damage "  + character.damage)
                break;
            }
            if(this.uses ==0 ){
                this.terminal.pushText(this.name = " Destroyed")
                this.player.items[this.item_id] = null 
            }
            this.activated = true
        }
        else{
            this.terminal.pushText("Item already activated")
        }
    }      

    
}
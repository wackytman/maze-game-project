export class Item {
    damage = 0;

    constructor(item_id,name,description,type,effect_value,uses){
        this.item_id = item_id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.effect_value = effect_value;
        this.uses = uses;
    }
    
}
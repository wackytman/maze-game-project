export class Room{
    north_room_id = 0;
    east_room_id = 0;
    south_room_id = 0;
    west_room_id = 0;

    constructor(room_id,description, items, enemies, north_room_id, east_room_id, south_room_id, west_room_id, is_exit, exit_item, wealth_required){
        this.room_id = room_id;
        this.description = description;
        this.items = items;
        this.enemies = enemies;
        this.terminal = terminal;
        this.north_room_id = north_room_id;
        this.east_room_id = east_room_id;
        this.south_room_id = south_room_id;
        this.west_room_id = west_room_id;
        this.is_exit = is_exit;
        this.exit_item = exit_item;
        this.wealth_required = wealth_required
    }

    showItems(){
        if(Object.keys(this.items).length){
           for(var item in  this.items){

               this.terminal.pushText("<strong>" + this.items[item].name + '</strong> -  Key : ' + this.items[item].item_id + " - " + this.items[item].description)
           }
        }
    }

    showDoors(){
        if(this.north_room_id){
            this.terminal.pushText('There is a room north');
        }
        if(this.east_room_id){
            this.terminal.pushText('There is a room east');
        }
        if(this.south_room_id){
            this.terminal.pushText('There is a room south');
        }
        if(this.west_room_id){
            this.terminal.pushText('There is a room west');
        }
    }

    escape(player){
        if(this.is_exit){
            if(this.wealth_required <= player.wealth){

                if(this.exit_item){
                    
                    for(item in player.items){
                        if(item == this.exit_item){
                            this.terminal.pushText('you Escaped') 
                            return true;
                        }
                    }
                    return false
                }
                else{
                    this.terminal.pushText('you Escaped') 
                }
            }
            else{
                this.terminal.pushText("you need " + this.wealth_required + " wealth to exit")
            }
        }
        else{
            this.terminal.pushText("you cannot escape this room")
        }
    }

}
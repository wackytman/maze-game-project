export class Room{
    north_room_id = 0;
    east_room_id = 0;
    south_room_id = 0;
    west_room_id = 0;

    constructor(room_id,description, items, enemies, north_room_id, east_room_id, south_room_id, west_room_id, is_exit, exit_item){
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
    }

    showItems(){
        this.terminal.pushText('There is ' + this.items.length + ' items in this room')
        if(this.items.length){
            this.items.forEach(item => {
                this.terminal.pushText("<strong>" + item.name + '</strong> - ' + item.description)
            });
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

    escape(){
        if(exit_item){

            for(item in player.items){
                if(item == exit_item){
                    return true;
                }
            }
            return false
        }
        else{
            this.terminal.pushText('you Escaped')
        }
    }

}
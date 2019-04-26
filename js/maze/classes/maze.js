import {Room} from './room.js';
import {Item} from './item.js';
import {Character} from './character.js';

export class Maze {
    name = '';
    rooms = [];
    textInput = '';
    constructor(config, terminal){
        this.config = config;
        this.terminal = terminal;
        this.generateMaze();
    }
    generateMaze(){
        for(var room in this.config.rooms){
            var room_id = room;
            var room = this.config.rooms[room];
            console.log(room)
            var enemies = [];
            for(var enemy in room.enemies){
                
                var enemy = room.enemies[enemy];
                var items = this.loadItems(enemy.items)
                var character = new Character(enemy.health,enemy.damage,enemy.name, items);
                character.terminal = this.terminal
                character.setEntryText(enemy.entry_text)
                enemies.push(character);
            }
            var room_instance = new Room(room_id, room.description, this.loadItems(room.items),enemies, room.north_room_id, room.east_room_id, room.south_room_id, room.west_room_id, room.is_exit, room.exit_item)
            room_instance.terminal = this.terminal;
            this.rooms[room_id] = room_instance;
        }
    }

    loadItems(items_list){
        var items = []
        for(var item in items_list){
            var item_id = item
            var item = items_list[item];
            items.push(new Item(item_id, item.name,item.description, item.type,item.effect_value, item.uses))
        }
        items.terminal = this.terminal;
        return items
    }
}
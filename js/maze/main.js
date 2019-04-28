
import {Maze} from './classes/maze.js'
import {Player} from './classes/character.js'
import {Room} from './classes/room.js'
import {config} from './config.js'
export  class MainGameClass {
    terminal = null
    old_commands = null;

    commands = { 
        move: {
            exec: function(args) {
                switch(args){
                    case "north":
                        this.vm.moveNorth();
                        break;
                    case "east":
                        this.vm.moveEast();
                        break;
                    case "south":
                        this.vm.moveSouth();
                        break;
                    case "west":
                        this.vm.moveWest()
                        break;


                } 
            },
            description: "move [direction] - move player north, east, south or west"
        },
        doors: {
            exec: function() {
                this.vm.showDoors()
            },
            description: "doors - show doors in the room" 
        },
        items: {
            exec: function() {
                this.vm.showItems()
            },
            description: "items - show items in the room"
        },
        loot: {
            exec: function () {
                this.vm.player.pickUpItems()
            },
            description: "loot - Picks up all items in the room"
        },
        use:{
            exec: function(args) {
            if(this.vm.player.items[args]){
                this.vm.player.items[args].use(this.vm.player)
            }
            else{
                this.vm.terminal.pushText("Item not find use 'items' to list all items")           
             }      
            },
            description: "use [item_id] - Uses the item called"
        },
        exit: {
            exec: function (){
                this.vm.player.current_room.escape(this.vm.player) ? this.vm.exit() : this.vm.terminal.pushText("you dont have the required items to exit");
            },
            description: "exit - if the room contains an exit and all parameters are met you can finish the game"
        },
        attack: {
            exec: function(){
                this.vm.attack()
            },
            description: "attack - Attacks the current target"
        },
        inventory: {
            exec: function (){
                this.vm.player.inventory();
            },
            description: "inventory - A list of items you carry"
        },
        wealth: {
            exec: function() {
                this.vm.terminal.pushText("Your current wealth is " + this.vm.player.wealth)
            },
            description: "wealth - list players current wealth"
        }
    }

    constructor(terminal){
        this.terminal = terminal;
    }

    start() {
        this.terminal.pushText('Game booting');
        
        this.maze =  new Maze(config.maze, this.terminal),
        this.old_commands = this.terminal.commands;
        this.terminal.commands = this.commands;
        for(var command in this.terminal.commands){
            this.terminal.commands[command].vm = this;
        }
        this.terminal.commands['game'] = this.old_commands['game'];
        this.terminal.commands['help'] = this.old_commands['help'];
        this.player = new Player(100, 2, 'tylah', [],this.maze.rooms['room_1'], this.maze, true);
        this.player.terminal = this.terminal;
        this.terminal.pushText(this.player.current_room.description)
        console.log(this.player);
        console.log(this.maze);
    }

    moveNorth(){
        this.player.changeRoom(this.player.current_room.north_room_id)
    } 
    moveEast(){
        this.player.changeRoom(this.player.current_room.east_room_id)
    } 
    moveSouth(){
        this.player.changeRoom(this.player.current_room.south_room_id)
    } 
    moveWest(){
        this.player.changeRoom(this.player.current_room.west_room_id)
    } 

    showItems() {
        this.player.current_room.showItems();
    }

    showDoors() {
        this.player.current_room.showDoors();
    }
    attack(){
        this.player.attack(this.player.target);
    }

    exit() {
        this.terminal.pushText('Game exiting');
        console.log(this.old_commands)
        console.log(this.terminal)
        this.terminal.commands = this.old_commands;
    } 
  };

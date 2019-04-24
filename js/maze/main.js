
import {Maze} from './classes/maze.js'
import {Player} from './classes/character.js'
import {Room} from './classes/room.js'
import {config} from './config.js'
export  class MainGameClass {
    terminal = null
    old_commands = null;

    constructor(terminal){
        this.terminal = terminal;
        this.start();
    }

    start() {
        this.terminal.pushText('Game booting');
        var commands = { 
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
            }
        }
        this.maze =  new Maze(config.maze, this.terminal),
        this.old_commands = this.terminal.commands;
        this.terminal.commands = commands;
        for(var command in this.terminal.commands){
            this.terminal.commands[command].vm = this;
        }
        this.terminal.commands['game'] = this.old_commands['game'];
        this.player = new Player(100, 2, 'tylah', [],this.maze.rooms['room_1'], this.maze);
        this.player.terminal = this.terminal;
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

    exit(terminal) {
        this.terminal.pushText('Game exiting');
        this.terminal.commands = this.old_commands;
    } 
  };

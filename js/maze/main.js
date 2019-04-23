
import {Maze} from './classes/maze.js'
import {Room} from './classes/room.js'
import {config} from './config.js'
export  class MainGameClass {
    terminal = null

    constructor(terminal){
        this.terminal = terminal
    }

    start() {
        this.terminal.pushText('Game booting');
        var room = new Room('room_1', [{name: 'stick', description: 'a stick'}, {name: 'Big stick', description: 'a big stick'}],[],1,2,3,0,true,null)
        room.terminal = this.terminal;
        room.showDoors();
        room.showItems();
    }
    exit(terminal) {
        this.terminal.pushText('Game exiting');
    } 
  };

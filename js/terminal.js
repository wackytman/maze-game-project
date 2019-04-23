
import {Game} from './gameController.js'
export class Terminal {
    terminalBox = null;
    game = null;
    constructor(instance, terminalBox){
       
        this.terminalBox = $(instance).find(terminalBox)[0]
        
        for(var element in this.commands) {
            this.commands[element].vm = this;
        };

        this.refreshTerminalCommands()
        
    }
    commands = {
        help: {
            exec: function(commandName){
                if(commandName in this.vm.commands ){
                    this.vm.pushText(this.vm.commands[commandName].description)
                }
                else{
                    for(var element in this.vm.commands) {
                        this.vm.pushText(this.vm.commands[element].description);
                    };
                }
            },
            description: 'help [command-name] - outputs individual commands help'
        },
        clear : {
            exec: function (){
                console.log(this)
                    console.log(this.vm.terminalBox)
                    $(this.vm.terminalBox).empty();
                },
            description: 'clear - Clears the terminal output window.'
        },
        game: {
            exec: function(args){
                if(args == 'exit' && this.vm.game != null){
                    this.vm.game.exit()
                }
                else if(args == 'exit' && this.vm.game == null ){
                    this.vm.pushText('No game has been loaded');
                }
                else {
                    this.vm.game = new Game(this.vm, args);
                }
            },
            description:'game [game-name] - load game via its name'

        }
    }

    pushText(text){
        $(this.terminalBox).append(("<p class='col-12 m-0'>" + text + "</p>"));
    }

    refreshTerminalCommands() {
        for(var element in this.commands) {
            this.commands[element].vm = this;
        };
    }
    
}
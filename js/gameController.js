export class Game{
    terminal = null;
    gamePath = '';
    game = null;

    constructor(terminal, gamePath){
        this.terminal = terminal;
        this.gamePath = gamePath;
        this.start()
    }

    start(){

        var vm = this;
        import(this.gamePath + '/main.js').then((module) => {
            vm.game = new module.MainGameClass(vm.terminal);
            vm.game.start()
          });

    }
    exit() { 
        this.game.exit();
    }
}
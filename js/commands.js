export class Commands {
    terminal = null;
    constructor(instance, terminal){
       
        this.terminal = $(instance).find(terminal)[0]
        console.log(this.terminal)
    }
    command = {
        vm: this,
        clear : {
            exec: function (){
                    console.log(this.vm.terminal)
                    $(this.vm.terminal).empty();
                },
            description: 'Clear the terminal output window.'
            }
    }
}
export class Commands {
    constructor(termnial){
        this.termnial = termnial
    }
    command = {
        clear : function (){ this.termnial.empty()}
    }
}
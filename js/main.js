import {Terminal} from './terminal.js';
$(function() {


    var terminalBox = $('#terminal');
    var terminal = new Terminal(this, terminalBox);
    terminal.pushText("Type the 'help' command to list all commands.");
    $(".blink").blink({delay: 500});

    $('#input').focus( function(){
            $(".blink").unblink(); 
    })

    $('#input').focusout( function(){
        $(".blink").blink({delay: 500});
    })

    $('#input').keypress(function (e) {
        console.log(e.which);
        if (e.which == 13) {
            commandParser($('#input').val());
            $('#input').val('')
          return false;    //<---- Add this line
        }
      });



    function commandParser(input){
        var orginalInput = input
        var command = input.split(" ", 1)
        input = input.split(" ")
        input.shift()
        var args = input.join(" ");
        // input = input.splice(0,0)
        // console.log(input)
        // if(input.lenght >= 1){

        //     var args = input.join(" ")
        // }
        // console.log(args)
        if(command in terminal.commands && input != 'vm'){
            terminal.pushText("$ " + orginalInput);
            terminal.commands[command].exec(args);
        }
        else{
            terminal.pushText("$ " + orginalInput);
            terminal.pushText("'" + command + "' is not a known command. Type help for list of terminal")
        }
    }
})
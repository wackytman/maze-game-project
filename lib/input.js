import { commands } from 'commandParser';
$(function () {

    var terminal = $('#terminal');
    $(".blink").blink({ delay: 500 });

    $('#input').focus(function () {
        $(".blink").unblink();
    });

    $('#input').focusout(function () {
        $(".blink").blink({ delay: 500 });
    });

    $('#input').keypress(function (e) {
        console.log(e.which);
        if (e.which == 13) {
            commandParset($('#input').val());
            $('#input').val('');
            return false; //<---- Add this line
        }
    });

    function terminalPushText(text) {
        terminal.append("<p class='col-12 m-0'>" + text + "</p>");
    }

    function commandParser(input) {
        if (input in commands) {
            commands[input];
        } else {
            terminalPushText(input + 'is not a known command. Type help for list of commands');
        }
    }
});
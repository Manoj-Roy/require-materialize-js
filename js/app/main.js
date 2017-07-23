
//Load Web App JavaScript Dependencies/Plugins
define([
    "jquery",    
    "modernizr",
    "underscore",
    // "backbone",
    "jquery.extend",
    "hammer.min",
    "materialize",    
], function($)
{
    $(".button-collapse").sideNav();
    $(function()
    {
        
        // var ffg = new txt;
        $('.carousel').carousel();
        

        //do stuff
        $('body').append($.htmL())
        $('p').click(function(argument) {
            // alert($.txt());
            Materialize.toast('I am a toast', 4000)
        });
    });
});
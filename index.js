;(function () {
  'use strict';
  var chalk = require('chalk');
  var Blocky = function(){

    var _red =  function(message){
      var coloredMessage = chalk.white.bgRed.bold(message);
      console.log(coloredMessage);
    };

    var _blue =  function(message){
      var coloredMessage = chalk.white.bgBlue.bold(message);
      console.log(coloredMessage);
    };

    var _yellow =  function(message){
      var coloredMessage = chalk.white.bgYellow.bold(message);
      console.log(coloredMessage);
    };


    var _green =  function(message){
      var coloredMessage = chalk.white.bgGreen.bold(message);
      console.log(coloredMessage);
    };

    var _cyan =  function(message){
      var coloredMessage = chalk.white.bgCyan.bold(message);
      console.log(coloredMessage);
    };

    var _white=  function(message){
      var coloredMessage = chalk.blue.bgWhite.bold(message);
      console.log(coloredMessage);
    };

    return {
        red: _red,
        blue: _blue,
        yellow: _yellow,
        green: _green,
        cyan: _cyan,
        white: _white,
        error: _red
    };

  };
  module.exports = new Blocky();

}());

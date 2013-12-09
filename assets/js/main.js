require.config({

  paths: {

    // 'text'           : 'libs/text',

    'jquery'         : 'libs/jquery.min',
    'underscore'     : 'libs/lodash.min',
    'backbone'       : 'libs/backbone.min',
    'marionette'     : 'libs/backbone.marionette',

    'backgrid'       : 'libs/backgrid',
    'localstorage'   : 'libs/backbone.localStorage',
    'bootstrap'      : 'libs/bootstrap', 

    // application
    'app'            : 'app'
  },

  shim: {

      'backbone': {
          deps: ['underscore', 'jquery'],
          exports: 'Backbone'
      },

      'marionette': {
          exports: 'Backbone.Marionette',
          deps: ['backbone']
      },

      'backgrid': {
          deps: ['jquery', 'underscore', 'backbone'],
          exports: 'Backgrid'
      }, 

      'bootstrap': {
        deps: ['jquery']
      }
  }  

});

var deps = [

    // application
    'app',

    // libs
    'jquery',
    'bootstrap'

];

require (deps, function (app, $) {

    // launching
   app.start();  

});
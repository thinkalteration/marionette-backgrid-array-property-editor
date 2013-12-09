define ([

    'marionette',

    // data
    'models/object',

    // layouts
    'layouts/main-page',

    // localStorage adapter
    'localstorage'

], function (

    Marionette,

    // data
    testObject,

    // layouts
    mainPageLayout,

    // localStorage adapter
    localStorage
  ) {

  // ------------------------------------------------------------

  // NOTE: essential backbone.localStorage module issue
  // must be created one time for model/collection to keep persistency
  var localStorage = new localStorage ('test-objects');

  // prepare for backbone.localStorage support
  var rootObject = testObject.extend({localStorage: localStorage});

  // ------------------------------------------------------------


  // common routes code

  var routes = {};

  // collection route 
  routes [''] = {

    eventName: 'main-page',

    getLayout: function () {
      return mainPageLayout.extend({
        model: new rootObject({id: 'test-object-id'})
      });
    }
  };

  return routes;

}); 
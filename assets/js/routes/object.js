define ([

    'marionette',

    // data
    'models/object',

    // layouts
    'layouts/object-page',
    'layouts/object-property',

    // localStorage adapter
    'localstorage'

], function (

    Marionette,

    // data
    testObject,

    // layouts
    objectPageLayout,
    objectPropertyLayout,

    // localStorage adapter
    localStorage
  ) {

  // ------------------------------------------------------------

  // NOTE: essential backbone.localStorage module issue
  // must be created one time for model/collection to keep persistency
  var localStorage = new localStorage ('test-objects');

  // prepare for backbone.localStorage support
  var testObject = testObject.extend({localStorage: localStorage});

  // ------------------------------------------------------------


  // common routes code

  var routes = {};

  // object preview page
  routes ['object/:id'] = {

    eventName: 'object-page',

    getLayout: function (id) {
      return objectPageLayout.extend({
        model: new testObject({ id: id })
      });
    }
  };

  // object property page
  routes ['object/:id/:attr'] = {

    eventName: 'object-property',

    getLayout: function (id, attribute) {
      return objectPropertyLayout.extend({
        model: new testObject({ id: id }),
        attribute: attribute
      });
    }
  };  

  return routes;

}); 
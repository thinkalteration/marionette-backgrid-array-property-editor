define ([

    'underscore',
    'marionette'

], function (_, Marionette) {

    var itemView = Marionette.ItemView.extend({

        template: '#object-properties-list',

        templateHelpers: function(){
          return { data: this.model.toJSON() };
        }
    });    

    return itemView;

}); 
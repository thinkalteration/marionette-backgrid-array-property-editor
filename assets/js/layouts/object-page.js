define ([

    'marionette',

    // views
    'views/object-view'    

], function(

	Marionette,

	testObjectView

){

	var layout = Marionette.Layout.extend({

		template: '#object-layout',

		regions: {
			content: '#content'
		},

		onShow: function(){
			var options = {	model: this.model };

			var objectView = new testObjectView (options);

			this.content.show (objectView);
		}

	});

	return layout;
});
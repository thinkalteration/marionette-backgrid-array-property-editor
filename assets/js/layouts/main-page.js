define ([

    'marionette',

    // views
    'views/main-page-view'    

], function(

	Marionette,

	mainPageView

){

	var layout = Marionette.Layout.extend({

		template: '#main-page-layout',

		regions: {
			content: '#content'
		},

		onShow: function(){
			var options = {	model: this.model };

			var mainPage = new mainPageView (options);

			this.content.show (mainPage);
		}

	});

	return layout;
});
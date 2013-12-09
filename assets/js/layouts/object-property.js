define ([

    'marionette',

    // views
    'views/object-property-header',    
    'views/object-property-view'    

], function(

	Marionette,

	headerView,
	objectPropertyView

){

	var layout = Marionette.Layout.extend({

		template: '#object-property-layout',

		regions: {
			header : '#header',
			content: '#content'
		},

		onShow: function(){

			console.log('property layout attribute:', this.attribute);

			var propertyView = this.initializeGrid ();
			var header = this.initializeHeader ();

			this.header.show (header);
			this.content.show (propertyView);
		},

		initializeGrid: function(){

			return this.grid = objectPropertyView({
				collection: new Backbone.Collection (
					this.model.get (this.attribute)
				)				
			});
		},

		initializeHeader: function(){

			return new headerView({
				model     : this.model,
				attribute : this.attribute,
				grid      : this.grid
			});
		}

	});

	return layout;
});
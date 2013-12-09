define([

	'marionette'

], function (Marionette) {

	return Marionette.ItemView.extend({

		template: '#object-property-header',

		templateHelpers: function(){
			return {
				attribute: this.attribute
			};
		},	

		events: {
			"click .controls .add-row" : "addRow",
			"click .controls .save"    : "saveModel"
		},

		initialize: function (options){
			this.attribute = options.attribute;
			this.grid = options.grid;
		},	

		addRow: function(){

			// TODO: remove hardcoded here
			
			this.grid.insertRow([
				{
					title : 'new object1',
				  	field1: 'new field1',
				  	field2: 'new field2',
				  	field3: 'new field3'
				}
			]);

			return false;
		},

		saveModel: function(){
			var data = {};
			data [this.attribute] = this.grid.collection.toJSON();

			this.model.save(data);

			return false;
		}		   
	});

});
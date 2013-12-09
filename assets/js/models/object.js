define ([

    'underscore',
    'backbone'

], function (_, Backbone) {

	// model for item in list
    var itemModel = Backbone.Model.extend({

    	initialize: function(){
    		this.fetch();
    	},

        defaults:{
            title: 'mock test object',

			// mock attributes list

			'property-1': [
				{
				  title : 'property-1 object1',
				  field1: 'property-1 field1',
				  field2: 'property-1 field2',
				  field3: 'property-1 field3'
				},
				{
				  title : 'property-1 object2',
				  field1: 'property-1 field1',
				  field2: 'property-1 field2',
				  field3: 'property-1 field3'
				},
				{
				  title : 'property-1 object3',
				  field1: 'property-1 field1',
				  field2: 'property-1 field2',
				  field3: 'property-1 field3',
				},
				{
				  title : 'property-1 object4',
				  field1: 'property-1 field1',
				  field2: 'property-1 field2',
				  field3: 'property-1 field3'
				},
				{
				  title : 'property-1 object5',
				  field1: 'property-1 field1',
				  field2: 'property-1 field2',
				  field3: 'property-1 field3'
				}
			],

			'property-2': [
				{
				  title : 'property-2 object1',
				  field1: 'property-2 field1',
				  field2: 'property-2 field2',
				  field3: 'property-2 field3'
				},
				{
				  title : 'property-2 object2',
				  field1: 'property-2 field1',
				  field2: 'property-2 field2',
				  field3: 'property-2 field3'
				},
				{
				  title : 'property-2 object3',
				  field1: 'property-2 field1',
				  field2: 'property-2 field2',
				  field3: 'property-2 field3'
				},
				{
				  title : 'property-2 object4',
				  field1: 'property-2 field1',
				  field2: 'property-2 field2',
				  field3: 'property-2 field3'
				},
				{
				  title : 'property-2 object5',
				  field1: 'property-2 field1',
				  field2: 'property-2 field2',
				  field3: 'property-2 field3'
				}
			],

			'property-3': [
				{
				  title : 'property-3 object1',
				  field1: 'property-3 field1',
				  field2: 'property-3 field2',
				  field3: 'property-3 field3'
				},
				{
				  title : 'property-3 object2',
				  field1: 'property-3 field1',
				  field2: 'property-3 field2',
				  field3: 'property-3 field3'
				},
				{
				  title : 'property-3 object3',
				  field1: 'property-3 field1',
				  field2: 'property-3 field2',
				  field3: 'property-3 field3'
				},
				{
				  title : 'property-3 object4',
				  field1: 'property-3 field1',
				  field2: 'property-3 field2',
				  field3: 'property-3 field3'
				},
				{
				  title : 'property-3 object5',
				  field1: 'property-3 field1',
				  field2: 'property-3 field2',
				  field3: 'property-3 field3'
				}
			]             
        }
    }); 
    
    return itemModel;

});
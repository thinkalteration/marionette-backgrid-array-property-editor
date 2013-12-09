define ([

    'underscore',
    'backgrid'

], function (_, Backgrid) {

    return function (options) {

      var DeleteCell = {

        name: "remove",
        label: "",
        editable: false,

        cell: Backgrid.Cell.extend ({
            template: _.template('<button class="btn btn-danger delete-row">&times;</button>'),
            events: {
              "click": "deleteRow"
            },
            deleteRow: function () {
              this.model.collection.remove(this.model);
              return false;
            },
            render: function () {
                this.$el.html(this.template());
                return this;
            }
        })
      };  

      var columns = [
        {
          name : "title",
          label: "Title",
          cell : "string"
        },
        {
          name : "field1",
          label: "Field 1",
          cell : "string"
        },
        {
          name : "field2",
          label: "Field 2",
          cell : "string"
        },
        {
          name : "field3",
          label: "Field 3",
          cell : "string"
        }               
      ];

      columns.push(DeleteCell);      

      return new Backgrid.Grid({
        columns: columns,
        collection: options.collection
      });

    };

}); 
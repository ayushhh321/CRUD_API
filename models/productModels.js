const mongoose = require('mongoose')

const productSchema = mongoose.Schema(//for product model we need schema so here we added it
    {
        group: {
            type: String,
            required: [true, "Please enter a group"],//validation method
        },

        subgroup: {
            type: String,
            required: [true, "Please enter a subgroup"],//validation method
        },

        brand: {
            type: String,
            required: [true, "Please enter a brand"],//validation method
        },

        product_id: {
            type: String,
            required: [true, "Please enter a product id"],//validation method
        },

        plyUnit: {
            type: Number,
            required: [true, "Please enter a Plyunit"],//validation method
        },

        labourPerFloor: {
            type: Number,
            required: [true, "Please enter a product name"],//validation method
        },
        ProductDescription: {
          type: String,
          required: [true, "Please enter a product description"],
      },
        NumberOfItemInStock: {
            type: Number,
            required: [true, "Please enter Number Of Item In Stock"],
            default: 0
        },
        price: {
            type: Number,
            required: [true, "Please enter price"],
        },
        image: {
            type: String,
            required: [true, "Please enter image link"],
        },
        PlyUnit: {
          type: Number,
          required: [true, "Please enter plyunit"],
      },
      StockINorOUT: {
        type: Boolean,
        required: [true, "Please true/false"],
    }
    },
    {
        timestamps: true//it will give time and date everytime you add data 
    }
)


const Product = mongoose.model('Product', productSchema);

module.exports = Product;
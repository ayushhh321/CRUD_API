const mongoose = require('mongoose')

const productSchema = mongoose.Schema(//for product model we need schema so here we added it
    {
        ProductName: {
            type: String,
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
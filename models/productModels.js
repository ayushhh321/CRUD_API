const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        ProductName: {
            type: String,
            required: [true, "Please enter a product name"],
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
        timestamps: true
    }
)


const Product = mongoose.model('Product', productSchema);

module.exports = Product;
const mongoose = require('mongoose')

const productSchema = mongoose.Schema(//for product model we need schema so here we added it
    {
        group: {
            type: String,
            required: [true,],//validation method
        },
        

        subgroup: {
            type: String,
            required: [true,],//validation method  
        },

        brand: {
            type: String,
            required: [true,],//validation method
        },

        product_id: {
            type: String,
            required: [true,],//validation method
        },

        plyUnit: {
            type: Number,
            required: [true,],//validation method
        },

        labourPerFloor: {
            type: Number,
            //required: [true,],//validation method
            default: 0,
        },

        applicability: {
            type: Number,
            required: [true,],//validation method
        },

        loadingUnloadingPrice: {
            type: Number,
            //required: [true,],//validation method
            default: 0,
        },

        product_name: {
            type: String,
            required: [true,],//validation method
        },

        ProductDescription: {
            type: String,
            required: [true,],//validation method
        },
  

        category: {
            type: String,
            required: [true,],//validation method
        },

        subcategory: {
            type: String,
            required: [true,],//validation method
        },

        //desc we can make another api
       
        

        attrs: {
            imgs: {
                type: [String], // an array of strings
                required: [true, "Please provide at least one image URL"],
            }
        },

        averageRating: {
            type: Number,
            required: [true,],
            default: 0
        },

        price: {
            type: Number,
            required: [true,],//validation method
        },

        discounted_price: {
            type: Number,
            required: [true,],//validation method
        },

        discounted_percent: {
            type: Number,
            required: [true,],//validation method
        },

        
      

        // NumberOfItemInStock: {
        //     type: Number,
        //     required: [true,],//validation method
        //     default: 0
        // },
       
        
    //   StockINorOUT: {
    //     type: Boolean,
    //     required: [true,],//validation method
    // }
    },
    {
        timestamps: true//it will give time and date everytime you add data 
    }
)
//product desc
const descSchemaforproduct = new mongoose.Schema({
    specifications: {
      type: Map,
      of: mongoose.Schema.Types.Mixed,
      required: true,
    },
  });


// Subdocument schema for 'desc'
const descSchema = new mongoose.Schema({
    specifications: {
      type: Map,
      of: mongoose.Schema.Types.Mixed,
      required: true,
    },
  });
  
  // Subdocument schema for 'attrs'
  const attrsSchema = new mongoose.Schema({
    design: {
      type: String,
      required: true,
    },
    imgs: {
      type: String,
      required: true,
    },
  });
  
  // Subdocument schema for 'design'
  const designSchema = new mongoose.Schema({
    product_id: {
        type: String,
        required: [true,],//validation method
    },

    plyUnit: {
        type: Number,
        required: [true,],//validation method
    },

    labourPerFloor: {
        type: Number,
        required: [true,],//validation method
    },

    applicability: {
        type: Number,
        required: [true,],//validation method
    },

    loadingUnloadingPrice: {
        type: Number,
        required: [true,],//validation method
    },
    price: {
        type: Number,
        required: [true,],//validation method
    },

    discounted_price: {
        type: Number,
        required: [true,],//validation method
    },

    discounted_percent: {
        type: Number,
        required: [true,],//validation method
    },
    desc: descSchema,
    attrs: attrsSchema,
  });
  
  // Main schema for 'vars'
  const varsSchema = new mongoose.Schema({
    design: [designSchema], // Array of designs
  });



const Product = mongoose.model('Product', productSchema);

module.exports = Product;
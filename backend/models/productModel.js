import mongoose from 'mongoose';

// Define the schema for product reviews
const reviewSchema = new mongoose.Schema(
  {
    // Reference to the user who submitted the review
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    // Name of the reviewer
    name: {
      type: String,
      required: true
    },
    // Rating given in the review
    rating: {
      type: Number,
      required: true
    },
    // Comment provided in the review
    comment: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

// Define the schema for products
const productSchema = new mongoose.Schema(
  {
    // Reference to the user who created the product
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    // Name of the product
    name: {
      type: String,
      required: true
    },
    // Image URL of the product
    image: {
      type: String,
      required: true
    },
    // Description of the product
    description: {
      type: String,
      required: true
    },
    // Brand of the product
    brand: {
      type: String,
      required: true
    },
    // Category of the product
    category: {
      type: String,
      required: true
    },
    
    price: {
      type: Number,
      required: true,
      default: 0
    },
    
    countInStock: {
      type: Number,
      required: true,
      default: 0
    },
    
    reviews: [reviewSchema],
    
    rating: {
      type: Number,
      required: true,
      default: 0
    },
    
    numReviews: {
      type: Number,
      required: true,
      default: 0
    }
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;

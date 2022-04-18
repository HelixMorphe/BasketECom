import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: 'String',
    },
    desc: {
      type: 'String',
    },
    vendor: {
      type: 'String',
    },
    price: {
      type: 'Number',
    },
    imgUrl: {
      type: 'String',
    },
  },
  { timestamps: true }
)

export default mongoose.models.Product ||
  mongoose.model('Product', ProductSchema)

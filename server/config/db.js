import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)

    console.log('DB worked!')
  } catch (errors) {
    console.log('DB failed!', errors)
  }
}

export default connectDB

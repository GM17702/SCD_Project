
const mongoose = require('mongoose')

const connectDB = async () => {

try {
const conn = await mongoose.connect(process.env.MONGO_URI)
console.log(`mONGO db CONNECTED: ${conn,connection.host}`)

} catch (error){


}

}
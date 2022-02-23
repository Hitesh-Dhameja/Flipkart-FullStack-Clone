import mongoose from 'mongoose';
//const URL = 'mongodb+srv://Hitesh:Hitesh@800@ms.q54bx.mongodb.net/WPCLONE?retryWrites=true&w=majority'

const Connection = async (URL) => {
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        console.log('database connected')
    } catch (error) {
        console.log(error.message)
    }

}

export default Connection;
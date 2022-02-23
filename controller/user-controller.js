import User from '../model/userSchema.js'

export const usersignup = async (request, response) => {
    try {
        const exist = await User.findOne({ username: request.body.username })
        if (exist) {
            return response.status(401).json('User already exists')
        }
        const User = request.body;
        const newUser = new user(User);
        await newUser.save()
        response.status(200).json('User is successfully registered')
    } catch (error) {
        console.log(error.message)
    }

}

export const userlogin = async (request, response) => {
    try {
        let user = await User.findOne({ username: request.body.username, password: request.body.password })
        if (user) {
            return response.status(200).json(`${request.body.username} login successful`)
        } else {
            return response.status(401).json('invalid login')
        }
    } catch (error) {
        console.log('userlogin error ', error.message)

    }
}
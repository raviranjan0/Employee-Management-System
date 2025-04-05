import User from './models/user.js'
import bcrypt from 'bcrypt'
import connectToDatabase from './models/db/db.js';


const userRegister = async () => {
    connectToDatabase();
    try {
        const hashPassword = await bcrypt.hash("admin", 10)
        const newUser = new User({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashPassword,
            role: "admin"
        })
        await newUser.save();

    } catch (error) {
        console.log(error);
    }
}

userRegister();
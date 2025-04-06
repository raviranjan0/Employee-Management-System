import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import user from '../models/user.js'
import bcrypt from 'bcrypt'

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, error: "User not Found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, error: "Wrong Password" });
        }

        const token = jwt.sign(
            { _id: user._id, role: user.role },
            process.env.JWT_KEY,
            { expiresIn: "10d" }
        );

        res.status(200).json({
            success: true,
            token,
            user: { _id: user._id, name: user.name, role: user.role },
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export { login };
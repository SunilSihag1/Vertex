import bcrypt from "bcryptjs";
import User from "./auth.model.js";

export const registerUser = async (data) => {
    const { name, email, password, phone } = data;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        phone,
        role: "admin"
    });

    return user;
};
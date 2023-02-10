import mongoose from "mongoose";
import authRoles from "../utils/authRoles.js";

export const userSchema = new mongoose.Schema({
    name: String,
    photo: String,
    googleId: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: "String",
        enum: Object.values(authRoles),
        default: authRoles.USER,
    }

}, {
    timestamps: true,
}
);

export default mongoose.model("User", userSchema);
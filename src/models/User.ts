import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 6,
        match: [/^[a-zA-Z0-9]+$/, '영문과 숫자만 사용할 수 있습니다.']
    },
    password: {
        type: String,
        required: true,
        match: [/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/, 
        '비밀번호는 영문, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.']
     },
    gender: {
        type: String,
        enum: ["M","F"]
    },
    birth: {
        type: Date
    }
})


export default mongoose.model("users",UserSchema)
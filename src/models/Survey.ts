import mongoose from "mongoose";
import { Schema } from "mongoose";

const SurveySchema = new Schema ({
    age: {
        type: String
    },
    sns: {
        type: String
    },
    trend: {
        type: String
    }
})

export default mongoose.model("users",SurveySchema);
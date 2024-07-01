import { Schema, model } from "mongoose";

const prospectSchema = new Schema({
    fullName: {
        type: String,
        require: true
    },
    company: {
        type: String,
    },
    email: {
        type: String,
        require: true
    },
    cellPhone: {
        type: String,
        require: true
    },
    phone: {
        type: String,
    },
    country: {
        type: String,
        require: true
    },
    entryDate: {
        type: Date,
        require: true
    },
    comments: {
        type: String,
    },
    stage: {
        ref: "Stage",
        type: Schema.Types.ObjectId
    }
},{
    timestamps: true,
    versionKey: false
});

export default model('Prospect', prospectSchema);
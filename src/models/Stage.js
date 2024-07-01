import { Schema, model } from "mongoose";

const stageSchema = new Schema({
    name: String
},{
    versionKey: false
});

export default model('Stage', stageSchema);
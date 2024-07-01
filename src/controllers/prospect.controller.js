import Prospect from "../models/Prospect.js";
import Stage from "../models/Stage.js";

export const createProspect = async (req, res) => {

    const { fullName, company, email, cellPhone, phone, country, entryDate, comments, stage } = req.body;
    
    const newProspect = new Prospect({ fullName, company, email, cellPhone, phone, country, entryDate, comments });

    if (stage) {
        const foundStage = await Stage.find({ name: { $in: stage }});
        newProspect.stage = foundStage.find(stage => stage._id);
    } else {
        const stage = await Stage.findOne({ name: "New" })
        newProspect.stage = stage._id;
    }

    const savedProspect = await newProspect.save();

    res.json({
        message: "creating Prospect",
        savedProspect
    });
}

export const getProspects = async (req, res) => {
    const Prospects = await Prospect.find()
    res.json({
        message: "get Prospects",
        Prospects
    });
}

export const getProspectById = (req, res) => {

}

export const updateProspectById = (req, res) => {

}

export const deleteProspectById = async (req, res) => {
    const Prospects = await Prospect.deleteOne({ id: req.ProspectId})

    res.json({
        message: "Prospect Deleted",
    });

}
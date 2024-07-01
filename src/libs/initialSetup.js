import Role from "../models/Role.js"
import Stage from "../models/Stage.js";


export const createRoles = async () => {

    try {
        const count = await Role.estimatedDocumentCount();

        if (count > 0) return;

        const values = await Promise.all([
            new Role({ name: 'user' }).save(),
            new Role({ name: 'moderator' }).save(),
            new Role({ name: 'admin' }).save(),
        ]);

        console.log(values);
    } catch (error) {
        console.error(error);
        
    }

}

export const createStages = async () => {

    try {
        const count = await Stage.estimatedDocumentCount();

        if (count > 0) return;

        const values = await Promise.all([
            new Stage({ name: 'New' }).save(),
            new Stage({ name: 'Proposal' }).save(),
            new Stage({ name: 'Negotiation' }).save(),
            new Stage({ name: 'Need Analysis' }).save(),
            new Stage({ name: 'Closed Won' }).save(),
            new Stage({ name: 'Closed Lost' }).save(),
        ]);

        console.log(values);
    } catch (error) {
        console.error(error);
        
    }

}
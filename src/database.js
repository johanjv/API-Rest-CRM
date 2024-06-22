import mongose from "mongoose";

mongose.connect("mongodb+srv://johanv:Santi2409.@cluster-api-crm.b0snwcj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-api-crm")
    .then(db => console.log("DB is connected"))
    .catch(err => console.log(err))



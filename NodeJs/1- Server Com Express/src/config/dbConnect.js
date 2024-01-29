import mongoose from "mongoose";

async function conectaNaDataBase(){
    mongoose.connect("mongodb+srv://felipijohnny:p6bhCD4dSav8QCDZ@cluster0.lhkuwvn.mongodb.net/livraria?retryWrites=true&w=majority");

    return mongoose.connection;
};

export default conectaNaDataBase;


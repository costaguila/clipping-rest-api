require('dotenv').config();
const mongoose = require('mongoose')

function connect(callback){
    console.log("Conectando com %s",process.env.DATABASE_NAME)
    mongoose.connect(""+process.env.MONGO_CONNECTION, { useNewUrlParser: true }, function(err) {
        if (err) {
            console.log("[FAIL] Erro ao conectar com %s",process.env.MONGO_CONNECTION)
            console.log(err);
        } else {
            console.log("[OK] Conectado com %s",process.env.MONGO_CONNECTION)
        }
    });
}

function disconnect(){
  mongoose.disconnect();
}

module.exports = { connect, disconnect }

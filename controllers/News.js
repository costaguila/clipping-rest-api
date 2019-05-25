var models = require('../models/News');
//Models
let newsModel = models['News'];

module.exports.getNews = async (req,res) =>{
  let promessa = () =>{
    return new Promise((resolve,reject) =>{
      newsModel.find().exec(function(err,result){
          if(!err){
            resolve(result)
          }
          else{
            reject({"error":err})
          }
        })
    })
  }

  let result = await promessa();
  res.json(result)
}

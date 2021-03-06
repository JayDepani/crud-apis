const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URL,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Successful");
}).catch((err)=>{
    console.log("No Connection");
    console.log(err);
})
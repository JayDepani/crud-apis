const Userdata = require('../modules/users');
const fun_inc = require('../middleware/fun_inc');

exports.register = async(req,res)=>{
    try {
        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        let password = req.body.password;
        let cpassword = req.body.cpassword;

        if(password === cpassword){
            password = await fun_inc.hashing_password(password);
            cpassword = await fun_inc.hashing_password(cpassword);

            const userSchema = new Userdata({
                name,email,phone,password,cpassword
            });

            const result = await userSchema.save();

            if(result){
                res.status(201).send(result);
            }else{
                res.status(500).send('Register after some time due to server error');
            }

        }else{
            res.status(400).send('Please enter same password');
        }
    } catch (error) {
        res.status(500).send("Please enter valid details");
    }
}

exports.users = async(req,res)=>{
    try {
        const users = await Userdata.find();
        if(users){
            res.status(200).send(users);
        }else{
            res.status(404).send('Requested users not found');
        }

    } catch (error) {
        res.status(404).send('Requested users not found');
    }
}

exports.usersById = async(req,res)=>{
    try {
        const _id = req.params.id;
        const user = await Userdata.findById({_id});
        if(user){
            res.status(200).send(user);
        }else{
            res.status(404).send('Requested user not found');
        }
    } catch (error) {
        res.status(404).send("Requested user not found");
    }
}

exports.updateById = async(req,res)=>{
    try {
        const _id = req.params.id;
        const user = await Userdata.findByIdAndUpdate({_id},req.body,{new:true});
        if(user){
            res.status(200).send(user);
        }else{
            res.status(404).send("Requested user not found");
        }
    } catch (error) {
        res.status(404).send("Requested user not found");
    }
}

exports.deleteById = async(req,res)=>{
    try{
        const _id = req.params.id;
        const user = await Userdata.findByIdAndDelete({_id});
        if(user){
            res.status(200).send(user);
        }else{
            res.status(404).send("Requested user not found");
        }
        
    }catch(error){
        res.status(404).send("Requested user not found");
    }
}

const bcryptjs = require('bcryptjs');

const hashing_password = async(password)=>{
    const hashpassword = await bcryptjs.hash(password,10);
    return hashpassword;
}

module.exports = {hashing_password};
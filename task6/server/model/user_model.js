const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const  jwt = require('jsonwebtoken'); 
const userSchema = new mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    tokens:[{
        token:{type: String, required: true}
    }]
})

userSchema.pre('save', async function (next) {
    try {
        const saltRounds = 10;
         if (this.isModified('password')) {
            const salt = bcrypt.genSaltSync(saltRounds);
            const hashPassword = await bcrypt.hash(this.password, salt);
            this.password = hashPassword;
        }
       
        next()
       } catch (error) {
        next(error);
        console.log(error);
    }
})

userSchema.methods.getjwttoken=async function(){
    try {
        const user=this
        const privatekeys=process.env.privateKey;
        const token=await jwt.sign({id:user._id},privatekeys)
        user.tokens=user.tokens.concat({token:token});
        await user.save();
        return token;
    } catch (error) {
        console.log(error)
    }
}


module.exports = mongoose.model("User", userSchema)
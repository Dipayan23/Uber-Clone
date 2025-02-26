const userModel = require("../models/user.models")
const userService = require("../services/user.services")
const { validationResult } = require("express-validator")
const blacklistTokenModel = require("../models/blacklistToken.model")

module.exports.registerUser = async (req, res, next) => {
   
    

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    const isUserAlready = await userModel.findOne({ email });

    if (isUserAlready) {
        return res.status(400).json({ message: 'User already exist' });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token, user });


}

module.exports.loginUser = async (req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password} = req.body;

    const user = await userModel.findOne({email}).select("+password");//means when we query user from database we want to select the password field
    if(!user){
        return res.status(401).json({message:"Invalid email or password"});
    }
    const match = await user.comparePassword(password);
    if(!match){
        return res.status(401).json({message:"Invalid email or password"});
    }
    const token = user.generateAuthToken();

    res.cookie("token",token);
    
    res.status(200).json({token,user});
}

module.exports.profileUser = async (req,res,next)=>{

    return res.status(200).json({user:req.user});
}

module.exports.logoutUser = async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    const blacklistToken = new blacklistTokenModel({token});
    await blacklistToken.save();
    res.clearCookie("token");
    res.status(200).json({message:"Logout success"});
}
import User from "../model/user.model.js";
export const order=async (req,res)=>{
    try {
        const {fullname,assignment,word,deadline,email,phone,comment}=req.body;
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists"}); 
        }
        const createdUser=User({
            fullname,
            assignment,word,
            deadline,
            email,phone,comment
        })
        await createdUser.save();
        res.status(201).json({message:"User created successfully"})
    } catch (error) {
        console.log("Error: ",error);
        res.status(500).json({message:"Internal Server Error"});
    }
}
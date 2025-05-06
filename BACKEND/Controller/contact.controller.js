import Contact from "../model/contact.model.js";
export const login=async (req,res)=>{
    try {
        const {fullname,email,phone,title}=req.body;
        const contact=await Contact.findOne({email})
        if(contact){
            return res.status(400).json({message:"User already exists"}); 
        }
        const createdContact=Contact({
            fullname, email,phone,title
        })
        await createdContact.save();
        res.status(201).json({message:"User created successfully"})
    } catch (error) {
        console.log("Error: ",error);
        res.status(500).json({message:"Internal Server Error"});
    }
}

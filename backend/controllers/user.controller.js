import User from "../models/user.model.js"

export const getUsersForSidebar= async(req,res) =>{
    try {
        const loggedInuserId = req.user._id;
        
        const filteredUsers = await User.find({_id:{$ne:loggedInuserId}}).select("-password");
        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error in getUsersForSidebar", error.message);
        res.status("500").json({error:"Internal Server Error"});
    }
};
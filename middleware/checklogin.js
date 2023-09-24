

export const checklogin=(req,res,next)=>{
    const user=req.session.user;
    if(user){
        next();
    }else{
        res.status(400).json({message:"please login to continue"});
    }
}
const { getUser } = require("../service/auth");

function checkForAuthenticationCookie(cookieName) {
    return (req,res,next)=>{
        const tokenCookieValue=req.cookies[cookieName];
        if(!tokenCookieValue){
            return next();
        }
        try{
            const userPayload=getUser(tokenCookieValue);
            req.user=userPayload;
        } catch(err){}
        return next(); 
    }
}

module.exports={
    checkForAuthenticationCookie,
};

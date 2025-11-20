const JWT=require('jsonwebtoken');

const secret='Revati@123';

function createTokenForUser(user){
    const paylod={
        fullName: user.fullName,
        _id: user._id,
        email: user.email,
        profileImageURL: user.profileImageURL,
        role: user.role,
    };
    const token=JWT.sign(paylod,secret);
    return token;
}

function validateToken(token){
    try{
        const payload=JWT.verify(token,secret);
        return payload;
    }catch(err){
        return null;
    }
}

module.exports={
    setUser: createTokenForUser,
    getUser: validateToken,
};
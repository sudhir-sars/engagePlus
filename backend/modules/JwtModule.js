const jwt = require('jsonwebtoken');

const verifyJwt=(token)=>{
  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      return {success:false,message:err};
    } else {
      return {success:true,messege:"token verified successsfully"}
    }
  });
}

const signJwt=(userData)=>{
  const token = jwt.sign(
    { email: userData.email, name: userData.name },
    process.env.JWT_KEY,
    { expiresIn: "60d" }
  );
  return {success:true,messege:"token generated successsfully",token:token}
}

module.exports={verifyJwt,signJwt}
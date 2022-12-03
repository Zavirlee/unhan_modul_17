const jwt = require('jsonwebtoken');
require("dotenv").config();
SECRET = process.env.SECRET

const Auth = {
    verifyToken(req, res, next){
        const token = req.body.token
        console.log(token);

        if (!token) {
          return  res.status(403).send('A token is required for authentication');
            // 12. Lalukan jwt verify   
        } 
        try {
          var verified = jwt.verify(token, SECRET);
          req.user = verified
          console.log('you are verified')
          next()
        } catch (error) {
          res.status(403).send({message: 'Youre not authenticated, please login first'})
          console.log('Youre not authenticated');
        }
      
  }
}

module.exports = Auth;
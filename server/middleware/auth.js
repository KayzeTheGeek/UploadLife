import jwt from "jsonwebtoken";

//const secret = 'test';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; //req.userId
    
    const isCustomAuth = token?.length < 500;

    let decodedData;

    if (isCustomAuth) {
      decodedData = jwt.verify(token, 'test');
      req.userId = decodedData?.id;
    }
    
    // if (token && isCustomAuth) {
    //   decodedData = jwt.verify(token, 'test');

    //   req.userId = decodedData?.id;
    // }
      // } else {
    //   decodedData = jwt.decode(token);

    //   req.userId = decodedData?.sub;
    // }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
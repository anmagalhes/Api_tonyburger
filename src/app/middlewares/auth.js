import jwt from "jsonwebtoken"

import authConfig from "../../config/auth"


export default (request,response, next) => {
    const authToken = request.headers.authorization

     if(!authToken){
        return response.status(401).json({error: "Toker não validado"})
    }

    const toker = authToken.split(' ')[1]

    try{

        jwt.verify(toker, authConfig.secret, function (err, decoded){
            if(err){
                throw new Error()
            }

            request.userId =decoded.id

            return next()
        })

    }catch(err){
        return response.status(401).json({error: "Toker invalido"})

    }

}



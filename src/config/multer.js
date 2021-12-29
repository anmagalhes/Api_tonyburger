
// BIBLIOTECA UPLOAD DE IMAGENS
// IMAGENS É GUARDANDA EM SDN - UM SERVIDOR PROPRIO PARA GUARDAR IMAGENS.
// CADA PASTA É UM NIVEL VOLTA O NIVEL É '..',


import multer from "multer"  
import {v4} from "uuid"   
import {extname, resolve, resolver} from  "path"


export default {
    storage:multer.diskStorage({
        destination: resolve(__dirname,'..','..','Uploads'),
        filename:(request, file, callback )  => {
        return  callback(null, v4() + extname(file.originalname))
        }
    }),
}
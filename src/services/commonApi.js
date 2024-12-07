import axios from "axios"

export const commonApi =async(httprequest,url,reqBody) => {
    const regConfiq = {
        method:httprequest,
        url,
        data:reqBody
    }
return await axios(regConfiq).then((result)=>{
    return result
}).catch((err)=>{
    return err
})
}
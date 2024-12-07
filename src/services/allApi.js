
import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

// add a post
export const addPostApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/post`,reqBody)
}

// get a post
export const getPostApi = async()=>{
    return await commonApi('GET',`${serverUrl}/post`,'')
}

//delete a post
export const deletePostApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/post/${id}`,{})
} 
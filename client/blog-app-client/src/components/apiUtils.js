import axios from "axios"

const url = "http://localhost:5000"
export const postBlogs = (title, Image, Description) => {

    //call create post api
    let response = fetch(`${url}/blogs`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            Description: Description,
            Image: Image
        })

    }).then(res => (res.json()))
    return response
}
export const getblogs = async () => {
    const response = await axios.get(`${url}/blogs`).catch(res => console.log(res))
    // console.log(response)
    return response.data
}

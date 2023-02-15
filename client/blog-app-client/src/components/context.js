import React, { createContext ,useState} from "react";
export const Blogcontext=createContext()
export const BlogContextProvider=({children})=>{
    const [Blogs,setBlogs]=useState([])
    const [blogdtail,setBlogdetail]=useState(null)
    return <Blogcontext.Provider value={{
        Blogs,setBlogs,blogdtail,setBlogdetail
    }}>
         { children}
    </Blogcontext.Provider>
}
 
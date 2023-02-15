import { useEffect, useContext } from 'react'
import { getblogs } from './apiUtils'
import { Card } from './card'
import { Blogcontext } from './context'
import { Nav } from './Nav'
export const Home = () => {
    const { Blogs, setBlogs } = useContext(Blogcontext)
    useEffect(() => {
        getblogs().then(res => {
            res = res.reverse()
            setBlogs(res)
        })
    }, [])
    return (
        <>  <Nav />
            <div className='Card-container'>          
                <div className='Card-cont'>
                <h1 style={{textAlign:"center"}}>Blogs</h1>
                    {
                        Blogs ? Blogs.map((blog, index) => {
                            return (
                                <div className='Card' key={index} id={blog._id}>
                                    <Card blog={blog} />
                                </div>
                            )
                        })
                            : <h1>is loading</h1>
                    }
                </div>
            </div>
        </>
    )
}
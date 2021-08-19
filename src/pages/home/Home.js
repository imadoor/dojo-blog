import { useState, useEffect } from "react";
import BlogList from "../../props/BlogList";
//mport axios from 'axios';

const Home = () => {
    const handleDelete = (id) =>{
        setBlogs(blogs.filter((blog) => blog.id !== id))
    };

    const [ blogs, setBlogs ] = useState(null);
    const [isPending, setPending] = useState(true);
    //const [ counter, setCounter ] = useState(0);
    useEffect(()=>{
        console.log('use effect ran');
        fetch('http://localhost:8080/posts')
            .then(res => {
                if(!res.ok){
                    throw Error(`Data ${res.statusText}`)
                }
                return  res.json();
            })
            .then(data => {
                setBlogs(data);
                setPending(false);
            })
            .catch( err => {
                console.log(err);
            })
    }, []);
    return ( 
        <div className="home">
            { isPending && <div>Loading Data...</div> }
            {blogs && <BlogList 
                blogs={blogs} 
                title='All Blogs'
                handleDelete={handleDelete}
            />}
            {/* <BlogList 
                blogs={blogs.filter((blog) => blog.userid === 1)} 
                title="1's Blog"
                handleDelete={handleDelete}
            /> */}
        </div>
     );
}
 
export default Home;
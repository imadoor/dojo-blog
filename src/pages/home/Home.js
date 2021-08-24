import useFetch from "../../hooks/useFetch";
import BlogList from "../../props/BlogList";
//import axios from 'axios';

const Home = () => {
    // const handleDelete = (id) =>{
    //     setBlogs(blogs.filter((blog) => blog.id !== id))
    // };
    const { data, isPending, error } = useFetch('http://localhost:8080/posts');
    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading Data...</div> }
            {data && <BlogList 
                blogs={data} 
                title='All Posts'
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
const BlogList = ({ blogs, title, handleDelete }) => {
 
    if(blogs.length){
    return(
    <div className="blog-list">
    <h2>{ title }</h2>
        {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by { blog.userid }</p>
                <button onClick={()=>{handleDelete(blog.id)}}>Delete</button>
            </div>
        ))
        }
    </div>)}
else{
    return <div></div>
}
}

export default BlogList;
import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState(0);
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const post = { title, body, userId:author}
        //console.log(post);
        setIsPending(true);
        fetch('http://localhost:8080/posts',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        }).then(() =>{
            console.log('new blog added');
            setIsPending(false);
            history.push('/');
        }).catch( err => {
            setIsPending(false)
            console.log(err);
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new post</h2>
            <form onSubmit={handleSubmit}>
                <label >Post Title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                />
                <label >Post Body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}
                    ></textarea>
                <label>Post Author</label>
                <input 
                    type="number" 
                    required
                    value={author}
                    onChange={(e)=> setAuthor(Number(e.target.value))}    
                />
                {!isPending ? <button>Add Post</button> : <button disabled>Loading ...</button>}

            </form>
        </div>
     );
}
 
export default Create;
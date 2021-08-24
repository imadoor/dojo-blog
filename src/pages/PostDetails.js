import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const PostDetails = () => {
    const { id } = useParams();
    const { data: post, isPending, error } = useFetch(`http://localhost:8080/post/${id}`);
    const history = useHistory();

    const handleClick = () =>{
        fetch(`http://localhost:8080/post/${id}`, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }

    return ( 
        <div className='post-details'>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading Data...</div> }
            {post && 
                <article>
                    <h2>{ post.title }</h2>
                    <p>Written by { post.userid }</p>
                    <div>{ post.body }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            }
        </div>
     );
}
 
export default PostDetails;
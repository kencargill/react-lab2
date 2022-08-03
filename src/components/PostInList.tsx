import { Post } from "./post";
import trashIcon from "../images/trash.png"
import { useState } from 'react'

interface Props {
    onDelete: (id: string) => void;
    post: Post;
}

export default function PostInList ( { onDelete, post }: Props ) {
    const [count, setCount] = useState(0);

    const decrementCount = () => {
        setCount(count - 1 );
      }

    const incrementCount = () => {
        setCount(count + 1 );
    }

    return (
        <div className="post" key={post.id}>
            <h4>{post.title}</h4>
            <h5>{post.thought}</h5>
            <p>votes: {count}</p>
            <button onClick={incrementCount}>up vote</button>
            <button onClick={decrementCount}>down vote</button>
            <img 
                src={trashIcon}
                alt='trash icon'
                style={{width: 20}}
                onClick={() =>onDelete(post.id)}
            />
        </div>

    )
}
import { Post } from "./post";
import { useState } from "react";
import exitIcon from "../images/square-x.png"
import { nanoid } from 'nanoid'

interface Props {
    onSubmit: (post: Post) => void;
    handleHide: () => void;
}

export default function PostForm({ onSubmit, handleHide }: Props ) {
    const [post, setPost] = useState<Post>({title: '', thought: '', id: nanoid()});

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        return setPost({
            ...post,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            id: nanoid()
        });
      }
    
      function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault();
        onSubmit(post);
        clearFormValues();
        handleHide();
      }

      function clearFormValues() {
        setPost({ title: '', thought: '', id: '' });
      }


    return (
        <form>
            <button
                style={{width: 29}}
            ><img 
                src={exitIcon}
                alt= 'X'
                style={{width: 20}}
                onClick={handleHide}
            /></button>

            <label>Title:</label>
            <input
                type="text"
                placeholder="Enter a title"
                value={post.title}
                name='title'
                onChange={handleChange}
            />

            <label>Thought:</label>
            <input
                type="text"
                placeholder="Enter a thought"
                value={post.thought}
                name='thought'
                onChange={handleChange}
            />

            <button 
                type="submit" 
                onClick={handleSubmit}
                style={{width: 80}}
            >Add Post</button>
        </form>
    )
}
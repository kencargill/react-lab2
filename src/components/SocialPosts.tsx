import { nanoid } from "nanoid";
import React, { useState } from "react";
import { Post } from "./post";
import PostForm from "./PostForm";
import PostList from "./PostList";

export default function SocialPosts () {
    const [posts, setPosts] = useState<Post[]>([
        {title: 'new post', thought: 'this is a new post', id: nanoid()},
        {title: 'another post', thought: 'this is another post', id: nanoid()}
    ]);
    const [isShown, setIsShown ] = useState(false);
    let visibility = 'hidden';

    function submitToPosts(post: Post) {
        setPosts([...posts, post])
    }

    function handleHide(){
        // .preventDefault(); // how to pass the button click event in so that it doesnt refresh the page and lose the posts made with the form ?
        setIsShown(current => !current);
    }

    function onDelete(id: string): void{
        setPosts(posts.filter(post => post.id !== id));
    }

    if(isShown){
        visibility = 'visible'
    } else {
        visibility = 'hidden'
    }

    return (
        <div>
            <h1>My Thoughts</h1>
            <button 
                onClick={handleHide} 
                className={`new-thought-btn`}
            >New Thought</button>

            <div className={`modal ${visibility}`}>
            <PostForm
                onSubmit={submitToPosts} 
                handleHide={() => handleHide()} 
            />
            </div>

            <div className="posts">
            <PostList
                postList={posts}
                onDelete={onDelete}
            />
            </div>

        </div>
    )
}
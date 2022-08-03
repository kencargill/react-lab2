import { Post } from './post'
import PostInList from './PostInList';

interface PostListProps {
    postList: Post[];
    onDelete: (id: string) => void;
}

export default function PostList({ postList, onDelete }: PostListProps) {
  return (
    <div>
       {postList.map((post) => {
            return ( 
            <PostInList 
                key= {post.id} 
                post={post} 
                onDelete={onDelete} 
            />
            )
        })}
    </div>
  )
}

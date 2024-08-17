
/**
 * PostItem Component
 * Renders a summary of a blog post
 * @param {PostItemProps} props - The properties for the component. 
 * @returns {JSX.Element} 
 */


import { Post } from '@/types/post';

interface PostItemProps {
  post: Post;
}

export default function PostItem({ post }: PostItemProps) {
  return (
    <div className="post-item">
      <h2 className="post-title">
        <a href={`/post/${post.id}`} className="post-link">
          {post.title}
        </a>
      </h2>
      <p className="post-excerpt">{post.content.slice(0, 100)}...</p>
    </div>
  );
  
}

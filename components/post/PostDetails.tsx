
/**
 * PostDetails Component
 * 
 * This component displays detailed information about a specific blog post,
 * If no post data is provided,it renders a "Post not found" message.
 * @param {PostDetailsProps} props - The properties for the component.
 * @returns {JSX.Element}
 */

'use client';

import { Post } from '@/types/post';
import { formatDate } from '@/utils/helper';


interface PostDetailsProps {
  post: Post;
}


export default function PostDetails({ post }: PostDetailsProps) {
  // Check if the post data is available
  if (!post) {
    return <div className="text-center text-gray-500">Post not found.</div>;
  }

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
      <p className="mb-4">{post.content}</p>
      <div className="text-sm text-gray-500">
        <p>{formatDate(post.created_at)}</p>
      </div>
    </div>
  );
}


/**
 * PostList Component
 * Renders a list of blog posts. If no posts are available, it displays a message indicating that.
 * @param {PostListProps} props - The properties for the component.
 * @returns {JSX.Element} 
 */
'use client';  


import PostItem from '@/components/post/PostItem';
import { Post } from '@/types/post';

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  if (!posts || posts.length === 0) {
    return <div className="text-center py-4 text-gray-500">No posts available.</div>;
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

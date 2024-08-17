import { fetchPosts } from '@/lib/api';
import PostList from '@/components/post/PostList';
import Layout from '@/components/shared/Layout';

export default async function HomePage() {
  const posts = await fetchPosts();

  return (
    <Layout>
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">List of Simple Blog Posts</h1>

      {/* Render the PostList component with fetched posts */}
      <PostList posts={posts} />
    </div>
  </Layout>
  );
}

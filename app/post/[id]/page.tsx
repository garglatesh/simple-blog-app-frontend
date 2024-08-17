import PostDetails from '@/components/post/PostDetails';
import { fetchPostById } from '@/lib/api';
import BackButton from '@/components/shared/BackButton';
import Layout from '@/components/shared/Layout';

interface PostPageProps {
  params: { id: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = params;
  const post = await fetchPostById(id);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-6 text-center text-gray-500">
          Post not found.
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        {/* Back Button Component */}
        <BackButton />
        <h1 className="text-2xl font-bold mb-4">Post Details</h1>
        <PostDetails post={post} />
      </div>
    </Layout>
  );
}

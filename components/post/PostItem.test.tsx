
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostItem from '@/components/post/PostItem';
import { Post } from '@/types/post';


describe('PostItem Component', () => {
  // Mock post data
  const mockPost: Post = {
    id: '1',
    title: 'Test Post',
    content: 'This is a test post content that is long enough to be truncated.',
    created_at: '2024-08-17T12:00:00Z',
    updated_at: '2024-08-17T12:00:00Z',
  };

  test('renders the post title', () => {
    render(<PostItem post={mockPost} />);
    const titleElement = screen.getByRole('heading', { name: /Test Post/i });
    expect(titleElement).toBeInTheDocument(); // Ensure title is in the document
  });

  test('renders the post excerpt', () => {
    render(<PostItem post={mockPost} />);
    const excerptElement = screen.getByText(/This is a test post content that is long enough to be truncated/i);
    expect(excerptElement).toBeInTheDocument(); // Ensure excerpt is in the document
  });

  test('links to the correct post detail page', () => {
    render(<PostItem post={mockPost} />);
    const linkElement = screen.getByRole('link', { name: /Test Post/i });
    expect(linkElement).toHaveAttribute('href', '/post/1'); // Ensure link has correct href attribute
  });
});

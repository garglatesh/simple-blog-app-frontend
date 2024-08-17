'use client'; // This directive ensures the component runs on the client side
import { useRouter } from 'next/navigation';
export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="mb-4 text-blue-500 underline hover:text-blue-700"
    >
      &larr; Back
    </button>
  );
}

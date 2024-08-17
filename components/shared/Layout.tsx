import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-5xl font-bold text-gray-800 text-center">
            My Blog
          </h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="py-4 text-gray-400 text-center">
        <p>© 2024 My Blog</p>
      </footer>
    </div>
  );
}

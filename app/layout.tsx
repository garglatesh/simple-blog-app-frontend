import '@/styles/globals.css';
import { ReactNode } from 'react';
import ReactQueryProvider from '@/utils/ReactQueryProvider';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <div className="container mx-auto px-4">{children}</div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
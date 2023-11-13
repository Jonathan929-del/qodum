// Imports
import '../globals.css';
import React from 'react';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {ClerkProvider} from '@clerk/nextjs';





// Configs
export const metadata: Metadata = {
  title:'Qodum',
  description:'School management system',
};
const inter = Inter({subsets:['latin']});





// Main function
export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
          <ClerkProvider>
            {children}
          </ClerkProvider>
      </body>
    </html>
  );
};

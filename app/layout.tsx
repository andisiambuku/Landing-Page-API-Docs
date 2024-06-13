import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/data/apollo-client"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "API Docs",
  description: "API docs for Unsplash and Rick & Morty APIs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ApolloProvider client={client}> */}
          <Header />
          {children}
          <Footer />
          {/* </ApolloProvider> */}
      </body>
    </html>
  );
}

import { Link } from "gatsby";
import React from "react";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </div>
      {children}
    </>
  );
}

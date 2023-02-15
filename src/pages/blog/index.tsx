import { PageProps } from "gatsby";
import React from "react";
import Layout from "../../components/layout";

export default function Blog(props: PageProps) {
  console.log(props);

  return (
    <Layout>
      <div>this is a blog</div>
    </Layout>
  );
}

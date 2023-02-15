import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../../components/layout";
import { MDXProvider } from "@mdx-js/react";

const shortCode = { Link };
export default function BlogPost({ data, children }: PageProps) {
  console.log(data);
  console.log(shortCode);

  const post = data.mdx;

  return (
    <>
      <Layout>
        <div>{post.body}</div>

        <MDXProvider components={shortCode}>{children}</MDXProvider>
      </Layout>
    </>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

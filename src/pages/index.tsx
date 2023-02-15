import * as React from "react";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import Layout from "../components/layout";

const IndexPage: React.FC<PageProps> = (
  props: PageProps<Queries.IndexPageQuery>
) => {
  console.log(props);

  const posts = props.data.allMdx.nodes;

  return (
    <Layout>
      <div>hi gatsby</div>
      {posts.map((post) => (
        <Link key={post.id} to={`/blog/${post.frontmatter?.slug}`}>
          {post.frontmatter?.title}
        </Link>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query IndexPage {
    allMdx {
      nodes {
        id
        frontmatter {
          date
          slug
          title
        }
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

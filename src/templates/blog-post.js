import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { Header, MainPost, PreTitle, Title,Subtitle, Tags, Date, Stats, SocialShare, MediaBar, Screenshots } from "../components/style/emo-post";

export default ({ data }) => {
  const post = data.markdownRemark;
  const screenshots = data.allImageSharp.edges.filter((node) => {
    for (var i = 0; i < post.frontmatter.screenshots.length; ++i) {
      if (node.node.fluid.originalName === post.frontmatter.screenshots[i]) {
        return true;
      }
    }
    return false;
  });
  return (
    <Layout>
      <MainPost>
        <Header>
          <PreTitle>{post.frontmatter.category}</PreTitle>
          <Title>{post.frontmatter.title}</Title>
          <Subtitle>{post.frontmatter.subtitle}</Subtitle>
          <Tags>
            {post.frontmatter.project !== "" &&
              <li key={0}><a href={post.frontmatter.project} target={"_blank"}>itch.io Page</a></li>}
            {post.frontmatter.demo !== "" &&
              <li key={1}><a href={post.frontmatter.demo} target={"_blank"}>Code Repository</a></li>}
          </Tags>
        </Header>
        <div
          className={"content"}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <footer>
          <Date>{post.frontmatter.date}</Date>
	        {/*<Tags>
		        {post.frontmatter.tags.map((tag, index) => (
			        <li key={index}>{tag}</li>
		        ))}
	        </Tags>
           <Stats>
            <SocialShare>
              <li className={"social-icon"}>
                <Link to="#">
                  <span className={"fab fa-twitter"}> </span>
                </Link>
              </li>
              <li className={"social-icon"}>
                <Link to="#">
                  <span className={"fab fa-facebook"}> </span>
                </Link>
              </li>
            </SocialShare>
          </Stats> */}
        </footer>
      </MainPost>
      <MediaBar>
        {post.frontmatter.trailer !== "" &&
          <div><h3>Trailer</h3>
          <iframe width="100%" height="100%" src={post.frontmatter.trailer}></iframe></div>}
        <h3>Screenshots</h3>
        {screenshots.map((screenshot) => (
            <Img fluid={screenshot.node.fluid} />))}
      </MediaBar>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
        tags
        category
        project
        demo
        date
        trailer
        screenshots
      }
    }
    allImageSharp {
      edges {
        node {
          id
          fluid(maxWidth: 1000) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  }
`;
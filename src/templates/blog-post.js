import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/style/slick-overrides.css"
import { Header, MainPost, PreTitle, Title, Subtitle, Tags, Date, Stats, SocialShare, MediaBar, Screenshots } from "../components/style/emo-post";

function NextArrow(props) {
  const {onClick} = props;
  return (
    <div
      className="slick-override-next"
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slick-override-prev"
      onClick={onClick}
    />
  );
}

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

  const SliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <Layout>
      <MainPost>
        <Header>
          <PreTitle>{post.frontmatter.category}</PreTitle>
          <Title>{post.frontmatter.title}</Title>
          <Subtitle>{post.frontmatter.subtitle}</Subtitle>
          <Tags>
            {post.frontmatter.project !== "" &&
              <li key={0}><a href={post.frontmatter.project} target={"_blank"} rel="nofollow noopener noreferrer">itch.io Page</a></li>}
            {post.frontmatter.demo !== "" &&
              <li key={1}><a href={post.frontmatter.demo} target={"_blank"} rel="nofollow noopener noreferrer">Code Repository</a></li>}
          </Tags>
        </Header>
        <div
          className={"content"}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <footer>
          <Date>{post.frontmatter.date}</Date>
        </footer>
      </MainPost>
      <MediaBar>
        {post.frontmatter.trailer !== "" &&
          <div><h3>Trailer</h3>
          <iframe width="500" height="300" src={post.frontmatter.trailer}></iframe></div>}
        <h3>Screenshots</h3>
        <div>
        <Slider {...SliderSettings}>
          {screenshots.map((screenshot, index) => (
          <Img key={index} fluid={screenshot.node.fluid} />))}
        </Slider>
        </div>
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
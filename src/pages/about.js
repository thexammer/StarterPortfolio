import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { MainPost, Title } from "../components/style/emo-post";
import Img from "gatsby-image";

export default ({ data }) => {
	return (
		<Layout>
			<MainPost>
				<header>
					<Title>About Me</Title>
				</header>
				<div
					className={"content"}>
					<h2 style={{ display: "inline-block", verticalAlign: "top", marginTop: "25%" }}>Hi, I'm Max!</h2>
					<div style={{display: "inline-block", width: "500px"}}>
						<Img fluid={data.meImage.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" />
					</div>
					<p/>
					<p>I'm currently a student studying Computer Science and Game Development at Northeastern University in Boston.
					I'm most interested in working with lower level systems and game engines, as well as game AI, but I also
					have a passion for just about all things Computer Science. I take joy in simply knowing how things work,
					whether that's designing them myself or reading through a code base.</p>
					<p>As far as my personal interests, I of course play games, I'm a big Pittsburgh Steelers/Penguins fan, I love funky and/or electronic and/or jazzy music,
					I've been in marching band/drumline for a while, and I'm pretty into the development of the
					<a target={"_blank"} rel="nofollow noopener noreferrer" href={"https://www.youtube.com/watch?v=Ld7zTApixXE&list=PLLLYkE3G1HED6rW-bkliHbMroHYFf4ukv"}>Marble Machine X. </a>
					</p>
					<p>The best way to contact me is at <a target="_blank" rel="nofollow noopener noreferrer" href="mailto:thexammer@gmail.com">thexammer@gmail.com</a>,
					or send me a quick dm on <a target="_blank" rel="nofollow noopener noreferrer" href="https://twitter.com/thexammer">Twitter</a>.</p>
					<p>Here's a cat pic for reading all of this:</p>
					<div style={{ width: "95%", margin: "30px"}}>
						<Img fluid={data.catImage.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" />
					</div>
				</div>
			</MainPost>
		</Layout>
	);
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        subtitle
      }
    }
    catImage: file(relativePath: { eq: "img/about/SleepyBabies.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
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
	meImage: file(relativePath: { eq: "img/about/ChillinKayak.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
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
`

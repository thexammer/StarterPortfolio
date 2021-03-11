import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { MainPost, Title } from "../components/style/emo-post";

export default ({ data }) => {
	return (
		<Layout>
			<MainPost>
				<header>
					<Title>About Me</Title>
				</header>
				<div
					className={"content"}>
					<h2>Hi, I'm Max!</h2>
					<p>I'm currently a student studying Computer Science and Game Development at Northeastern University in Boston.
					I'm most interested in working with lower level systems and game engines, as well as game AI, but I also
					have a passion for just about all things Computer Science. I take joy in simply knowing how things work,
					whether that's designing them myself or reading through a code base.</p>
					<p>As far as my personal interests, I of course play games, I'm a big Pittsburgh Steelers/Penguins fan, I love funky and/or electronic and/or jazzy music,
					I've been in marching band/drumline for a while, and I'm pretty into the development of the <a target={"_blank"} href={"https://www.youtube.com/watch?v=Ld7zTApixXE&list=PLLLYkE3G1HED6rW-bkliHbMroHYFf4ukv"}>Marble Machine X. </a>
					</p>
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
  }
`

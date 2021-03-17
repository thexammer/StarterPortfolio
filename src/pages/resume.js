import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { MainPost, Title } from "../components/style/emo-post";
import resume from "./MaxFortnaResume.pdf";

export default ({ data }) => {
	return (
		<Layout>
			<MainPost>
				<header>
					<Title>Resume</Title>
				</header>
				<div 
					className={"content"}>
					<p>If it doesn't load, download <a href={resume} target="_blank" rel="nofollow noopener noreferrer">here!</a></p>
					<div style={{width: "75vh"}}>
						<embed src={resume} width="75vh" height="800vh" />
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
  }
`

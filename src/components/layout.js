import "./style/global.css";
import "./style/strucutres.css";
import "./style/fontawesome.css";

import favicon16 from "../img/favicon/favicon16.png"
import favicon32 from "../img/favicon/favicon32.png"
import favicon48 from "../img/favicon/favicon48.png"



import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import { Main, Aside, Logo, Navigator, LinksList, SocialList, SiteTagline } from "./style/emo-layout.js";
import { Helmet } from "react-helmet"


const Layout = ({ children }) => (
	<StaticQuery
	query = { 
		graphql`
		query {
			site {
				siteMetadata {
					title
					subtitle
					description
					keywords
				}
			}
		}
		`}
		render = { data => (
			<React.Fragment>
			<Helmet
			title = {data.site.siteMetadata.title}
			meta = {[
				{
					name: "description",
					content: data.site.siteMetadata.description,
				},
				{
					name: "keywords",
					content: data.site.siteMetadata.keywords,
				},
				]}
				link={[
					{ rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon16}` },
					{ rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon32}` },
					{ rel: 'shortcut icon', type: 'image/png', href: `${favicon48}` },
					]}
					/>
					<Aside>
						<Navigator>
								<LinksList>
									<li><Link to={`/`} activeClassName="active">Home</Link></li>
									{/* <li><Link to={`/all/`} activeClassName="active">All Games/Projects</Link></li> */}
									<li><Link to={`/about/`} activeClassName="active">About</Link></li>
									<li><Link to={`/resume/`} activeClassName="active">Resume</Link></li>
								</LinksList>
							<SiteTagline>
								<h5>{data.site.siteMetadata.title} </h5>
								<p>{data.site.siteMetadata.description}</p>
							</SiteTagline>
							<Logo>
								<h5><SocialList><span>
								<a target="_blank" rel="nofollow noopener noreferrer" href="https://maxfortna.itch.io"><span className="fab fa-itch-io"></span></a></span> <span>
								<a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/thexammer/CodeExample"><span className="fab fa-github"></span></a></span> <span>
								<a target="_blank" rel="nofollow noopener noreferrer" href="https://www.linkedin.com/in/maxfortna/"><span className="fab fa-linkedin"></span></a></span> <span>
								<a target="_blank" rel="nofollow noopener noreferrer" href="https://twitter.com/thexammer"><span className="fab fa-twitter"></span></a></span> <span>
								<a target="_blank" rel="nofollow noopener noreferrer" href="mailto:thexammer@gmail.com"><span className="fa fa-envelope"></span></a></span>
								</SocialList></h5>
							</Logo>
						</Navigator>
					</Aside>
					<Main>{children}</Main>
					</React.Fragment>
					)}
		/>
		);

export default Layout;

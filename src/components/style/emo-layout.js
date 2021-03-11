import styled, {css} from "react-emotion";
import {mwS} from "./breakpoints";

export const Main = styled.main`
  max-width: 90%;
  width: 100%;
  float: left;
  display: block;
  padding: 30px;
  position: relative;
  margin-top: 220px;
  
  ${mwS.medium(css`
    margin-top: 0;
    width: auto;
    margin-left: 235px;
    max-width: 90%;
  `)};
`;

export const Aside = styled.aside`
	width: 100%;
  position: fixed;
  display: block;
  top: 0;
  overflow-y: hidden;
  transition: .3s all ease;
  background: #86c78d;
  z-index: 10;
  font-size: 16px;
  line-height: 1.5;
  overflow: hidden;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

		
  ${mwS.medium(css`
		height: 100vh;
		min-height: 500px;
		width: 235px;
		float: left;

  `)};
`;

export const Navigator = styled.div`
  padding: 10px;
  width: 100%;
`;

export const Logo = styled.div`
  padding: 10px 10px;
  position: relative;

  p {
    display: none;
    white-space: pre-line;
  }

  ${mwS.medium(css`
    display: block;
    padding: 30px 0px;
	  a {
	    text-transform: uppercase;
	    letter-spacing: 0.05em;
	    margin-bottom: 0.5em;
      text-align: center;
	    display: block;
	  }
	  p {
      display: block;
	    margin-bottom: 0;
	    text-align: left;
	  }
  `)};
`;


export const LinksList = styled.ul`
  padding: 0;
  margin: 0;

  li {
    padding: 0;
    position: relative;
    display: block;
    list-style: none;
    height: 32px;
    width: 95%;
    float: none;
    margin-left: 5px;
  }

  li a {
    color: #000;
    padding: 0 0px;
    display: block;
    position: relative;
    text-align: left;
    margin: auto;
    z-index: 1;
  }

  li a:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0;
    left: -4.5%;
    height: 30px;
    z-index: -1;
    background: #a2f3ab;
    transition: .3s width ease-out;
  }

  li:hover a:after, li a.active:after {
    left: -4.5%;
    width: 109%;
    border: 2px solid #699d6f;
  }

  ${mwS.medium(css`
    li {
      width: 100%;
      float: none;
      margin: 0px auto;
    }

    li a {
    
    }
  `)};
`;

export const SiteTagline = styled.div`

`;

export const SocialList = styled.span`
  text-align: center;
  display: inline-block;
  & span {
    width: auto;
    text-align: center;

  }
  & span > a {
    display: inline-block;
    background: #a3f1ab;
    border-radius: 110px;
    margin: 0;
    width: 30px;
    height: 30px;
    line-height: 30px;
  }
  
  
  ${mwS.medium(css`
    text-align: center;
  `)};
  `;
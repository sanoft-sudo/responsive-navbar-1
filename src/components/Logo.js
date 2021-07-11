import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  a {
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    -ms-transition: 0.5s all;
    text-decoration: none;
  }
  .logo {
    width: 120px;
  }
  .logo h1 {
    margin: 5px;
    font-size: 20px;
  }
  .logo span {
    border-left: 4px solid #00a78e;
    border-top: 4px solid #00a78e;
    border-bottom: 4px solid #00a78e;
    border-right: none;
    border-radius: 100%;
    padding: 5px 7px;
    font-size: 20px;
    text-decoration: none;
  }
  .link-effect-3 a {
    padding: 10px 0;
    margin: 0 12px;
    color: rgba(255, 255, 255, 0.75);
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
    /* backdrop-filter: blur(8.5px); */
    letter-spacing: -1px;
    position: relative;
    font-family: "Open Sans", sans-serif;
    text-decoration: none;
  }
  .link-effect-3 a::before {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    padding: 10px 0;
    max-width: 0;
    border-bottom: 3px solid #00a78e;
    color: #00a78e;
    content: attr(data-hover);
    -webkit-transition: max-width 0.5s;
    -moz-transition: max-width 0.5s;
    transition: max-width 0.5s;
  }
  .link-effect-3 a:hover::before {
    max-width: 100%;
  }

  @media (max-width: 991px) {
    .link-effect-3 a {
      padding: 10px;
      margin: 6px 4px;
    }
  }
`;

const Logo = () => {
  return (
    <DIV>
      <div className="logo link-effect-3">
        <h1>
          <a href="/">
            <span>JS</span>OFT
          </a>
        </h1>
      </div>
    </DIV>
  );
};

export default Logo;

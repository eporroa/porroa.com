import React from "react";
import styled from "styled-components";

const Container = styled.div`
  h1, .role{
    text-transform: uppercase;
  }
  h1 {
    font: 2em var(--primary-font);
    font-weight: bold;
    margin: 0;
    padding: 0;
    line-height: 80%;

    a {
      color: var(--logo-color-1);
      background: linear-gradient(var(--logo-color-1), var(--logo-color-0));
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      -webkit-text-fill-color: transparent;
    }
  }

  .role {
    font-size: 0.8em;
    color: var(--logo-color-0);
    display: block;
  }
`;

export default ({ className, children }) => {
  return <Container id="logo" className={ {...className} }>{children}</Container>;
};


import React from "react";
import styled from "styled-components";
import ReactDOMServer from "react-dom/server";

const Container = styled.div`
p {
  color: #000;
  background-color: #fff8e2;
  text-align: center;
  margin: 0;
  padding: 0.5em 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
`

export default ({ maxWidth = 0, className, children }) => {
  const renderedChildren = ReactDOMServer.renderToStaticMarkup(
    <p className="browsehappy">
      You are using an <strong>outdated</strong> browser. Please{" "}
      <a href="http://browsehappy.com/">upgrade your browser</a> to improve your
      experience.
    </p>
  );

  return (
    <Container
      dangerouslySetInnerHTML={{
        __html: `
          <!--[if lt IE 11]>
          ${renderedChildren}
          <![endif]-->
        `,
      }}
    />
  );
};

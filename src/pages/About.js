import React, { useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

const About = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>About</h1>

      <Document
        file="https://github.com/tendila/portfolio-fun/src/assets/resume.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
};

export default About;

import React from 'react';

export const TestSection = function TestSection() {
  return (
    <section className="section">
      <h2>TEST</h2>
      <article className="section__article">
        <h3>Unit Test</h3>
        <ul>
          <li><a href="https://testing-library.com/docs/react-testing-library/cheatsheet/#queries">Testing Library</a></li>
          <li><a href="https://jestjs.io/es-ES/docs/expect">Jest</a></li>
        </ul>
        <h3>End to End</h3>
        <ul>
          <li><a href="https://docs.cypress.io/guides/getting-started/installing-cypress">Cypress</a></li>
        </ul>
      </article>
    </section>
  );
};

export default TestSection;

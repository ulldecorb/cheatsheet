import React from 'react';

export const VueSection = function VueSection() {
  return (
    <section className="section">
      <h2>VUE</h2>
      <article>
        <h3>Installing Vue</h3>
        <pre>
          $ npm i -g @vue/cli
          $ npm run serve

          VSC install Vetur extension
        </pre>
      </article>
    </section>
  );
};

export default VueSection;

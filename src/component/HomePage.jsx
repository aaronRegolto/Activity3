import React from 'react';

const HomePage = () => {
  return (
    <div className='Home'>
      <h1>Home Page</h1>
      <section>
        <h2>Conditional Rendering</h2>
        <p>
          It is the process of displaying different UI elements or components based on specific conditions, 
          such as user authentication state, data loading status, or user input
        </p>
      </section>

      <section>
        <h2>useEffect</h2>
        <p>
          In React, useEffect is a built-in Hook used to manage side effects in functional components. 
          Side effects are operations that occur outside the scope of a standard UI render.
        </p>
      </section>

      <section>
        <h2>Routing Components</h2>
        <p>
          React Router uses components like <strong>BrowserRouter, Routes, Route, and Link</strong>
          to create client-side navigation.
        </p>
        <ul>
          <li><strong>BrowserRouter</strong> wraps the app and enables HTML5 history routing.</li>
          <li><strong>Routes</strong> contains one or more <strong>Route</strong> elements.</li>
          <li><strong>Route</strong> defines a path and which component should render for that path.</li>
          <li><strong>Link</strong> creates navigation links without reloading the page.</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;

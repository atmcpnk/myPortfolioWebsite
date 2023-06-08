import React from 'react';
    import { createRoot } from 'react-dom/client';
    import { BrowserRouter as Router } from 'react-router-dom';
    import Main from './components/Main'; // import the main component of the app

    const container = document.getElementById('root'); // get the root element from the index.html file
    const root = createRoot(container); // create a root element for the react app

    root.render(
    <Router>
        <Main />
    </Router>,
    );

    // test code; still not working 
import React from 'react'
import { createRoot } from 'react-dom/client';
import App from '../src/App'
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'


// render(
//    <Router>
//       <App />
//    </Router>,
//    document.getElementById('root')
// )

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
   <Router>
      <App />
   </Router>
);
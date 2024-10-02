import React from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';

/*Deprecated
 * ReactDOM.render(<App />, document.getElementById('root'));
*/

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App />);

createRoot(document.getElementById('root')).render(<App />);


import React from 'react';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <h1>This is a title (h1)</h1>
    <input placeholder="This is a input" />
    <button type="button">This is a button</button>
    <GlobalStyle />
  </>
);

export default App;

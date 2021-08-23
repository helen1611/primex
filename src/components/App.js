import React from 'react';
import '../styles/App.scss';

import HeaderApp from './share/HeaderApp';
import LayoutApp from './share/LayoutApp';

const App = () => {
  return (
    <div className="ui">
      <HeaderApp/>
      <LayoutApp/>
    </div>
  
  );
};

export default App;

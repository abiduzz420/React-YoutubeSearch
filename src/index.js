import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyCvJSPJeCuyCC43fqxq8vlzkfS9e2g0iyM';

const App = () => {
  return <SearchBar />;
};

ReactDOM.render(<App />, document.querySelector('.container'));

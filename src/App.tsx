import React from 'react';
import './App.css';
import FinderItem from './components/FinderItem';

function App() {
    return (
        <div className="App">
            <h1 className="App__title">
                BookFinder
            </h1>
            <FinderItem/>
        </div>
    );
}

export default App;

import React, { useEffect } from 'react';
import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js';
import IndexRouter from './route';
import './assets/reset.css';

function App() {
    useEffect(() => {
        figlet.parseFont('Standard', standard);

        figlet.text(
            'OoKiiii',
            {
                font: 'Standard',
            },
            function (err, data) {
                console.log(data);
            },
        );
    }, []);

    return (
        <div className="App">
            <IndexRouter />
        </div>
    );
}

export default App;

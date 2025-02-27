import React from 'react';
import "./App.scss";
import TableProducts from './appComponents/tableComponents/TableProducs';
import TableSales from './appComponents/tableComponents/TableSales';
import BarCharts from './appComponents/chartComponents/BarCharts';

const App = () => {
    return (
        <div>
         <div>
         <h1 id="top">Bachelorprojekt Hochschule Bremerhaven</h1>
            </div>
            <div>
                <BarCharts/>
            </div>
            <div id = "table">
                <TableProducts/>
            </div>
            <div id = "table">
                <TableSales/>
            </div>
        </div>
    )
}

export default App;
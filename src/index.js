import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div class="orderbook">
      <table class="buys">
        <tr>
          <th>Size</th>
          <th>Price (USD)</th>
        </tr>
        <tr>
          <td>1.2</td>
          <td>52000</td>
        </tr>
        <tr>
          <td>0.5</td>
          <td>53000</td>
        </tr>
        <tr>
          <td>0.02</td>
          <td>54000</td>
        </tr>
        <tr>
          <td>0.01</td>
          <td>55000</td>
        </tr>
      </table>
      <div class="spread">Spread: 500 USD</div>
      <table class="sells">
        <tr>
          <th>Size</th>
          <th>Price (USD)</th>
        </tr>
        <tr>
          <td>0.01</td>
          <td>55500</td>
        </tr>
        <tr>
          <td>0.02</td>
          <td>56000</td>
        </tr>
        <tr>
          <td>0.5</td>
          <td>57000</td>
        </tr>
        <tr>
          <td>1.2</td>
          <td>58000</td>
        </tr>
      </table>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

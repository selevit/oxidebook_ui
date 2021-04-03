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


      <form class="new-order-form">
        <p>Create order</p>
        <label>
          <input type="radio" name="type" value="buy" checked/>
          Buy
        </label>
        <label>
          <input type="radio" name="type" value="sell"/>
          Sell
        </label>
        <br/>
        <label for="new-order-price">Price</label>
        <input type="number" id="new-order-price" name="price" placeholder="55000"/>
        <br/>
        <label for="new-order-volume">Volume</label>
        <input type="number" id="new-order-volume" name="volume" placeholder="0.5"/>
        <br/>
        <label for="new-order-kind">Type</label>
        <select id="new-order-kind" name="kind">
          <option value="IoC">IoC</option>
        </select>
        <br/>
        <button type="button">Create</button>
      </form>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

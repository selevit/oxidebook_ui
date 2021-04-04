import {
    Card,
    CardHeader,
    CardBody,
} from 'reactstrap';

function Orderbook(props) {
    return (
        <Card>
            <CardHeader>
                <h5 className="title">Order Book (BTCUSD)</h5>
            </CardHeader>
            <CardBody>
                <div className="orderbook">
                    <div className="side buys">
                        <table>
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
                    </div>
                    <div className="spread">Spread: 500 USD</div>
                    <div className="side sells">
                        <table>
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
                </div>
            </CardBody>
        </Card>
    );
};

export default Orderbook;

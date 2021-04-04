import {
    Card,
    CardHeader,
    CardBody,
} from 'reactstrap';

import BitfinexPublicWSAPI from 'api/Bitfinex.js';
import React from 'react';

class OrderbookData {
    static get Buy() {return 0};
    static get Sell() {return 1};
    
    constructor() {
        this.levels = [new Map(), new Map()];
    }

    spread() {
        return 500;
    }

    getSide(side) {
        let l = [];
        this.levels[side].forEach((volume, price) => {
            l.push([price, volume]);
        });
        return l;
    }

    putOrder(side, price, volume) {
        this.levels[side].set(price, volume);
    }

    removeOrder(side, price) {
        this.levels[side].delete(price);
    }
}

class Orderbook extends React.Component {
    constructor(props) {
        super(props);
        this.ob = new OrderbookData();
        this.state = { ob: this.ob };
    }

    render() {
        return (
            <Card>
                <CardHeader>
                    <h5 className="title">Order Book (BTCUSD)</h5>
                </CardHeader>
                <CardBody>
                    <div className="orderbook">
                        <div className="side buys">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Price (USD)</th>
                                        <th>Size</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.ob.getSide(OrderbookData.Buy).map((v) => (
                                        <tr key={v[0]}>
                                            <td>{v[0]}</td>
                                            <td>{v[1]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="spread">Spread: {this.state.ob.spread()} USD</div>
                        <div className="side sells">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Price (USD)</th>
                                        <th>Size</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.ob.getSide(OrderbookData.Sell).map((v) => (
                                        <tr key={v[0]}>
                                            <td>{v[0]}</td>
                                            <td>{v[1]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </CardBody>
            </Card>
        );
    }

    componentDidMount() {
        const bitfinexAPI = BitfinexPublicWSAPI();

        bitfinexAPI.onmessage = (msg) => {
            const data = JSON.parse(msg.data);
            if (!Array.isArray(data)) {
                return;
            }

            const processLevelUpdate = (value) => {
                let price = value[1][0];

                if (isNaN(price)) {
                    return;
                }

                let count = value[1][1];
                let volume = value[1][2];
                let side;

                if (volume < 0) {
                    side = OrderbookData.Sell;
                    volume *= -1;
                } else {
                    side = OrderbookData.Buy;
                }

                if (count === 0) {
                    this.ob.removeOrder(side, price);
                } else {
                    this.ob.putOrder(side, price, volume);
                }

            };

            if (Array.isArray(data[0])) {
                // Orderbook snapshot
                data.forEach((v) => processLevelUpdate(v));
            } else {
                processLevelUpdate(data);
            }

            this.setState((state, props) => {
                return { ob: this.ob };
            });
        };
    }

};

export default Orderbook;

function BitfinexPublicWSAPI() {
    const w = new WebSocket('wss://api-pub.bitfinex.com/ws/2')

    let msg = JSON.stringify({
        event: 'subscribe',
        channel: 'book',
        symbol: 'tBTCUSD',
        prec: 'P0',
    });

    w.onopen = () => w.send(msg);

    return w;
};

export default BitfinexPublicWSAPI;

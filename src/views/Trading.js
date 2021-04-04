import React from "react";
import {
    Row,
    Col,
 } from 'reactstrap';

import NewOrderForm from "components/NewOrderForm/NewOrderForm.js";
import Orderbook from "components/Orderbook/Orderbook";

function Trading(props) {
    return (
        <div className="content">
            <Row>
                <Col md="5">
                    <Orderbook/>
                </Col>
                <Col md="6">
                    <NewOrderForm/>
                </Col>
            </Row>
        </div>
    )
}

export default Trading;

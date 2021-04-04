import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
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
                <Col md="6">
                    <Orderbook/>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <NewOrderForm/>
                </Col>
            </Row>
        </div>
    )
}

export default Trading;

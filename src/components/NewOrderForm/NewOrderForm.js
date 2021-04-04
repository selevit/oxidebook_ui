import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    Label,
    CardBody,
    CardFooter,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";

function NewOrderForm(props) {
    return (
        <Card>
            <CardHeader>
                <h5 className="title">Create New Order</h5>
            </CardHeader>
            <CardBody>
                <Form>
                    <Row>
                        <Col className="pr-md-1" md="3">
                            <FormGroup>
                                <label>Price (USD)</label>
                                <Input
                                    type="number"
                                    placeholder="52000"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="px-md-1" md="3">
                            <FormGroup>
                                <label>Volume</label>
                                <Input
                                    type="number"
                                    placeholder="0.5"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="pr-md-1" md="2">
                            <FormGroup>
                                <label id="new-order-side">Side</label>
                                <Input type="select" name="type" id="new-order-side">
                                    <option value="buy">Buy</option>
                                    <option value="sell">Sell</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col className="pr-md-1" md="2">
                            <FormGroup>
                                <label id="new-order-type">Type</label>
                                <Input type="select" name="type" id="new-order-type">
                                    <option value="ioc">IoC</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </CardBody>
            <CardFooter>
                <Button className="btn-fill" color="primary" type="button">
                    Create
                </Button>
            </CardFooter>
        </Card>
    );
};

export default NewOrderForm;

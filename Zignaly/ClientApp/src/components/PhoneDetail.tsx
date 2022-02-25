import * as React from 'react';
import { Button, Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class PhoneDetail extends React.PureComponent<{data?:any}> {

    constructor(props:any) {
        super(props);
    }

    public render() {
        return (
            <React.Fragment>
                <Card style={{ width: '29rem', height: '28rem' }}>
                    <Container>
                        <Row>
                            <Col>
                                <Card.Img style={{ width: '18rem', height: '18rem' }} variant="top"
                                    src={`data:image/png;base64, ${this.props.data ? this.props.data.imagedata : ''}`} alt="" />
                            </Col>
                            <Col>
                                <Card.Text style={{ marginTop: '10rem' }}>
                                    Color: {this.props.data ? this.props.data.color : ''}
                                </Card.Text>
                                <Card.Text style={{ marginTop: '.5rem' }}>
                                    Price: {this.props.data ? this.props.data.price : ''}
                                </Card.Text>
                            </Col>
                        </Row>
                    </Container>
                    <Card.Body>
                        <Card.Title>Specification</Card.Title>
                        <Card.Text>
                            {this.props.data ? this.props.data.description : ''}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </React.Fragment>
        );
    }


}
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron } from 'reactstrap';



class Covid extends React.Component {
    render(){
    let data = this.props.data;
    return (
    <>
    <Container>
    <Row className="container">
    <div><h2>รายงานสถานการณ์ โควิด-19</h2></div> <hr/>
    <div><h2>{data.UpdateDate}</h2></div>
    </Row>

        <Row className="container">
            <Col>
                <div>
                    <Jumbotron style={{ colo:'white' ,background:'#e1298e', width: '67rem' ,height:'18rem', mt:'16rem'}}>
                        <p>ติดเชื้อสะสม</p>
                        <h3 className="display-3">{data.Confirmed}</h3>
                        <span>[+{data.NewConfirmed}]</span>
                    </Jumbotron>
                </div>
            </Col>
    </Row>
    <Row className="container">
        <Col sm="4" >
            <div >
                <Jumbotron style={{ colo:'white' ,background:'#046034', width: '22rem' ,height:'18rem'}}>
                    <p>หายแล้ว</p>
                    <h3 className="display-3">{data.Recovered}</h3>
                    <span>[+{data.NewRecovered}]</span>
                </Jumbotron>
            </div>
        </Col>
    
        <Col sm="4" >
            <div>
                <Jumbotron style={{ colo:'white' ,background:'#179c9b', width: '22rem' ,height:'18rem' }}>
                    <p>รักษาอยู่ใน รพ.</p>
                    <h3 className="display-3">{data.Hospitalized}</h3>
                    <span>&nbsp;</span>
                </Jumbotron>
            </div>

        </Col>
        <Col  sm="4">
            <div>
                <Jumbotron style={{ colo:'white' ,background:'#404040', width: '22rem' ,height:'18rem' }}>
                    <p>เสียชีวิต</p>
                    <h3 className="display-3">{data.Deaths}</h3>
                    <span>&nbsp;</span>
                </Jumbotron>
            </div>    
        </Col>
    </Row>
    </Container>
    </>
    )}
    }

export default Covid;
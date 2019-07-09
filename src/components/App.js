import React from 'react'
import { Layout, Typography, Button, Row, Col } from 'antd'
import './app.scss'

// const { Header, Content, Footer } = Layout

function App() {
  return(
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <div className="brand font-questrial">
            <h1 className="lead-text">allpay</h1>
            <h5 className="sub-text">incorporated</h5>
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className="banner">
          <div className="container" style={{ overflow: 'hidden' }}>
            <Row type="flex" justify="space-between">
              <Col id="text-column" sm={24} lg={12}>
                <div className="text-wrapper">
                  <h1 className="title">Allpay Inc.</h1>
                  <p className="text-body">Online payment solution for your business. Let your customers experience the convenience of paying online.</p>
                </div>

                <div className="call-to-action-wrapper">
                  <Button type="primary" size="large" shape="">Learn more</Button>
                </div>
              </Col>

              <Col sm={24} lg={8}>
                <div className="image-wrapper">
                  <img src="/online-payment.png"/>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="features">
          <div className="container">
            <Row className="feature" type="flex" justify="space-between">
              <Col sm={24} lg={12}></Col>
              <Col sm={24} lg={12}>
                <Typography.Title level={2}>{/*More options*/}</Typography.Title>
                <Typography.Text>
                  {/*Enable a variety of payment options by connecting just once*/}
                </Typography.Text>
              </Col>
            </Row>

            <Row className="feature" type="flex" justify="space-between">
              <Col sm={24} lg={12}>
                <Typography.Title level={2}>{/*Monitoring*/}</Typography.Title>
                <Typography.Text>
                  {/*Keep track of your transactions*/}
                </Typography.Text>
              </Col>
              <Col sm={24} lg={12}></Col>
            </Row>

            <Row className="feature" type="flex" justify="space-between">
              <Col sm={24} lg={12}></Col>
              <Col sm={24} lg={12}>
                <Typography.Title level={2}>{/*Insights*/}</Typography.Title>
                <Typography.Text>
                  {/*Enable a variety of payment options by connecting just once*/}
                </Typography.Text>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="page-footer font-questrial">
        <div className="container">
          <Row className="footer-links" type="flex" justify="space-between">
            <Col sm={24} lg={8}>
              <h3>About allpay</h3>
              <p style={{textAlign: 'justify'}}>
                Allpay is an online payment solution for your business that aims to let your customers experience the convenience of paying online.
              </p>
            </Col>
            <Col sm={24} lg={2}>
              <h3 className="font-questrial">Follow Us</h3>
              <ul className="links">
                <li><a>Facebook</a></li>
                <li><a>Instagram</a></li>
                <li><a>Twitter</a></li>
              </ul>
            </Col>
            <Col sm={24} lg={10}>
              <h3 className="font-questrial">Information</h3>
              <ul className="links">
                <li><a>Contact Us</a></li>
                <li><a>About Us</a></li>
                <li><a>FAQ</a></li>
              </ul>
            </Col>
          </Row>

          <Row className="footer-copy" type="flex" justify="space-between">
            <p className="font-questrial">2019 &copy; Allpay Inc.</p>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default App

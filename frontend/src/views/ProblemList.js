/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, Container, Form, Row, Col } from "reactstrap";

// core components
import SimpleNavbar from "components/Navbars/SimpleNavbar.js";

class ProblemList extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <SimpleNavbar />
        <main ref="main">
          <section className="section section-lg section-shaped pb-250">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col className="text-center" lg="6">
                    <h1 className="display-3 text-white">&nbsp;</h1>
                  </Col>
                </Row>
              </div>
            </Container>

            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <Container>
            <Card className="card-profile shadow mt--300">
              <div className="px-4">
                <Form>
                  <br />
                    <h1 className="display-3 text-center">문제 목록</h1>
                  <br />
                  <Container>
                    <table class="table-bordered table-striped table">
                      <thead>
                        <tr>
                          <th class="text-center">No.</th>
                          <th class="text-center">문제 이름</th>
                          <th class="text-center">답변 수</th>
                          <th class="text-center">분야</th>
                          <th class="text-center">난이도</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td><a href="/problem-view-page">Hello world!</a></td>
                          <td>3</td>
                          <td>기초</td>
                          <td>1</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td><a href="/problem-view-page">프로세스와 쓰레드의 차이는?</a></td>
                          <td>2</td>
                          <td>운영체제</td>
                          <td>3</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td><a href="/problem-view-page">UDP와 TCP의 차이는?</a></td>
                          <td>0</td>
                          <td>네트워크</td>
                          <td>3</td>
                        </tr>
                      </tbody>
                    </table>
                  </Container>
                </Form>
              </div>
            </Card>
          </Container>
          <br />
          <br />
        </main>
      </>
    );
  }
}

export default ProblemList;

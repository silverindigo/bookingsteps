import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import _ from "lodash";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QtyCounter from "../QtyCounter/QtyCounter";
import FieldSection from "../FieldSection/FieldSection";
import NavigationProgress from "../NavigationProgress/NavigationProgress";
export default class BookingStepForm extends Component {
  state = {
    // step1:
    sizeUnder31InchQty: 0,
    size31To60InchQty: 0,
    size60To80InchQty: 0,
    helpLiftTV: "",
    over80InchQty: 0,
    // step2:
    fixedQty: 0,
    tiltQty: 0,
    fullMotionQty: 0,
    ownBracket: false,
    // step3:
    tvBeMounted: false,
    currentTVNeedsDismount: false,
    // step4:
    externalCordConcealmentQty: 0,
    inWallCordConcealmentWithPowerQty: 0,
    installSoundNarQty: 0
  };

  handleChangeField = (stateKey, value) => {
    this.setState({ [stateKey]: value });
  };
  render() {
    return (
      <>
        <Container className="pt-5">
          <Row>
            <Col xs={{ span: 10, offset: 1 }}>
              <h5 className="py-2">
                <span className="text-primary">
                  <strong>1</strong>{" "}
                  <FontAwesomeIcon icon={faLongArrowAltRight} />
                </span>
                <span className="text-muted ml-4">
                  What tv size did you get?
                </span>
              </h5>
              <Row>
                <Col>
                  <div className="text-muted text-center">
                    <small>SIZE</small>
                  </div>
                </Col>
                <Col>
                  <div className="text-muted text-right pr-5">
                    <small>QTY</small>
                  </div>
                </Col>
              </Row>
              <FieldSection>
                <Row>
                  <Col>
                    <strong>Under 31</strong>"
                  </Col>
                  <Col>
                    <div className="d-flex justify-content-end">
                      <QtyCounter
                        value={this.state.sizeUnder31InchQty}
                        stateKey="sizeUnder31InchQty"
                        handleChangeField={this.handleChangeField}
                      />
                    </div>
                  </Col>
                </Row>
              </FieldSection>
              <FieldSection>
                <Row>
                  <Col>
                    <strong>31-60"</strong>
                  </Col>
                  <Col>
                    <div className="d-flex justify-content-end">
                      <QtyCounter
                        value={this.state.size31To60InchQty}
                        stateKey="size31To60InchQty"
                        handleChangeField={this.handleChangeField}
                      />
                    </div>
                  </Col>
                </Row>
              </FieldSection>
              <FieldSection>
                <Row>
                  <Col>
                    <strong>60-80"</strong>
                  </Col>
                  <Col>
                    <div className="d-flex justify-content-end">
                      <QtyCounter
                        value={this.state.size60To80InchQty}
                        stateKey="size60To80InchQty"
                        handleChangeField={this.handleChangeField}
                      />
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <strong>Will you help lift the TV?</strong>
                  </Col>
                  <Col>
                    <div className="d-flex justify-content-end">
                      <Button variant="outline-primary">No</Button>
                      <span className="px-2"></span>
                      <Button variant="outline-primary">Yes</Button>
                    </div>
                  </Col>
                </Row>
              </FieldSection>

              <FieldSection>
                <Row>
                  <Col>
                    <strong>Over 80"</strong>
                  </Col>
                  <Col>
                    <div className="d-flex justify-content-end">
                      <QtyCounter
                        value={this.state.over80InchQty}
                        stateKey="over80InchQty"
                        handleChangeField={this.handleChangeField}
                      />
                    </div>
                  </Col>
                </Row>
              </FieldSection>
            </Col>
          </Row>
        </Container>
        <NavigationProgress />
      </>
    );
  }
}

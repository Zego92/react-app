import PropTypes from "prop-types"
import React, { Component } from "react"
import {
  Alert,
  Card,
  CardBody,
  Col,
  Container,
  Row,
  UncontrolledAlert,
} from "reactstrap"

// Redux
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"

// availity-reactstrap-validation
import { AvField, AvForm } from "availity-reactstrap-validation"

// action
import { userForgetPassword } from "../../store/actions"

// import images
import logoLightPng from "../../assets/images/logo-light.png"

class ForgetPasswordPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    // handleValidSubmit
    this.handleValidSubmit = this.handleValidSubmit.bind(this)
  }

  // handleValidSubmit
  handleValidSubmit(event, values) {
    this.props.userForgetPassword(values, this.props.history)
  }

  render() {
    return (
      <React.Fragment>
        <div className="account-pages my-5 pt-sm-5">
          <Container>
            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="overflow-hidden">
                  <div className="bg-primary bg-dark">
                    <Row>
                      <Col className="col-6 offset-3">
                        <div className="p-4 text-center">
                          <img src={logoLightPng} alt="" height="19" />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <CardBody className="pt-2">
                    <div className="p-2">
                      {!!this.props.forgetSuccessMsg && (
                        <UncontrolledAlert
                          color="success"
                          className="alert-dismissible fade show"
                          role="alert"
                        >
                          <i className="mdi mdi-check-all me-2" />
                          {this.props.forgetSuccessMsg}
                        </UncontrolledAlert>
                      )}
                      {!!this.props.forgetError && (
                        <UncontrolledAlert
                          color="danger"
                          className="alert-dismissible fade show"
                          role="alert"
                        >
                          <i className="mdi mdi-block-helper me-2" />
                          {this.props.forgetError}
                        </UncontrolledAlert>
                      )}

                      <AvForm
                        className="form-horizontal"
                        onValidSubmit={this.handleValidSubmit}
                      >
                        <div className="mb-3">
                          <AvField
                            name="email"
                            label="Email"
                            className="form-control"
                            placeholder="Enter email"
                            type="email"
                            required
                          />
                        </div>
                        <div className="mt-4 d-grid">
                          <button
                            className="btn btn-primary btn-block waves-effect waves-light"
                            type="submit"
                          >
                            Reset
                          </button>
                        </div>
                      </AvForm>
                    </div>
                  </CardBody>
                </Card>
                <div className="mt-0 text-center">
                  <p>
                    Go back to
                    <Link to="login" className="fw-medium text-primary px-1">
                      Login
                    </Link>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

ForgetPasswordPage.propTypes = {
  forgetError: PropTypes.func,
  forgetSuccessMsg: PropTypes.func,
  history: PropTypes.object,
  userForgetPassword: PropTypes.any,
}

const mapStateToProps = state => {
  const { forgetError, forgetSuccessMsg } = state.ForgetPassword
  return { forgetError, forgetSuccessMsg }
}

export default withRouter(
  connect(mapStateToProps, { userForgetPassword })(ForgetPasswordPage)
)

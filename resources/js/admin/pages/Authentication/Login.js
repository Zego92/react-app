import React, { useEffect } from "react"
import PropTypes from "prop-types"
import {
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

// actions
import { apiError, loginUser, socialLogin } from "../../store/actions"

import { post } from "../../helpers/api_helper"

import FormHeader from "./common/FormHeader"
import LinkTo from "./common/LinkTo"

const Login = props => {
  const handleValidSubmit = (event, values) => {
    console.log(values)
    props.loginUser(values, props.history)
  }

  useEffect(() => {
    // post('/login', {
    //     user_name: 'username',
    //     password: 'mypassword',
    // })
    //     .then(data => {
    //         console.log(data);
    //     })
    props.apiError("")
  }, [])

  return (
    <Container className="account-pages my-5 pt-sm-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={5}>
          <Card className="overflow-hidden">
            <FormHeader />
            <CardBody className="pt-2">
              <div className="p-2">
                <AvForm
                  className="form-horizontal"
                  onValidSubmit={handleValidSubmit}
                >
                  {!!props.error && (
                    <UncontrolledAlert
                      color="danger"
                      className="alert-dismissible fade show"
                      role="alert"
                    >
                      <i className="mdi mdi-block-helper me-2" />
                      {this.props.error}
                    </UncontrolledAlert>
                  )}
                  <div className="mb-3">
                    <AvField
                      name="email"
                      label="Email"
                      value="admin@themesbrand.com"
                      className="form-control"
                      placeholder="Enter email"
                      type="email"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <AvField
                      name="password"
                      label="Password"
                      value="123456"
                      type="password"
                      required
                      placeholder="Enter Password"
                    />
                  </div>

                  <div className="mt-3 d-grid">
                    <button
                      className="btn btn-primary btn-block waves-effect waves-light"
                      type="submit"
                    >
                      Log In
                    </button>
                  </div>
                  <div className="mt-4 text-center">
                    <Link to="/forgot-password" className="text-muted">
                      <i className="mdi mdi-lock me-1" /> Forgot your password?
                    </Link>
                  </div>
                </AvForm>
              </div>
            </CardBody>
          </Card>
          <LinkTo link="register" />
        </Col>
      </Row>
    </Container>
  )
}

Login.propTypes = {
  apiError: PropTypes.any,
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func,
  socialLogin: PropTypes.func,
}

const mapStateToProps = state => {
  const { error } = state.Login
  return { error }
}

export default withRouter(
  connect(mapStateToProps, { loginUser, apiError, socialLogin })(Login)
)

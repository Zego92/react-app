import PropTypes from "prop-types"
import React, { Component } from "react"
import {
  Alert,
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Media,
  Row,
  UncontrolledAlert,
} from "reactstrap"

// availity-reactstrap-validation
import { AvField, AvForm } from "availity-reactstrap-validation"

// Redux
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import avatar from "../../assets/images/users/avatar-1.jpg"
// actions
import { editProfile, resetProfileFlag } from "../../store/actions"

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      name: "",
      idx: 1,
      profession: "UI/UX designer",
      oldPassword: "old passwrod SuPeRpASS",
      newPassword: "NEW passwrod NewWpASS",
    }

    // handleValidSubmit
    this.handleValidSubmit = this.handleValidSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange({ target }) {
    const { name, value } = target
    this.setState({ [name]: value })
  }
  // handleValidSubmit
  handleValidSubmit(event, values) {
    this.props.editProfile(values)
  }
  // no value in obj

  // componentDidMount() {
  //   if (localStorage.getItem("authUser")) {
  //     const obj = JSON.parse(localStorage.getItem("authUser"))
  //     if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
  //       this.setState({
  //         name: obj.displayName,
  //         email: obj.email,
  //         idx: obj.uid,
  //       })
  //     } else if (
  //       process.env.REACT_APP_DEFAULTAUTH === "fake" ||
  //       process.env.REACT_APP_DEFAULTAUTH === "jwt"
  //     ) {
  //       this.setState({ name: obj.username, email: obj.email, idx: obj.uid })
  //     }
  //   }
  // }

  // // eslint-disable-next-line no-unused-vars
  // componentDidUpdate(prevProps, prevState, ss) {
  //   if (this.props !== prevProps) {
  //     const obj = JSON.parse(localStorage.getItem("authUser"));
  //     if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
  //       this.setState({
  //         name: obj.displayName,
  //         email: obj.email,
  //         idx: obj.uid,
  //       })
  //     } else if (
  //       process.env.REACT_APP_DEFAULTAUTH === "fake" ||
  //       process.env.REACT_APP_DEFAULTAUTH === "jwt"
  //     ) {
  //       this.setState({ name: obj.username, email: obj.email, idx: obj.uid })
  //     }
  //     setTimeout(() => {
  //       this.props.resetProfileFlag()
  //     }, 3000)
  //   }
  // }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Row>
              <Col lg={{ size: 6, offset: 3 }}>
                {!!this.props.error && (
                  <UncontrolledAlert
                    color="danger"
                    className="alert-dismissible fade show"
                    role="alert"
                  >
                    <i className="mdi mdi-block-helper me-2" />
                    {this.props.error}
                  </UncontrolledAlert>
                )}
                {!!this.props.success && (
                  <UncontrolledAlert
                    color="success"
                    className="alert-dismissible fade show"
                    role="alert"
                  >
                    <i className="mdi mdi-check-all me-2" />
                    {this.props.success}
                  </UncontrolledAlert>
                )}
              </Col>
            </Row>
            <Row>
              <Col lg="6" md="10">
                <h4 className="card-title mb-4">Change contact details</h4>
                <Card>
                  <CardBody>
                    <Media>
                      <div className="me-4 flex-column d-flex">
                        <img
                          src={avatar}
                          alt=""
                          className="avatar-lg rounded-circle img-thumbnail"
                        />
                        <label className="d-flex align-items-center">
                          <input type="file" className="d-none" />
                          <small>Upload Your Photo</small>
                          <i className="mdi mdi-upload d-block font-size-20" />
                        </label>
                      </div>
                      <Media body className="align-self-center">
                        <div className="text-muted">
                          <AvForm
                            onValidSubmit={(e, v) => {
                              this.handleValidSubmit(e, v)
                            }}
                          >
                            <div className="form-group">
                              <Row className="mb-3">
                                <div className="col-md-6">
                                  <input
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    placeholder=""
                                    type="text"
                                    required
                                  />
                                </div>
                                <label
                                  htmlFor="example-text-input"
                                  className="col-md-6 col-form-label"
                                >
                                  User Name
                                </label>
                              </Row>
                              <Row className="mb-3">
                                <div className="col-md-6">
                                  <input
                                    name="profession"
                                    value={this.state.profession}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    placeholder=""
                                    type="text"
                                    required
                                  />
                                </div>
                                <label
                                  htmlFor="example-text-input"
                                  className="col-md-6 col-form-label"
                                >
                                  Profession
                                </label>
                              </Row>
                              <AvField
                                name="idx"
                                value={this.state.idx}
                                type="hidden"
                              />
                            </div>
                            <div className="mt-4">
                              <Button
                                type="submit"
                                color="primary"
                                className="btn-sm px-5"
                              >
                                Save
                              </Button>
                            </div>
                          </AvForm>
                        </div>
                      </Media>
                    </Media>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" md="10">
                <h4 className="card-title mb-4">Change password</h4>
                <Card>
                  <CardBody className="text-muted">
                    <AvForm
                      onValidSubmit={(e, v) => {
                        this.handleValidSubmit(e, v)
                      }}
                    >
                      <div className="form-group">
                        <Row className="mb-3">
                          <div className="col-md-6">
                            <input
                              name="oldPassword"
                              value={this.state.oldPassword}
                              onChange={this.handleChange}
                              className="form-control"
                              placeholder=""
                              type="text"
                              required
                            />
                          </div>
                          <label
                            htmlFor="example-text-input"
                            className="col-md-6 col-form-label"
                          >
                            Put Old Password
                          </label>
                        </Row>
                        <Row className="mb-3">
                          <div className="col-md-6">
                            <input
                              name="newPassword"
                              value={this.state.newPassword}
                              onChange={this.handleChange}
                              className="form-control"
                              placeholder=""
                              type="text"
                              required
                            />
                          </div>
                          <label
                            htmlFor="example-text-input"
                            className="col-md-6 col-form-label"
                          >
                            Put New Password
                          </label>
                        </Row>
                        <AvField
                          name="idx"
                          value={this.state.idx}
                          type="hidden"
                        />
                      </div>
                      <div className="mt-4">
                        <Button
                          type="submit"
                          color="primary"
                          className="btn-sm px-5"
                        >
                          Change
                        </Button>
                      </div>
                    </AvForm>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

UserProfile.propTypes = {
  editProfile: PropTypes.func,
  error: PropTypes.any,
  success: PropTypes.any,
}

const mapStateToProps = state => {
  const { error, success } = state.Profile
  return { error, success }
}

export default withRouter(
  connect(mapStateToProps, { editProfile, resetProfileFlag })(UserProfile)
)

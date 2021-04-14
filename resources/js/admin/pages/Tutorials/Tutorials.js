import React, { useState, Fragment } from "react"
import { Container, Row, Col } from "reactstrap"

import tutorialsList from "../../common/data/tutorials"
import TutorialCard from "./TutorialCard"
import { Modal } from "reactstrap"

function Tutorials() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [video, setVideo] = useState('');

  const clickHandler = (video) => () => {
    setModalIsOpen(true)
    setVideo(video)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h3>Tutorials</h3>
          <Row className="mt-4">
            <Col lg={9}>
              {tutorialsList.map(({ id, title, text, video }) => {
                return (
                  <Fragment key={id}>
                    <TutorialCard
                      title={title}
                      text={text}
                      clickHandler={clickHandler}
                      video={video}
                    />
                  </Fragment>
                )
              })}
            </Col>
          </Row>
        </Container>
      </div>
      <Modal isOpen={modalIsOpen} toggle={() => setModalIsOpen(false)} xl={10} centered>
        <div className="embed-responsive embed-responsive-16by9 ratio ratio-16x9">
          <iframe title="test" className="embed-responsive-item" src={video} />
        </div>
      </Modal>
    </React.Fragment>
  )
}

export default Tutorials

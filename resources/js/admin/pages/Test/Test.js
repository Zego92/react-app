import React, { useState, useRef } from "react"
import {
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  FormGroup,
  Form,
  Button,
  Fade,
  FormFeedback,
  Container,
} from "reactstrap"
import { ExcelRenderer } from "react-excel-renderer"
import TableUI from "../../components/Common/TableUIfromExcel"
import { fixHeadStyle } from "../../common/helpers"

function App() {
  const [dataLoaded, setDataLoaded] = useState(false)
  const [isFormInvalid, setIsFormInvalid] = useState(false)
  const [rows, setRows] = useState([])
  const [uploadedFileName, setUploadedFileName] = useState("")
  const fileInput = useRef()

  const renderFile = fileObj => {
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err)
      } else {
        const rows = fixHeadStyle(resp.rows)

        setRows(rows)
        setDataLoaded(true)
      }
    })
  }

  const fileHandler = ({ target }) => {
    if (target.files.length) {
      const fileObj = target.files[0]
      const fileName = fileObj.name
      const fileType = fileName.slice(fileName.lastIndexOf(".") + 1)

      if (fileType === "csv" || fileType === "xlsx") {
        setIsFormInvalid(false)
        setUploadedFileName(fileName)
        renderFile(fileObj)
      } else {
        setIsFormInvalid(true)
        setUploadedFileName("")
      }
    }
  }

  const openFileBrowser = () => fileInput.current.click()

  return (
    <div className="page-content">
      <Container fluid>
        <Form>
          <FormGroup row>
            <Col lg={7}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <Button
                    color="info"
                    style={{ color: "white", zIndex: 0 }}
                    onClick={openFileBrowser}
                  >
                    <i className="cui-file"></i>
                    Browse&hellip;
                  </Button>
                  <input
                    type="file"
                    className="p-10"
                    hidden
                    onChange={fileHandler}
                    ref={fileInput}
                  />
                </InputGroupAddon>
                <Input
                  type="text"
                  className="form-control"
                  value={uploadedFileName}
                  readOnly
                  invalid={isFormInvalid}
                />
                <FormFeedback>
                  <Fade
                    in={isFormInvalid}
                    tag="h6"
                    style={{
                      fontStyle: "italic",
                      color: "red",
                      marginLeft: 80,
                    }}
                  >
                    Please select a .xlsx file only !
                  </Fade>
                </FormFeedback>
              </InputGroup>
            </Col>
          </FormGroup>
        </Form>

        {dataLoaded && <TableUI rows={rows} />}
      </Container>
    </div>
  )
}

export default App

import React, { useState } from "react"
import PropTypes from "prop-types"
import { Card, Form } from "reactstrap"
import Dropzone from "react-dropzone"
import { ExcelRenderer } from "react-excel-renderer"
import { fixHeadStyle } from "../../../../common/helpers"

const DropUpload = ({ getData }) => {
  const [selectedFile, setselectedFiles] = useState({})
  const [typeError, setTypeError] = useState(false)

  function handleAcceptedFiles(files) {
    const file = files[0]
    const fileType = file.name.slice(file.name.lastIndexOf(".") + 1)
    if (fileType === "csv" || fileType === "xlsx") {
      const excelFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
        fileType,
      })
      setTypeError(false)
      setselectedFiles(excelFile)
      ExcelRenderer(excelFile, (err, resp) => {
        if (err) {
          console.log(err)
        } else {
          const rows = fixHeadStyle(resp.rows)

          getData(rows)
        }
      })
    } else {
      setTypeError(true)
    }
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  return (
    <React.Fragment>
      <Form>
        <Dropzone
          onDrop={acceptedFiles => {
            handleAcceptedFiles(acceptedFiles)
          }}
        >
          {({ getRootProps, getInputProps }) => {
            return (
              <div className="dropzone">
                <div className="dz-message needsclick mt-2" {...getRootProps()}>
                  <input {...getInputProps()} />
                  <div className="mb-3">
                    <i className="display-3 text-muted bx bxs-cloud-upload" />
                  </div>
                  <h4>Drop files here or click to upload.</h4>
                  {/* <p>files type 'csv' or 'xlsx'</p> */}
                </div>
              </div>
            )
          }}
        </Dropzone>
        <div className="dropzone-previews mt-3" id="file-previews">
          {Boolean(selectedFile.name) && (
            <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete">
              <div className="p-2" style={{ display: "flex" }}>
                <p className="text-muted font-weight-bold m-0">
                  {selectedFile.name}
                </p>
                <p className="mb-0 mx-4">
                  <strong>{selectedFile.formattedSize}</strong>
                </p>
              </div>
            </Card>
          )}

          {typeError && <p>EROOR TYPE</p>}
        </div>
      </Form>
    </React.Fragment>
  )
}

DropUpload.defaultProps = {
  // getTarNames: (e) => e
}

DropUpload.propTypes = {
  getData: PropTypes.func.isRequired,
  // getTarNames: PropTypes.func.isRequired,
}

export default DropUpload

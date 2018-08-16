import React from 'react'
import './ModalUpload.css';

import { Modal } from 'react-bootstrap'


//CONVERT FILE SIZE
const humanFileSize = (size) => {
    let i = Math.floor( Math.log(size) / Math.log(1024) )
    return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i]
}

const ModalUpload = ({ files, filesLinks, handleShow, handleHide, show, startUpload, uploading }) => (

  <div>

    <Modal className="ModalUpload" show={show} onHide={handleHide}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>

        <div className="modal-fixed-height">

          { /* DEFAULT */ }
          {uploading === 0 && <div>
            <h4>You are about to upload <b>({files.length})</b> file(s) ({files[0] && humanFileSize(files[0].size)})</h4>
            <span className="btn btn-upload" onClick={startUpload}>YES PLEASE !</span>
          </div>}
          { /* UPLOADING */ }
          {uploading === 1 && <div>
            <center><img className="loader" src="https://i.pinimg.com/originals/58/4b/60/584b607f5c2ff075429dc0e7b8d142ef.gif" alt="wait..." /></center>
          </div>}
          { /* FINISHED */ }
          {uploading === 2 && <div>
              <h4>Upload success ! Here is your file(s) link(s) :</h4>
              <p><a target="blank" href={filesLinks}>{filesLinks}</a></p>
          </div>}

        </div>
      </Modal.Body>
      {/*<Modal.Footer><Button onClick={handleHide}>Close</Button></Modal.Footer> */ }
    </Modal>

  </div>

)


export default ModalUpload

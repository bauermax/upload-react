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

      <Modal.Body>

        <div className="modal-fixed-height">

          { /* DEFAULT */ }
          {uploading === 0 && <div>
            <div className="modal-padding modal-step-1">
              <h4>You are about to upload <b>({files.length})</b> file(s) ({files[0] && humanFileSize(files[0].size)})</h4>
              <span className="btn btn-upload" onClick={startUpload}>GO !</span>
            </div>
          </div>}
          { /* UPLOADING */ }
          {uploading === 1 && <div>
            <div className="uploading-spaceship">
              <p>Please wait while we are sending your files to the server</p>
            </div>
            {/*<center><img className="loader" src="https://i.pinimg.com/originals/58/4b/60/584b607f5c2ff075429dc0e7b8d142ef.gif" alt="wait..." /></center>*/}
          </div>}
          { /* FINISHED */ }
          {uploading === 2 && <div>
            <div className="modal-padding modal-step-3">
              <h4>Upload success ! Here are your links :</h4>
              <a className="box-upload-link" target="blank" href={filesLinks}>{filesLinks}</a>
            </div>
          </div>}

        </div>
      </Modal.Body>
      {/*<Modal.Footer><Button onClick={handleHide}>Close</Button></Modal.Footer> */ }
    </Modal>

  </div>

)


export default ModalUpload

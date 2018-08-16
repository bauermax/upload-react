import React, { Component } from 'react'
import './Home.css';
/* PROVIDERS */
import Api from '../../providers/Api'
/* COMPONENTS */
import {  } from 'react-bootstrap'
//import ModalSuccess from '../../components/ModalSuccess/ModalSuccess'
import ModalUpload from '../../components/ModalUpload/ModalUpload'

class Home extends Component {

  state = {
    uploadState: 0,
    showModal: false,
    filesSelected: [],
    filesLinks: null,
    showModalUpload: false
  }
  /*  JOB FUNCTIONS */
  inputChange = (event) => {
    console.log(event.target.files)
    this.setState({filesSelected: event.target.files,showModalUpload: true})
  }

  inputSubmit = (event) => {
    event.preventDefault()
    this.setState({uploadState: 1},this.uploadFile())
  }

  showModalUpload = () => {
    this.setState({ showModalUpload: true })
  }

  hideModalUpload = () => {
    this.setState({uploadState: 0})
    this.setState({ showModalUpload: false })
  }


  /* INTERNAL FUNCTIONS */
  uploadFile (){
    Api.uploadFile(this.state.filesSelected[0])
       .then(res => this.setState({filesLinks: res.url,uploadState: 2}))
  }
  /* RENDER */
  render() {
    return (
      <div className="HomePage">


        <div className="container-main">

          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <div className="presentation-container">
                  <h1 className="main-title">Simply share your files</h1>

                  <p className="main-description">
                    EasyUpload is a service to allow you to share your personal files with people all around the world for free !
                  </p>

                    <br />
                    <form onSubmit={this.inputSubmit}>
                      <input type="file" multiple onChange={this.inputChange} id="fileInput" name="fileInput" hidden={true}/>
                      <label htmlFor="fileInput" className="label-upload-btn" >Select a file to upload</label>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>


        {/*<div className="container container-second">hello</div>*/}

        <ModalUpload
          files={this.state.filesSelected}
          show={this.state.showModalUpload}
          uploading={this.state.uploadState}
          handleShow={this.showModalUpload}
          handleHide={this.hideModalUpload}
          startUpload={this.inputSubmit}
          filesLinks={this.state.filesLinks}
        />


      </div>



    );
  }
}

export default Home;

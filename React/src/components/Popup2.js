
import React from 'react';
import './style.css';
import axios from 'axios'
const endpoint = "http://localhost:8000/upload"

class Popup2 extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedFile: null,
      loaded: 0,
      showPopup: false,
    }
  }
  handleselectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }
  handleUpload = () => {
    const data = new FormData()
    data.append('file', this.state.selectedFile, this.state.selectedFile.name)

    axios
      .post(endpoint, data, {
        onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
          })
        },
      })
      .then(res => {
        console.log(res.statusText)
      })
  }
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>Ingrese la información del Archivo</h1>
          <input type="file" name="" id="" onChange={this.handleselectedFile} />
        <button onClick={this.handleUpload}>Subir</button>
        
        <button onClick={this.props.closePopup}>Cerrar</button>
        </div>
        
      </div>
    );
  }
}


export default Popup2;
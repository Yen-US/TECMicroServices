import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import './style.css';
import axios from 'axios'
const endpoint = "http://localhost:8000/upload"


class Popup extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedFile: null,
      loaded: 0,
      showPopup: false,
      nombre: '',
      descripcion: '',
    }
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { bookID, bookTitle, bookAuthor } = this.state;

    const fileMeta = {
      bookID,
      bookTitle,
      bookAuthor,
    };

    axios
      .post('http://localhost:8000/login', fileMeta)
      .then(() => console.log('Book Created'))
      .catch(err => {
        console.error(err);
      });
  };

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

  upload(){
  
  }
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>Ingrese la información del Archivo</h1>
          <h2><TextField
              
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nombre"
              label="Nombre"
              name="nombre"
              autoComplete="nombre"
              autoFocus
              onChange={this._handleTextFieldChangeU}
            />
            <TextField
              
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="descripcion"
              label="Descripcion"
              name="descripcion"
              autoFocus
              onChange={this._handleTextFieldChangeU}
            />
            
             </h2>
             <h3><input type="file" name="" id="" onChange={this.handleselectedFile} />
        <button onClick={this.handleUpload}>Subir</button>
        </h3>
        <h4><Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.props.closePopup}
            >
            Subir
            </Button></h4>
        
        </div>
        
      </div>
    );
  }
}


export default Popup;
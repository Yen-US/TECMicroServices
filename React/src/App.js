import React from 'react';
import './assets/css/App.css';
import './assets/css/table.css';
import axios from 'axios'

const endpoint = "http://localhost:8000/upload"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedFile: null,
      loaded: 0,
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
/*callAPI() {
    fetch("http://localhost:8000")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}
componentWillMount() {
    this.callAPI();
}*/

  render(){
    return(
    <div className="App">
      <header className="App-header">
      <h1> TEC Micro Services
      </h1>
        <div>
        <table className="blueTable">
          <thead>
          <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Fecha de creación</th>
          <th>Última actualización</th>
          <th>Usuario</th>
          </tr>
          </thead>
          <tfoot>
          <tr>
          <td colSpan="5">
          <div className="links"> 
         <div>  <a href="#">+</a> <a href="#">Descargar</a></div> </div>
          </td>
          </tr>
          </tfoot>
          <tbody>
          <tr>
          <td>cell1_1</td><td>cell2_1</td><td>cell3_1</td><td>cell4_1</td><td>cell5_1</td></tr>
          <tr>
          <td>cell1_2</td><td>cell2_2</td><td>cell3_2</td><td>cell4_2</td><td>cell5_2</td></tr>
          <tr>
          <td>cell1_3</td><td>cell2_3</td><td>cell3_3</td><td>cell4_3</td><td>cell5_3</td></tr>
          <tr>
          <td>cell1_4</td><td>cell2_4</td><td>cell3_4</td><td>cell4_4</td><td>cell5_4</td></tr>
          <tr>
          <td>cell1_5</td><td>cell2_5</td><td>cell3_5</td><td>cell4_5</td><td>cell5_5</td></tr>
          <tr>
          <td>cell1_6</td><td>cell2_6</td><td>cell3_6</td><td>cell4_6</td><td>cell5_6</td></tr>
          <tr>
          <td>cell1_7</td><td>cell2_7</td><td>cell3_7</td><td>cell4_7</td><td>cell5_7</td></tr>
          <tr>
          <td>cell1_8</td><td>cell2_8</td><td>cell3_8</td><td>cell4_8</td><td>cell5_8</td></tr>
          <tr>
          <td>cell1_9</td><td>cell2_9</td><td>cell3_9</td><td>cell4_9</td><td>cell5_9</td></tr>
          <tr>
          <td>cell1_10</td><td>cell2_10</td><td>cell3_10</td><td>cell4_10</td><td>cell5_10</td></tr>
          </tbody>

          </table>
          </div>

      </header>
    </div>
    )
}
}

export default App;

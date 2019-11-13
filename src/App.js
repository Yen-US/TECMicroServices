import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import './assets/css/table.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> TEC Micro Services
      </h1>
        <div>
        <table class="blueTable">
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
          <td colspan="5">
          <div class="links"><a href="#">&laquo;</a> <a class="active" href="#">1</a> <a href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a href="#">&raquo;</a></div>
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
  );
}

export default App;

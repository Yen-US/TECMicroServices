import React from 'react';
import './assets/css/login.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import "./index"
import ReactDOM from 'react-dom';
import App from "./App"
import getLog from "./loginXML"

var user = "";
var password = "";
var flag=false;
 
class login extends React.Component{

  render() {
    return(
      <div className="login-header">
        <h1>
        TEC Micro Services
        </h1>
        <div>
        <TextField
              
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="user"
              label="Usuario"
              name="user"
              autoComplete="user"
              autoFocus
              onChange={this._handleTextFieldChangeU}
            />

            <TextField
              
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this._handleTextFieldChangeP}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.verLog}
            >
            Iniciar Sesión
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Olvido su contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"No tiene una cuenta?"}
                </Link>
              </Grid>
            </Grid>
      </div>

      </div>

    )
  }


verLog(){
  
  function verLogon(e){
    if (user === e.user && password === e.password){
      flag=true
      return (ReactDOM.render(<App/>, document.getElementById('root')));
    };
  }

  getLog().forEach(element => verLogon(element));
  if(flag){}else{
    return (alert("Usuario o Contraseña Incorrectos"))
  }
}

_handleTextFieldChangeU(e){
    user=e.target.value
    
}

_handleTextFieldChangeP(e){
  password=e.target.value
}
}

export default login

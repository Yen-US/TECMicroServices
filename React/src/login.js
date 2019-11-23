import React from 'react';
import './assets/css/login.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import "./index"
import ReactDOM from 'react-dom';
import App from "./App"
import axios from 'axios'



var flag=false;
var user = ""
var password =""
class login extends React.Component{

  handleInputChangeu = e => {
      user = e.target.value;
    
  };
  handleInputChangep = e => {
    password = e.target.value;
  
};

  handleSubmit = e => {
    e.preventDefault();

    const { user, password } = this.state;

    const fileMeta = {
      user,
      password,
    };

    axios
      .post('http://localhost:8000/login', fileMeta)
      .then(() => console.log('Login Reached'))
      .catch(err => {
        console.error(err);
      });
  };


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
              onChange={this.handleInputChangeu}
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
              onChange={this.handleInputChangep}
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
  
  
    if (user === "admin" && password === "admin"){
      flag=true
      return (ReactDOM.render(<App/>, document.getElementById('root')));
    
  }

  if(flag){}else{
    return (alert("Usuario o Contraseña Incorrectos"))
  }
}

}

export default login

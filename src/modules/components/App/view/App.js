//@flow
import React from 'react';
import { connect } from 'react-redux';
import type {Store} from '../../../../shared/flowTypes/flowTypes';
import '../../../../styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import theme from '../../../../theme';
import Rotas from '../../../../Rotas/rotas';
import SideNavBar from '../../../../shared/SideNavBar/SideNavBar';
import TopNavBar from '../../../../shared/TopNavBar/TopNavBar';
import Login from '../../Login/view/Login';
import InitialStateLogin from '../../Login/redux/reducer'

import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import {push} from 'connected-react-router';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  imgbox: {
    display: 'grid',
    height: '100%',
  },
  centerFit: {
      maxWidth: '100%',
      maxHeight: '100%',
      margin: 'auto',
      minWidth: '100%',
      minHeight: '100%',
  },
  centerFitContainer: {
    position: 'absolute',
    maxWidth: '100%',
    maxHeight: '100vh',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerLogin: {
    display: 'flex',
  },
  containerLogo: {
    display: 'flex',
    marginLeft: '17%',
    marginTop: '20%',
  },
  containerControls: {
    display: 'flex',
    width: '100%',
    marginTop: '200px',
    flexDirection: 'column',
  },
  containerButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '60px',
    marginLeft: '10px',
    marginRight: '10px',
  },
  textBoxUser: {
    width: '85%',
    marginLeft: '28px',
  },
  textBoxPassword: {
    width: '85%',
    marginTop: '30px',
    marginLeft: '28px',
  },
  input: {
    color: "#ffffff"
  },
  logo: {
    width: '116px',
    height: '150px',
    marginTop: '-20px',
  },
  
}));

function App() {
  const classes = useStyles();
  const [usuario, setUsuario] = React.useState()
  const [senha, setSenha] = React.useState()
  const [isConnected, setLogin] = React.useState(false)

  const executarLogin = () => {
      if (usuario === 'admin' && senha === '123456')
          setLogin(true)
      else
        setLogin(false)
  }

  const handleUserChange = (event) => {
      setUsuario(event.target.value)
  }

  const handlePasswordChange = (event) => {
      setSenha(event.target.value)
  }

  return (
    <Router>
      <div className="App">
        {
          !isConnected ? 
          <Paper className={classes.imgbox}>
              <img className={classes.centerFit} src={require('../../../../shared/img/SistemaConsultorioBG.png')} />
              <Container className={classes.centerFitContainer} >
                <div className={classes.containerLogin}>
                  <div className="top-container-login">
                    <span className="login-title">ACESSO AO SISTEMA</span>
                  </div>
                  <div className="bottom-container-login">
                    <div className={classes.containerControls}>
                      <TextField InputProps={{className: classes.input}} id="userName" label="Usuário" value={usuario} className={classes.textBoxUser} onChange={handleUserChange} />
                      <TextField InputProps={{className: classes.input}} id="password" label="Senha" value={senha} type="password" className={classes.textBoxPassword} onChange={handlePasswordChange} />
                      <div className={classes.containerButtons}>
                        <Button variant="contained" color="primary" onClick={() => { executarLogin() }}>FAZER LOGIN</Button>
                        <Button variant="contained">ESQUECI MINHA SENHA</Button>
                      </div>
                    </div>    
                  </div>
                </div>
                <div className={classes.containerLogo}>
                  <img className={classes.logo} src={require('../../../../shared/img/SistemaConsultorioLogo.png')} />
                  <div className="logo-text">
                    SISTEMA DE MARCAÇÃO DE CONSULTA
                  </div>
                </div>
              </Container>
          </Paper>
          :<Rotas />
        }
      </div>
    </Router>
  );
}

export default App;
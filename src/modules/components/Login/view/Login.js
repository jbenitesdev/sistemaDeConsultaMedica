import React from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import {push} from 'connected-react-router';
import BackgroundLogin from '../../../../shared/img/SistemaConsultorioBG.png'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
        backgroundImage: "url(../../../../shared/img/SistemaConsultorioBG.png)"
    },
    planoFundo: {
        // background: theme.var.secondaryBackground,
        backgroundImage: `url(${BackgroundLogin})`,
        backgroundPosition: 'right -130px bottom -130px',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
}));


function Login() {
    const classes = useStyles();
    const [usuario, setUsuario] = React.useState()
    const [senha, setSenha] = React.useState()

    const executarLogin = () => {
        if (usuario === 'admin' && senha === '123456') {
            console.log("LOGOU")
        }
    }

    const handleUserChange = (event) => {
        setUsuario(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setSenha(event.target.value)
    }

    return (
        <Paper className={classes.planoFundo}>
            <Container>
                <TextField id="userName" label="Usuário" variant="outlined" value={usuario} onChange={handleUserChange} />
                <TextField id="password" label="Senha" variant="outlined" value={senha} onChange={handlePasswordChange} />
                {/* <input type="button" value="Logar" onclick={executarLogin} /> */}
                <Button variant="contained" color="primary" onClick={() => { executarLogin() }}>
                  FAZER LOGIN
                </Button>
            </Container>
        </Paper>
    );
}

export default Login;

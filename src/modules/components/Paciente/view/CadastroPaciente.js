import React from 'react';
import { Form, reduxForm, SubmissionError } from 'redux-form';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function CadastroPaciente() {

    const handleSubmit = (form) => {
        console.log("FORM: ", form)
    };

    return (
        <div className="col-12 default-div div-conteudo">
            <div>Cadastro Paciente</div>
            <div>
                <Card>
                    <CardContent>
                        <Form layout="horizontal" onSubmit={handleSubmit}>
                            {/* <TextField name="nome" label={'Nome do Paciente'} fullWidth={true} autoFocus={true} placeholder={'Nome do Paciente'}/> */}
                            <TextField name="nome" label={'Nome do Paciente'} variant="outlined" fullWidth={true} autoFocus={true} placeholder={'Nome do Paciente'}/>
                            <div>
                                <TextField name="dataNasc" label={'Data de Nascimento'} variant="outlined" fullWidth={true} autoFocus={true} placeholder={'Data de Nascimento'}/>
                                <TextField name="idade" label={'Idade'} variant="outlined" fullWidth={true} autoFocus={true} placeholder={'Idade'}/>
                                <TextField name="nome" label={'Nome do Paciente'} variant="outlined" fullWidth={true} autoFocus={true} placeholder={'Nome do Paciente'}/>
                            </div>
                            <TextField name="endereco" label={'Endereço'} variant="outlined" fullWidth={true} autoFocus={true} placeholder={'Endereço'}/>
                            <div>
                                <TextField name="telefone" label={'Telefone'} variant="outlined" fullWidth={true} autoFocus={true} placeholder={'Telefone'}/>
                                <TextField name="celular" label={'Celular'} variant="outlined" fullWidth={true} autoFocus={true} placeholder={'Celular'}/>
                                <TextField name="email" label={'Email'} variant="outlined" fullWidth={true} autoFocus={true} placeholder={'Email'}/>
                            </div>

                            <Button variant="contained" type="submit" color="primary">
                                {'Cadastrar'}
                            </Button>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

const formProps = {
    form: 'cadastroPaciente',
    enableReinitialize: true,
};

export default (reduxForm(formProps)(CadastroPaciente));;
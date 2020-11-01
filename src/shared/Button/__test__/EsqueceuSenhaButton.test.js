import React from 'react';
import ReactDOM from 'react-dom';
import { isTSanyKeyWord } from '@babel/types'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EsqueceuSenhaButton from '../../Button/EsqueceuSenhaButton';
import { render } from '@testing-library/react';
import "jest-dom/extend-expect";

it("Renderizar componente EsqueceuSenhaButton sem erro", () => {
    const div = document.createElement("div");
    ReactDOM.render(<EsqueceuSenhaButton />, div)
})

it("Renderizar componente EsqueceuSenhaButton corretamente", () => {
   const { getTestById } = render(<EsqueceuSenhaButton label="ESQUECI MINHA SENHA" />)
   expect(getTestById('button')).toHaveTextContent('ESQUECI MINHA SENHA')
})
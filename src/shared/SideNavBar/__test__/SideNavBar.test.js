import React from 'react';
import ReactDOM from 'react-dom';
import { isTSanyKeyWord } from '@babel/types'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from '../../../modules/components/App/view/App'
import SideNavBar from '../SideNavBar';

it("Renderizar componente SideNavBar sem erro", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div)
})

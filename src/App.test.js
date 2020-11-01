import React from 'react';
import { render } from '@testing-library/react';
import App from './modules/components/App/view/App'
import ReactDOM from 'react-dom';

it("Renderizar componente SideNavBar sem erro", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div)
})

it("Renderizar componente TopNavBar sem erro", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div)
})
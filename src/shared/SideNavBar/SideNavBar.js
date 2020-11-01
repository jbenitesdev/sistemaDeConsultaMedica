import React from "react";
import { Link } from 'react-router-dom';
import { ProSidebar, SidebarHeader, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const SideNavBar = props => {
    return (
        <ProSidebar className='col-2 side-nav-bar'>
            <SidebarHeader>
                <img className="logo-icon" src={require('../img/SistemaConsultorioLogo.png')} />
            </SidebarHeader>
            <Menu iconShape="square">
                <MenuItem>
                    <Link to='/'>Home</Link>
                </MenuItem>
                <SubMenu title="Banco">
                    <MenuItem>
                        <Link to='/banco'>Consultar Arquivo Bancário</Link>
                    </MenuItem>
                </SubMenu>
                <SubMenu title="Paciente">
                    <MenuItem>
                        <Link to='/cadastroPaciente'>Cadastro Paciente</Link>
                    </MenuItem>
                    <MenuItem>Consultar Clientes</MenuItem>
                </SubMenu>
                <SubMenu title="Boleto">
                    <MenuItem>Consultar Boletos</MenuItem>
                </SubMenu>
                <SubMenu title="Conta Movimento">
                    <MenuItem>Consultar Contas</MenuItem>
                </SubMenu>
                <SubMenu title="Relatórios">
                    <MenuItem>Consultar Relatórios</MenuItem>
                </SubMenu>
                <SubMenu title="Utilitários">
                    <MenuItem>Consultar Utilitários</MenuItem>
                </SubMenu>
            </Menu>
        </ProSidebar>
    )
};

export default SideNavBar
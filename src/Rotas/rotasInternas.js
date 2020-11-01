import React, {lazy} from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

// import Home from '../modules/components/Home/view/Home';

// const Dashboard = lazy(() => import('../Dashboard/view/Dashboard'));
const Home = lazy(() => import('../modules/components/Home/view/Home'));
const Banco = lazy(() => import('../modules/components/Banco/view/Banco'));
const CadastroPaciente = lazy(() => import('../modules/components/Paciente/view/CadastroPaciente'));

const rotasInternas = [
  {
    path: '/',
    rules: [],
    exact: true,
    textName: 'HOME',
    name: <div style={{display: 'flex'}}><HomeOutlinedIcon fontSize="small" /><span> HOME</span></div>,
    component: Home,
  },
  {
    path: '/banco',
    exact: true,
    rules: [],
    name: 'BANCO',
    component: Banco,
  },
  {
    path: '/cadastroPaciente',
    exact: true,
    rules: [],
    name: 'CADASTRO_PACIENTE',
    component: CadastroPaciente,
  }
  
//   {path: '/convidar/contador', exact: true, rules: [], name: 'Convidar Contador', component: ConvidarContador},
//   {path: '/convidar/profissional', exact: true, rules: [], name: 'Convidar Profissional', component: ConvidarParceiro},
  
//   {
//     path: '/profissionais/profissional/:idParceiro/das',
//     exact: true,
//     rules: [],
//     name: 'DAS',
//     component: DAS,
//   },
  
];

export default rotasInternas;

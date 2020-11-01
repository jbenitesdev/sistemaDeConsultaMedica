// //@flow
// import React, {Suspense, useEffect, useState} from 'react';
// import {Redirect, Route, Switch} from 'react-router-dom';
// import clsx from 'clsx';
// import {Container} from 'reactstrap';
// import sidebarItems from '../../../_sideBarConfig';
// // rotasInternasComBreadcrumb config
// import rotasInternasComBreadcrumb from '../../rotas/rotasInternasComBreadcrumb';
// import DefaultHeader from './DefaultHeader';
// import {ID_ESCRITORIO, TOKEN} from '../constantes';
// import connect from 'react-redux/es/connect/connect';
// import type {Escritorio} from '../../Escritorio/redux/action';
// import {infoEscritorio} from '../../Escritorio/redux/action';
// import type {Store} from '../flowTypes/flowTypes';
// import Sidebar from './Sidebar';
// import {useStyles} from './DefaultLayout.style';
// import AppBreadcrumb from './AppBreadcrumb';
// import {push} from 'connected-react-router';


// type Props = {
//   infoEscritorio: (string) => void,
//   modalBaixaForm: (boolean) => void,
//   modalImportarNfseForm: (boolean) => void,
//   modalEnvioA1Form: (boolean) => void,
//   modalEnvioDasForm: (boolean) => void,
//   modalParceiroForm: (boolean) => void,
//   modalUploadExtratoForm: (boolean) => void,
//   toDashboard: () => void,
//   escritorioLista: Array<Escritorio>,
//   escritorioInfo: Escritorio,
//   perfis: Array<string>,
//   match: Object,
// }

// const DefaultLayout = (props: Props) => {

//   const classes = useStyles();

//   const [sidemenuOpen, setSidemenuOpen] = useState(true);

//   const toggleSidemenu = () => {
//     setSidemenuOpen(!sidemenuOpen);
//   };

//   const {escritorioLista, escritorioInfo, infoEscritorio, toDashboard} = props;
//   const idEscritorio = props.match.params.id;

//   const mapDispatchToPropsSidebar = {
//     modalBaixaNfseForm: (visible) => props.modalBaixaForm(visible),
//     modalImportarNfseForm: (visible) => props.modalImportarNfseForm(visible),
//     modalEnviarA1Form: (visible) => props.modalEnvioA1Form(visible),
//     modalEnviarDasForm: (visible) => props.modalEnvioDasForm(visible),
//     modalParceiroForm: (visible) => props.modalParceiroForm(visible),
//     modalUploadExtratoForm: (visible) => props.modalUploadExtratoForm(visible),
//   };


//   useEffect(() => {
//     if (escritorioLista.length > 0 && escritorioInfo.uuid !== idEscritorio) {
//       if (idEscritorio) {
//         infoEscritorio(idEscritorio);
//       }
//     }
//   }, [escritorioLista, escritorioInfo, infoEscritorio, idEscritorio]);

//   useEffect(() => {
//     if (escritorioLista.length === 1 && escritorioInfo.uuid) {
//       toDashboard();
//     }
//   }, [escritorioLista, escritorioInfo, idEscritorio, toDashboard]);

//   return (
//     <div className="app loader">
//         <Container style={{overflowX: 'hidden', overflowY: 'hidden',}} fluid>
//             <SideNavBar />
//             <TopNavBar />
//             <Switch>
//               {rotasInternasComBreadcrumb.map((route, idx) => {
//                   return route.component ? (
//                       <ProtectedRota perfis={props.perfis} rules={route.rules} key={idx} path={route.path}
//                                      exact={route.exact} name={route.name} render={props => (
//                         <route.component {...props} />
//                       )}/>)
//                     : (null);
//                 },
//               )}
//               {!localStorage.getItem(ID_ESCRITORIO) ? 
//                   <Redirect from="/" to="/escritorios"/> : 
//                   <Redirect from="/" to="/dashboard"/>
//               }
//             </Switch>
//         </Container>
//     </div>
//   );
// };

// const ProtectedRota = (props: any) => {
//   const token = sessionStorage.getItem(TOKEN);

//   if (token) {

//     let isValid = false;

//     if (props.rules.length > 0) {
//       props.perfis.forEach(function(rule) {
//         props.rules.forEach(function(ruleRota) {
//           if (rule.perfil === ruleRota) {
//             isValid = true;
//           }
//         });
//       });
//     } else {
//       isValid = true;
//     }

//     return (isValid) ? <Route key={props.key} exact={props.exact} render={props.render}
//                               path={props.path}/> : (!localStorage.getItem(ID_ESCRITORIO)) ?
//       <Redirect from="/" to="/escritorios"/> : <Redirect from="/" to="/dashboard"/>;
//   }
//   return null;
// };

// const mapStateToProps = (store: Store) => {
//   return {
//     escritorioLista: store.ESCRITORIO.EscritorioLista,
//     escritorioInfo: store.ESCRITORIO.EscritorioInfo,
//     perfis: store.USUARIO.usuario.perfis,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     infoEscritorio: (uuid: string) => dispatch(infoEscritorio(uuid)),
//     modalBaixaForm: (visible) => dispatch(visibleModalFormBaixaNfse(visible)),
//     modalImportarNfseForm: (visible) => dispatch(visibleModalFormImportarNfse(visible)),
//     modalEnvioA1Form: (visible) => dispatch(visibleModalFormEnvioA1(visible)),
//     modalEnvioDasForm: (visible) => dispatch(visibleModalFormEnvioDas(visible)),
//     modalParceiroForm: (visible) => dispatch(visibleModalFormParceiroForm(visible)),
//     modalUploadExtratoForm: (visible) => dispatch(visibleModalFormUploadExtrato(visible)),
//     toDashboard: () => dispatch(push('/dashboard')),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);

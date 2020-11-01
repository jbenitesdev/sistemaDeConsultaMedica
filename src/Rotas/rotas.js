import React, {Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../modules/components/Home/view/Home';
import About from '../About';
import Banco from '../modules/components/Banco/view/Banco';
import Shop from '../Shop';
import CadastroPaciente from '../modules/components/Paciente/view/CadastroPaciente'
import Login from '../modules/components/Login/view/Login';
import SideNavBar from '../shared/SideNavBar/SideNavBar';
import TopNavBar from '../shared/TopNavBar/TopNavBar';
import BreadCrumb from '../shared/BreadCrumb/BreadCrumb';
import rotasInternasComBreadcrumb from './rotasInternas';
import ErrorBoundary from './ErrorBoundry';

function Rotas() {    
    return (
        <>
            <SideNavBar />
            <TopNavBar />
            <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    {/* <BreadCrumb appRoutes={rotasInternasComBreadcrumb} /> */}
                    <div className="col-12 default-div router-div">
                        <div className="col-2"></div>
                        {/* <Switch>
                            {rotasInternasComBreadcrumb.map((route, i) => {
                                return (<Route key={i} exact path={route.path} component={route.component} />)
                            })}
                        </Switch> */}
                        <div className="col-10 conteudo-principal">
                            <Switch>
                                <Route exact path='/login' component={Login} />
                                <Route exact path='/' component={Home} />
                                <Route exact path='/about' component={About} />
                                <Route exact path='/banco' component={Banco} />
                                <Route exact path='/cadastroPaciente' component={CadastroPaciente} />
                            </Switch>
                        </div>
                    </div>
                </Suspense>
            </ErrorBoundary>
        </>
    )
}

export default Rotas;
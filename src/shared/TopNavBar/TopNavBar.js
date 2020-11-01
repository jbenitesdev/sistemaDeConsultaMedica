import React from "react";

const TopNavBar = props => {
    return (
        <div className='container-fluid col-12 default-div'>
            <div className='row col-12 default-div'>
                <div className="top-nav-bar col-12 default-div">
                    <div className="top-nav-bar-content col-12 default-div">
                        <div className="col-3 default-div"></div>
                        <div className="div-title col-5">
                            <span className="span-title-initials">SGC</span>
                            <span className="span-title-full"> - SISTEMA DE GESTÃO DE CONTAS</span>
                        </div>
                        <div className="user-info col-4">
                            <div className="div-info">
                                <div>
                                    <span className="span-user-title">Colaborador:</span><span className="span-user">WILLIAM PARREIRA</span>
                                </div>
                                <div className="div-inferior">
                                    <span className="span-user-title span-login">Login:</span><span className="span-user">WPARREIRA</span>
                                    <span className="span-user-title span-unidade">Unidade:</span><span className="span-user">SEDE</span>
                                </div>
                            </div>
                            <div className="user-actions">
                                <img className="user-placeholder" src={require('../img/white-circle.png')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TopNavBar
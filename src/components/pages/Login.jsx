import React from 'react';

import { Row, Col } from 'react-bootstrap';

import Footer from '../organisms/Footer'
import Menu from '../organisms/Menu'

export default function Login() {
  return (
    <div className="container-fluid overflow-hidden">
        <Row>
            <Col xs xl="10">A</Col>
            <Col>B</Col>
        </Row>
        <div className="row vh-100 overflow-auto">
            <Menu />            
            <div className="col d-flex flex-column h-sm-100">       
                <main className="row pb-4 my-auto">     
                    <div className="col-12 col-md-6 col-lg-4 pt-3 mx-auto">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="text-center py-3">LOGIN</h4>
                                <form onsubmit="return false;">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="span-usuario">Usuário</span>
                                        <input id="username" type="text" className="form-control" placeholder="" aria-label="Usuário" aria-describedby="span-usuario"/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="span-senha">&nbsp;Senha&nbsp;</span>
                                        <input id="password" type="password" className="form-control" placeholder="" aria-label="Senha" aria-describedby="span-senha"/>
                                    </div>
                                    <div id="login-error">                                        
                                    </div>
                                    <div className="text-end">
                                        <button id="btn-login" className="btn btn-success">Entrar</button>
                                    </div>
                                </form>
                            </div>
                        </div>                        
                    </div>                                    
                </main>
                <Footer />
            </div>
        </div>
    </div>
  )
}

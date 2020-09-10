import React, { Component } from 'react';
class Balance extends Component{
    render(){
        return(
            <div className="row box-1" >
            <div className="col-md-12">
                <p className="bold">Balance del mes</p>
                <p className="total">$1070.15</p>
            </div>    
                <div className="col-md-6" >
                    <p className="txt-ingresos">Ingresos</p>
                    <p className="ingresos-v">+ $478.32</p>
                </div>
                <div className="col-md-6">
                    <p className="txt-gastos">Gastos</p>
                    <p className="gastos-v">- $1452.50</p>
                </div>
            <div className="col-md-12">
                    <p className="analiticas">Ver analiticas</p>
            </div>     
            </div>
        )
    }
}

export default Balance;
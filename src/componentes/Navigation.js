import React, { Component } from 'react';
class Navigation extends Component{
    render(){
        return(
            <nav className="w3-bar w3-black">
            <button className="w3-bar-item w3-button" onclick="openMes('Enero')">Enero</button>
            <button className="w3-bar-item w3-button" onclick="openMes('Febrero')">Febrero</button>
            <button className="w3-bar-item w3-button" onclick="openMes('Marzo')">Marzo</button>
            <button className="w3-bar-item w3-button" onclick="openMes('Abril')">Abril</button>
            <button className="w3-bar-item w3-button" onclick="openMes('Mayo')">Mayo</button>
            <button className="w3-bar-item w3-button" onclick="openMes('Junio')">Junio</button>
            <button className="w3-bar-item w3-button" onclick="openMes('Julio')">Julio</button>
            <button className="w3-bar-item w3-button" onclick="openMes('Agosto')">Agosto</button>
            <button className="w3-bar-item w3-button" onclick="openMes('Septiembre')">Septiembre</button>
            <button className="w3-bar-item w3-button" onclick="openMes('Octubre')">Octubre</button>
            <button className="w3-bar-item w3-button" onclick="openMes('Noviembre')">Noviembre</button>
            <button className="w3-bar-item w3-button" onclick="openMes('Diciembre')">Diciembre</button>
          </nav>

        )
    }
}

export default Navigation;
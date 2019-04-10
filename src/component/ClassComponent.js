import React, { Component } from 'react';

class ClassComponent extends Component{
    constructor(props){
        super(props)
        this.state= {
            text : 'contador',
            contador: 0
        }
        
        
    };
    sumar = ()=>{
        this.setState({
            contador: this.state.contador + 1,
            text:'sumar'
        })
    };
    restar = ()=>{
        this.setState({
            contador: this.state.contador - 1,
            text:'restar'
        })
    }

    render(){
        return(
            <div>
                <h2> Contador en componente Class</h2>
                <p> {this.state.contador}</p>
                <div>
                    <button onClick={this.sumar} >mas</button>
                    <button onClick={this.restar} >menos</button>
                </div>

            </div>
        )
    }
}
export default ClassComponent; 
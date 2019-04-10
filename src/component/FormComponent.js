import React, { Component } from 'react';

class FormComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            nombre:'',
            email:'',
            password:''
        }
    }
    sincronizarCambioNombre(nombre){
        this.setState({
            nombre: nombre
        });
    }
    sincronizarCambiosEmail(email){
        this.setState({
            email: email
        });
    }
    sincronizarCambiosPass(password){
        this.setState({
            password: password
        });
    }
    submitForm = (e)=>{
        console.log(this.state);
        e.preventDefault();
    }

    render(){
        return (
            <div>
                <form>
                    <input type="text"
                    onChange = {(e)=>{this.sincronizarCambioNombre(e.target.value)}} 
                    value={this.state.nombre}
                    ></input>
                <input type="email"
                    onChange = {(e)=>{this.sincronizarCambiosEmail(e.target.value)}} 
                    value={this.state.email}
                    placeholder="email"
                    ></input>
                    <input type="pass"
                    onChange = {(e)=>{this.sincronizarCambiosPass(e.target.value)}} 
                    value={this.state.password}
                    placeholder="****"
                    ></input>
                    <button type='submit' onClick= {this.submitForm}> enviar </button>


                 </form>
                 <div>
                     <h3>Muestra datos:</h3>
                    <p> Nombre: {this.state.nombre}</p>
                    <p> Email: {this.state.email}</p>
                    <p> Pass: {this.state.password}</p>

                 </div>

            </div>
        )
            
    }

}
export default FormComponent;
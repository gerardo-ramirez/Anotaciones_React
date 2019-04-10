import React, { Component } from 'react';

class ConsumoApi extends Component{
    constructor(props){
        super(props)
        this.state = {
            article:[
                'articulo 1',
            'arti 200',
            'arti 36'
            ],
            api:[]
            
        }
    }

    componentDidMount(){
        let promesa = fetch('https://jsonplaceholder.typicode.com/posts');
        promesa.then(response => response.json()).then(data =>{
            this.setState({api:data})
        });
    }
    verEstado = ()=> this.state.article.map((title)=>{
        return <h4> {title} </h4>
    });

    render(){
        return(
            <div>
                <h2>Mostrar Article</h2>
                {this.state.article.map((title)=>{
                    return <h5> {title} </h5>
                })}
                <div>
                    <h3> listar consumo de Api</h3>
                    {this.state.api.map((api)=>{
                        return <div className='card '>
                            <p> {api.title} </p>
                        </div>
                    })}
                </div>

            </div>
        )
    }

}

export default ConsumoApi;
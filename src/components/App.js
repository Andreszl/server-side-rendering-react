import React, { Component } from 'react'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: 'Server Side Rendering React',
            content: 'implementation of server-side reacting using an ejs template engine and initializing data in react from an api' ,
            data : this.props.initialData
        }
    }

    render() {
        return (
            <div>
                <h2 className='text-center'> { this.state.title } </h2>
                <p className='text-center'> {this.state.content} </p>
            </div>
        )
    }
}

export default App
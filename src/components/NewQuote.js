import React from 'react'

class NewQuote extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    
    render(){
        return ( 
            <button onClick = {this.props.getNewQuote} id="new-quote" className={`btn btn-lg bg-${this.props.theme} border border-1 border-secondary rounded-pill m-5`}>New Quote | <i className="bi bi-arrow-clockwise"></i></button>
        )}  
}

export default NewQuote
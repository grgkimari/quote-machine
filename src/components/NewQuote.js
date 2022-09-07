import React from 'react'

class NewQuote extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    refreshPage(){
        window.location.reload ()
    }
    
    render(){
        return ( 
            <button onClick = {this.refreshPage.bind(this)} id="new-quote" className="btn btn-lg bg-primary border border-1 border-secondary rounded-pill m-5">New Quote | <i className="bi bi-arrow-clockwise"></i></button>
        )}  
}

export default NewQuote
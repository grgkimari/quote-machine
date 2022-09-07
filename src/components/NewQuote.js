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
            <button onClick = {this.refreshPage.bind(this)} id="new-quote" className="btn">New Quote</button>
        )}  
}

export default NewQuote
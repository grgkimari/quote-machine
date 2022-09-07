import React from 'react'

class Text extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : 'Loading data ...'
        }
    }



    render(){
        return ( 
            <div id="text" className="text-primary">{this.props.data}</div>
        )}  
}

export default Text
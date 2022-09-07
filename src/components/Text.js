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
            <div id="text" className="text-center text-primary m-5"><h1>"{this.props.data}"</h1></div>
        )}  
}

export default Text
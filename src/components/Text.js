import React from 'react'

class Text extends React.Component{
    constructor(props){
        super(props)
        
    }



    render(){
        return ( 
            <div id="text" className={`text-center text-${this.props.theme} m-5`}><h1>"{this.props.quote}"</h1></div>
        )}  
}

export default Text
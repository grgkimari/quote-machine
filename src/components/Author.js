import React from 'react'

class Author extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return ( 
            <div id="author" className="m-5"><h6> ~ {this.props.data}</h6></div>
        )}  
}

export default Author
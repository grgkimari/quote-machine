import React from 'react'

class Author extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return ( 
            <div id="author" className="">{this.props.data}</div>
        )}  
}

export default Author
import React from 'react'

class TweetQuote extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return ( 
            <button id="tweet-quote" className="btn">Tweet Quote</button>
        )}  
}

export default TweetQuote
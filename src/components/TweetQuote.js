import React from 'react'

class TweetQuote extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return ( 
            <a href = "twitter.com/intent/tweet" id="tweet-quote" className="btn btn-lg bg-primary border border-1 border-secondary rounded-pill m-5 ">Tweet Quote |  <i className="bi bi-share-fill"></i></a>
        )}  
}

export default TweetQuote
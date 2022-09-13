import React from 'react'

class TweetQuote extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        let url = "https://www.twitter.com/intent/tweet?text=" + encodeURIComponent(this.props.target.text.concat('\n~').concat(this.props.target.author))
        return ( 
            <a target="_blank" href = {url} id="tweet-quote" className= {`btn btn-lg bg-${this.props.theme} border border-1 border-secondary rounded-pill m-5`}> Tweet Quote | <i className="bi bi-share-fill"></i></a>
        )}  
}

export default TweetQuote
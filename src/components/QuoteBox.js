import React from 'react'
import Text from './Text'
import Author from './Author'
import NewQuote from './NewQuote'
import TweetQuote from './TweetQuote'

class QuoteBox extends React.Component{
    constructor(props){
        super(props)

    }


    render(){

        return ( 
            <div id="quote-box" className="h-100 my-5 bg-light border border-dark">
                 <Text theme = {this.props.theme} quote = {this.props.target.text} />
                 <Author theme = {this.props.theme} author = {this.props.target.author}/>
                 <NewQuote theme = {this.props.theme} getNewQuote={this.props.getNewQuote} />
                 {this.props.target.author ? <TweetQuote theme = {this.props.theme} target={this.props.target}/> : null }
            </div>
        )}  
}

export default QuoteBox
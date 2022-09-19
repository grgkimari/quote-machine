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
                {this.props.target ? <h6>{JSON.stringify(this.props.target)}</h6> : <h6>Target is undefined</h6>}
                {/* // <Text theme = {this.props.theme} quote = {this.props.target.text} />
                // <Author theme = {this.props.theme} author = {this.props.target.author}/>
                // <NewQuote theme = {this.props.theme} updateTarget={this.props.updateTarget} />
                // <TweetQuote theme = {this.props.theme} target={this.props.target}/> */}
            </div>
        )}  
}

export default QuoteBox
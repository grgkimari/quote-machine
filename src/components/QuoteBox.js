import React from 'react'
import Text from './Text'
import Author from './Author'
import NewQuote from './NewQuote'
import TweetQuote from './TweetQuote'

class QuoteBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }


    componentDidMount(){

        this.setState({
            data : [{
                text : "Loading data ...",
                author : "None"
            }]
        })

        let url= "https://type.fit/api/quotes"
        fetch(url)
            .then((response) => response.json()).then((data) => {
                this.setState({
                    data: data,
                })
            }).catch(() => {
                this.setState({
                    data : [{
                        text : "Unable to fetch data",
                        author : "No data"
                    }]
                })
            })
    }

    render(){
        let obj = this.state.data
        let text, author
        
        if(Array.isArray(obj)){
            let index = Math.floor(Math.random() * obj.length)
            text = obj[index].text
            author= obj[index].author
        }
        return ( 
            <div id="quote-box" className="h-100 my-5 bg-light border border-dark">
                
                <Text theme = {this.props.theme} data ={text} />
                <Author theme = {this.props.theme} data = {author === null ? "Anonymous" : author}/>
                <NewQuote theme = {this.props.theme}  />
                <TweetQuote theme = {this.props.theme}/>
            </div>
        )}  
}

export default QuoteBox
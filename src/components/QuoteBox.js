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
            <div id="quote-box" className="h-80 my-5 bg-light">
                
                <Text data ={text} />
                <Author data = {author === null ? "Anonymous" : author}/>
                <NewQuote  />
                <TweetQuote/>
            </div>
        )}  
}

export default QuoteBox
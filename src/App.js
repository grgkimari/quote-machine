import './App.css';
import React from 'react'
import QuoteBox from './components/QuoteBox'
import { SAVE_DATA, UPDATE_TARGET, LOG_ERROR} from './components/reducer';
import {connect} from 'react-redux'

const colors = ['danger', 'primary', 'secondary', 'success', 'info', 'warning']
const color = colors[Math.floor(Math.random() * colors.length)]
let url= "https://type.fit/api/quotes"
let data = "None"


class App extends React.Component {
  constructor(props){
    super(props)
    this.getNewQuote = this.getNewQuote.bind(this)
    this.getData = this.getData.bind(this)
    this.getData()
    this.getNewQuote()
  }
  
  getNewQuote(){
    this.props.updateTarget(this.props.data)
    data = JSON.stringify(this.props.target)
  }
  getData(){
    fetch(url).then(
      (response) => response.json())
    .then((json) => {
      this.props.updateData(json)
    }).catch((err) => this.props.logError((err)))
  }



  render(){
    return (
      <div  className = {`w-100 h-100 container bg-${color}  my-5 text-center`}>
        <QuoteBox  theme = {color} target = {this.props.target} updateTarget = {this.props.getNewQuote}/>
        <h1>{data}</h1>
      </div>
      
    );
  }

}

const logError = (err) => {
  return {
    type : LOG_ERROR,
    error : err,
  }
}

const updateData = (payload) => {
  return {
    type : SAVE_DATA,
    payload 
  }
}

const updateTarget = (data) => {

  return {
    type : UPDATE_TARGET,
    target : data[Math.floor(Math.random() * data.length)]
  }
}

const mapStateToProps = (state) => {
  return {
    target : state.target,
    data : state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateData : function (data){
      dispatch(updateData(data))
    },
    updateTarget : function (data){
      dispatch(updateTarget(data))
    },
    logError : function (err){
      dispatch(logError(err))
    }
    }
}
export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)


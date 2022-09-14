import './App.css';
import React from 'react'
import QuoteBox from './components/QuoteBox'
import { SAVE_DATA, UPDATE_TARGET } from './components/reducer';
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
  }
  
  getNewQuote(){
    this.props.updateTarget(this.props.data)
  }
  getData(){
    fetch(url).then(
      (response) => response.json())
    .then((json) => {
      this.props.updateData(json)
      typeof this.props.data === 'object' ?  this.props.updateTarget(this.props.data) : console.log()
    })
  }



  render(){
    return (
      <div  className = {`w-100 h-100 container bg-${color}  my-5 text-center`}>
        <QuoteBox  theme = {color} target = {this.props.target} updateTarget = {this.props.getNewQuote}/>
      </div>
      
    );
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
    }
}
export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default App;

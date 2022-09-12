import './App.css';
import React from 'react'
import QuoteBox from './components/QuoteBox'
import { SAVE_DATA } from './components/reducer';
import {connect} from 'react-redux'

const colors = ['danger', 'primary', 'secondary', 'success', 'info', 'warning']
const color = colors[Math.floor(Math.random() * colors.length)]
let url= "https://type.fit/api/quotes"
let data = "None"


class App extends React.Component {
  constructor(props){
    super(props)
  }
  

  componentDidMount() {
    fetch(url).then(
      (response) => response.json())
    .then((json) => this.props.updateData(json))
  }

  render(){
    return (
      <div  className = {`w-100 h-100 container bg-${color}  my-5 text-center`}>
        <QuoteBox  theme = {color}/>
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

const mapStateToProps = (state) => {
  return {
    data : state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateData : function (data){
      dispatch(updateData(data))
    },
    }
}
export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default App;

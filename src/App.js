import './App.css';
import QuoteBox from './components/QuoteBox'

const colors = ['danger', 'primary', 'secondary', 'success', 'info', 'warning']

function App() {
  const color = colors[Math.floor(Math.random() * colors.length)]
  return (
    <div  className = {`w-100 h-100 container bg-${color}  my-5 text-center`}>
      <QuoteBox  theme = {color}/>
    </div>
    
  );
}

export default App;

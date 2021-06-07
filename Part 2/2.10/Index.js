import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'Seshadri',
    number: 8897288158
  },
  {
    id: 2,
    name: 'Hemanth',
    number: 8888888888
  },
  {
    id: 3,
    name: 'Krishna',
    number: 7777777777
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)

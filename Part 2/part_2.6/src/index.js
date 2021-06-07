import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'Seshadri
  },
  {
    id: 2,
    name: 'Rama'
  },
  {
    id: 3,
    name: 'Krishna'
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)

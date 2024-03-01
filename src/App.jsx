import Button from './components/Button'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <h1>Vite + React</h1>
      <Button 
        text="My button" 
        placeholder="Some placeholder"
        onClick={() => alert('Hello world!')}
        />
    </div>
  )
}

export default App
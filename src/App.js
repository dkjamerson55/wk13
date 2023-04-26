//component/style imports
import './App.css'
import Nav from './Nav'
import Login from './loginForm'

//functional based component that calls/returns components from imported modules
function App() {
    return <div className="App">
        <Nav></Nav>
        <Login></Login>
    </div>
}

export default App
import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Culture from "../culture/Culture.jsx"
import Art from "../art/Art.jsx"

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <header className="header">
                        <div className="logo">Япония</div>
                        <nav>
                            <ul className="nav">
                                <li>
                                    <Link className="nav-item" to="/">История</Link>
                                </li>
                                <li>
                                    <Link to="/culture" className="nav-item">Культура</Link>
                                </li>
                                <li>
                                    <Link to="/art" className="nav-item">Искусство</Link>
                                </li>
                            </ul>
                        </nav>
                    </header>

                    <div className='main'>
                        <Route path="/" exact component={HomeRoute} />
                        <Route path="/culture" exact component={CultureRoute} />
                        <Route path="/art" exact component={ArtRoute} />
                    </div>
                </div>                
            </Router>
        )
    }
}

class HomeRoute extends App {
    render() {
        return (
            <div>История</div>
        )
    }
}
class CultureRoute extends App {
    render() {
        return (
            <Culture />
        )
    }
}
class ArtRoute extends App {
    render() {
        return (
            <Art />
        )
    }
}
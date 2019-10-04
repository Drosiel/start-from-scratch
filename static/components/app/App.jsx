import React from "react"
import { Browserrouter as Router, Route, Link } from "react-router-dom"

import Culture from "../culture/Culture.jsx"
import Art from "../art/Art.jsx"

export default class App extends React.Component {
    render() {
        return (
            <router>
                <div>
                    <header className="header">
                        <div className="logo">Япония</div>
                        <div>
                            <ul className="nav">
                                <Link to="/">
                                    <li className="nav-item">
                                        История
                                    </li>
                                </Link>
                                <Link to="/culture">
                                    <li className="nav-item">
                                        Культура
                                    </li>
                                </Link>
                                <Link to="/art">
                                    <li className="nav-item">
                                        Искусство
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </header>

                    <div className='main'>
                        <Route path="/" exact component={HomeRoute} />
                        <Route path="/culture" exact component={CultureRoute} />
                        <Route path="/art" exact component={ArtRoute} />
                    </div>
                </div>                
            </router>
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
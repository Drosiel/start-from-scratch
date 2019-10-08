import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Two from "../culture/two/two.jsx"
import Free from "../culture/free/free.jsx"

export default class Culture extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <ul>
                            <Link to="/culture/one">
                                <li>1</li>
                            </Link>
                            <Link to="/culture/two">
                                <li>2</li>
                            </Link>
                            <Link to="/culture/free">
                                <li>3</li>
                            </Link>
                        </ul>
                    </div>
                    
                    <div>
                        <Route path="/culture/one" exact component={oneRoute} />
                        <Route path="/culture/two" exact component={twoRoute} />
                        <Route path="/culture/free" exact component={freeRoute} />
                    </div>
                </div>
            </Router>
        )
    }
}

class oneRoute extends Culture {
    render() {
        return (
            <div>получилось один</div>
        )
    }
}
class twoRoute extends Culture {
    render() {
        return (
            <Two />
        )
    }
}
class freeRoute extends Culture {
    render() {
        return (
            <Free />
        )
    }
}

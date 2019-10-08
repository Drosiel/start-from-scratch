import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Painting from "../art/painting/painting.jsx"
import Potter from "../art/potter/potter.jsx"
//img
import music from "../../img/pipa.jpg"
import painting from "../../img/painting.jpg"
import potter from "../../img/potter.jpg"

export default class Art extends React.Component {
    render() {
        return (
            <Router>
                <div className="art">
                    <div className="art-nav">
                        <div>
                            <Link className="card" 
                                  to="/art/music" 
                                  style={{ backgroundImage: `url(${music})`,
                                           backgroundPosition: "center",
                                           backgroundSize: 'cover'}}>
                                               Музыка
                            </Link>
                        </div>
                        <div>
                            <Link className="card" 
                                  to="/art/painting" 
                                  style={{ backgroundImage: `url(${painting})`,
                                           backgroundPosition: "center",
                                           backgroundSize: 'cover'}}>
                                               Живопись
                            </Link>
                        </div>
                        <div>
                            <Link className="card" 
                                  to="/art/potter" 
                                  style={{ backgroundImage: `url(${potter})`,
                                           backgroundPosition: "center",
                                           backgroundSize: 'cover'}}>
                                               Гончарное искусство
                            </Link>
                        </div>
                    </div>

                    <div className="art-main">
                        <Route path="/art/music" exact component={musicRoute} />
                        <Route path="/art/painting" exact component={paintingRoute} />
                        <Route path="/art/potter" exact component={potterRoute} />
                    </div>
                </div>                
            </Router>
        )
    }
}

class musicRoute extends Art {
    render() {
        return (
            <div>Музыка</div>
        )
    }
}
class paintingRoute extends Art {
    render() {
        return (
            <Painting />
        )
    }
}
class potterRoute extends Art {
    render() {
        return (
            <Potter />
        )
    }
}
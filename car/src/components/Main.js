import { Component } from "react";
import {Link} from 'react-router-dom';


 export default class Main extends Component {

    
    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" >Cars!!</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                {/* Change from a to Link */}
                                <li><Link to="/home"  >Home</Link></li>
                                <li><Link to="/cars" >Cars</Link></li>
                                <li><Link to="/about" >About</Link></li>
                                <li><Link to = "/cars/:id"></Link></li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
                
            </div>
        );
    }
}
import {Component} from 'react';
import {Link} from 'react-router-dom';
export default class Cars extends Component {
    
    render() { 

        const carStyle = {
            width : "60%",
            margin: "5% 20% 5% 20%",
            boxSizing : "border-box"
        }

        const cars = this.props.data.map(car => {
            return (
                <div style = {carStyle}> 
                <Link style={{display:"block"}} to = {"/cars/"+car.id}
                   className = "list-group-item"
                    key = {car.id}>
                         {car.name}

                </Link>
                </div>
            )
        }
        );

        return (
            <>
            <h1>Cars Page</h1>
            <div className = "list-group">

                {cars}
            </div>
            </> 
        )
    
    
    }
}

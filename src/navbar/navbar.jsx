import React, { Component } from 'react';


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <a to="#" className="navbar-brand">
                    Navbar <span className="badge bg-secondary">{this.props.totalCounters}</span>
                </a>
            </nav>
        );
    }
}

export default Navbar;

// const App = () => {
//     return ( 
//         <div>

//         </div>
//      );
// }
 
// export default App;
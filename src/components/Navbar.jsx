import React from 'react'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">To Do App</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                            <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                            <a className="nav-link" href="#">Link</a>
                            </div>
                        </div>
                        <a className="nav-link pojok text-muted" href="#">Hello, {this.props.nama}</a>
                    </nav>
                </div>
            </div>
         );
    }
}
 
export default Navbar;
import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="bg-light">
       <Navbar nama="Alif"/>
       <div>
       <HomePage/>
       </div>
      </div>
     );
  }
}
 
export default App;
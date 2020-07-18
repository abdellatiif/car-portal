import React, { Component } from 'react';
import {Switch,Router,Route} from "react-router-dom";

import Blog from './containers/Blog/Blog';
import Post from './containers/Post/Post';
import SignIn from './components/SignIn/SignIn'
import history from './history';
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <Router history = {history}>
        <div className="App">

          <Route component = {Header} />
          <Switch>
            <Route exact path= "/" component = {SignIn} />
            <Route path= "/home" component = {Blog}  />
            <Route path= "/posts" component = {Post}  />
          </Switch>
       </div>
    </Router>
      
    );
  }
}

export default App;


// render() {
//   return (
//     <div style={{maxWidth: "1160px", margin: "0 auto"}}>
//       <BrowserRouter>
//         <div>
//           <Header />
//           <div className="main-content" style={{padding: "1em"}}>
//             <div className="workspace">
//               <Route exact path="/songs" render={(props) => {
//                   return <SongList songs={this.state.songs} />
//               }} />
//             <Route path="/songs/:songId" render={(props) => {
//               const song = this.state.songs[props.match.params.songId];
//               return (
//                 song
//                 ? <ChordEditor song={song} updateSong={this.updateSong} />
//                 : <h1>Song not found</h1>
//               )
//             }} />
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   </div>
//   );
// }
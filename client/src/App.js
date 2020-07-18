import React, { Component } from 'react';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Blog />
      </div>
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
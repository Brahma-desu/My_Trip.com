import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home';
import UserDetails from "./components/UserDetails";


export default class App extends React.Component{
  constructor() {
    super();
    this.state = {
      albums: [],
      userDetails: [],
      userPosts: [],
      updateAlbum: {}
    }
  }

  componentDidMount = async () => {
    const albums = await fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => json);
    this.setState({
      albums
    })
  }

  viewFromList = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { method: 'GET', })
    const viewAlbums = this.state.albums.filter((album) => album.id === id);
    // alert("Your Album Deleted successfully");
    this.setState({
      userDetails: viewAlbums,
    })
  }

  userPosts = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'GET', })
    const viewAlbums = this.state.userPosts.filter((post) => post.id === id);
    
    this.setState({
      userPosts: viewAlbums,
    })
  }

  render() {
    console.log(this.state.userPosts);
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home albums={this.state.albums} viewFromList={this.viewFromList} userPosts={this.userPosts} />} />
            <Route path="/userDetails" element={<UserDetails  userDetails={this.state.userDetails} userPosts={this.state.userPosts} />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }


}



// function App() {

//   const url = 'https://jsonplaceholder.typicode.com/users';
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         fetch(url)
//             .then((response) => response.json())
//             .then((data) => {
//                 // console.log(data);
//                 setPosts(data);
//             })
//             .catch((err) => {
//                 console.log(err.message);
//             });
//     }, []);

//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} post={posts.name} />
//         {/* <Route path="users/*" element={<Users />} /> */}
//       </Routes>
//     </BrowserRouter>
//   </div>
//   );
// }

// export default App;

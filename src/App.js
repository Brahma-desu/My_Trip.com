import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home';
import UserDetails from "./components/UserDetails";
import UserPosts from "./components/UserPosts";


export default class App extends React.Component{
  constructor() {
    super();
    this.state = {
      users: [],
      userDetails: [],
      userPosts: [],
      deletePost: [],
      updateAlbum: {}
    }
  }

  componentDidMount = async () => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => json);
    this.setState({
      users
    })
  }

  viewFromList = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { method: 'GET', })
    const viewUsers = this.state.users.filter((album) => album.id === id);
    this.setState({
      userDetails: viewUsers,
    })

  }

    userPosts = async (id) =>{
      await fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then ((response) => response.json())
      .then ((josn) => {this.setState({userPosts: josn.filter((posts) => posts.userId === id)})});
    }

    userPostDelete = (id) => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'DELETE', })
      const deletePost = this.state.deletePost.filter((album) => album.id !== id);
      alert("Your Album Deleted successfully");
      this.setState({
        deletePost: deletePost,
      })
    }

  render() {
    console.log(this.state.userPosts);
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home albums={this.state.users} viewFromList={this.viewFromList} userPosts={this.userPosts} />} />
            <Route path="/userDetails" element={<UserDetails  userDetails={this.state.userDetails}   />} />
            <Route path="/userPosts" element={<UserPosts userPosts={this.state.userPosts} userPostDelete = {this.userPostDelete} />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

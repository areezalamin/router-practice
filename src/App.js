
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FriendDetail from './Component/FriendDetail/FriendDetail';
import Friends from './Component/Friends/Friends';
import About from './Component/Header/About/About';
import Blog from './Component/Header/Blog/Blog';
import Header from './Component/Header/Header';
import NavBar from './Component/Header/NavBar/NavBar';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import PostDetail from './Component/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path ='/' element={<Home></Home>} ></Route>
          <Route path ='/Home' element={<Home></Home>} ></Route>
          <Route path='/Post/:id' element={<PostDetail></PostDetail>}></Route>
          <Route path='/Friends' element={<Friends></Friends>}>
            <Route path=':id' element={<FriendDetail></FriendDetail>}></Route>
          </Route>
          <Route path='/About' element={<About></About>} ></Route>
          <Route path='/Blog' element={<Blog></Blog>} ></Route>
          <Route path='/NavBar' element={<NavBar></NavBar>}></Route>
          <Route path='/Header' element={<Header></Header>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
    </div>
  );
}

export default App;
 
import './App.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Post from './components/Post';
// import addPost from "./components/addPost";
import AddPost from './components/addPost';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Post/>}/>
    <Route path='addpost' element={<AddPost/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;

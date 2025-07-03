import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Post from './components/pages/Post/Post';
import AddScreen from './components/pages/AddScreen/AddScreen';
import EditScreen from './components/pages/EditScreen/EditScreen';
import About from './components/pages/About/About';
import NoPage from './components/pages/NoPage/NoPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/post/:id' element={<Post />} />
      <Route path='/post/:add' element={<AddScreen />} />
      <Route path='/post/edit/:id' element={<EditScreen />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NoPage />} />
    </Routes>
  );
}

export default App;

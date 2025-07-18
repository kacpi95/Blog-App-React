import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Post from './components/pages/Post/Post';
import AddScreen from './components/pages/AddScreen/AddScreen';
import EditScreen from './components/pages/EditScreen/EditScreen';
import About from './components/pages/About/About';
import NoPage from './components/pages/NoPage/NoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/post/add' element={<AddScreen />} />
        <Route path='/post/edit/:id' element={<EditScreen />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;

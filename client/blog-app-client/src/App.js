import './App.css';
import { Home } from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PostBlog } from './components/postBlog';
import { Details } from './components/details';
import { BlogContextProvider } from './components/context';
import './components/style.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BlogContextProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details' element={<Details />} />
            <Route path='/postBlog' element={<PostBlog />} />
          </Routes>
        </BlogContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

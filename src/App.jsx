import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Book from './pages/book';
import Layout from './components/Layout';

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <Home />
                    </Layout>
                }
            />
            <Route
                path="/book"
                element={
                    <Layout>
                        <Book />
                    </Layout>
                }
            />
            <Route
                path="*"
                element={
                    <Layout>
                        <NotFound />
                    </Layout>
                }
            />
        </Routes>
    );
}

export default App;

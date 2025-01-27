import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from './Main';
import Profile from './Profile';
import Sidebar from '../components/Sidebar';
import Artists from './Artists';
import Albums from './Albums';
import Music from './MusicPage';
import Podcasts from './Podcasts';
import '../style/MainPage.css';

const MnPage = () => (
    <>
      <Header />
      <Main />
      <Sidebar />
      <Footer />
    </>
  );

export default function MainPage() {
    return (
        <Router>
            <div className="bodymain">
                <Routes>
                    <Route exact path="/" element={<MnPage />} />
                    <Route exact path="/profile" element={<Profile />} />

                    <Route path="/artists" element={<Artists />} />
                    <Route path="/albums" element={<Albums />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/podcasts" element={<Podcasts />} />
                </Routes>
            </div>
        </Router>
    );
}

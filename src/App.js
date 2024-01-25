import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/Home';
import RoomPage from './pages/Room';
import MainHome from './pages/Home/MainHome';

function App() {
  return (
    <>
    <Routes>

        <Route path='/' element={<MainHome/>}/>
        <Route path='/homepage' element={<HomePage/>} />
        <Route path='/room/:roomId' element={<RoomPage/>} />

    </Routes>
     
    </>
  );
}

export default App;

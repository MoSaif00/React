import './style/App.css';
import DogGallery from './components/dogGallery';
import Friend from './components/friend';
import RandomJoke from './components/randomJoke';

function App() {
  return (
    <>
      <Friend />
      <DogGallery />
      <RandomJoke />
    </>
  );
}

export default App;

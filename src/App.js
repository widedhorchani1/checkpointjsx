import ProfilePhoto from './Component/Profile/ProfilePhoto'
import FullName from './Component/Profile/FullName'
import Address from './Component/Profile/Address'
import './App.css';

function App() {
  return (
    <div className="App">
      <span className="image">
        <ProfilePhoto />
      </span>
      <span className="Nom">
        <FullName />
        <Address />
      </span>
    </div>
  );
}

export default App;

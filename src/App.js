import logo from './logo.svg';
import './App.css';
import ChildClass from './component/ChildClass';
import ChildFunction from './component/ChildFunction';
import StateDemo from './component/StateDemo';
import EventDemo from './component/EventDemo';
function App() {
  return (
    <div className="App">
      {/* Component cha */}
      <h2>Rikkei Academy</h2>
      <ChildClass studentName="Nguyễn Viết Đạt">Là fan MU</ChildClass>
      <ChildFunction studentName="Nguyễn Viết Đạt">Thích đá FIFA</ChildFunction>
      <StateDemo />
      <EventDemo />
    </div>
  );
}

export default App;

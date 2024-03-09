import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {

  function handleClick(){
    alert('button click');
  }

  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h2>React Core Concepts 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => {alert('third clicked')}}>Click3</button>
      <button onClick={() => addToFive(3)}>Click 4</button>
    </>
  )
}

export default App

import './App.css';
import Aboutus from './components/Aboutus';
import Home from './components/Home';

function App() {
  const sushant = "My Portfolio"
  const abc = "Hi I'm sushant mishra and  i'm a full stack developer"
  const education = "I completerd my b.tech/engineering in 2019 from mechanical branch"
  const xy ="I'm working in microsoft"
  return (
    <div className="App">
      <Home goldi = {sushant}  abcd ={abc}/>
      <Aboutus edu = {education} xyz = {xy}/>
    </div>
  );
}

export default App;

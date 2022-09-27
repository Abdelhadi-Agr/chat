import './App.css';
import Left from './Components/Left';
import Middle from './Components/Middle';

function App() {
  return (
    <div className="App">
           <div className="title">R3d-H@t</div>
           <table style={{width:'100%'}}>
            <tr>
              <td style={{width:'30%'}}><Left></Left></td>
              <td style={{width:'20%'}}></td>
              <td style={{width:'50%'}}><Middle></Middle></td>
            </tr>
           </table>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Demo from './components/Demo';
import Catalog from './components/Catalog';

function App() {
  const sv1 = {
    name: "Nguyen Van An",
    tel: "09888888888",
    email:"annv@gmail.com",
    address: "13 Trinh Van Bo"
  }
    const sv2 = {
    name: "Bui Nhu Lac",
    tel: "0999999999",
    email:"lacnv@gmail.com",
    address: "8A Ton That Huyet"
  }
  const cats = [
{
  name: "Fashion",
  count: 120
},
{
  name: "Electronics",
  count: 200
},
{
  name: "Home & Garden",
  count: 80
}
  ]

  return (
    <div className="App">
      <Demo data={sv1}/>
      <Demo data={sv2}/>
      {
        cats.map((e,i)=>{
          return <Catalog cat={e} key={i} />
        })
      }
    </div>
  );
}

export default App;

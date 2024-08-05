import logo from './logo.svg';
import './App.css';
import { giveData } from './Data/data';
import Tables from './Components/Tables';

function  App () {

  
  // let data=[]
  // const fun= async (params) => {
  //    const res=await giveData();
  //    data=res;
  //    console.log(data);
  //   return data;
  // }
  //  fun().then({
  // });
  // console.log(data);
  return (
    <div className="App">
      <Tables/>
    </div>
  );
}

export default App;

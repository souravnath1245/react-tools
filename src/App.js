import React, { Component, useEffect, useState } from "react";

import Counters from "./components/couters";
import Navbar from "./navbar/navbar";


class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 0 },
      { id: 4, value: 4 },
    ],
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
    // const counters = this.state.counters.filter((c) => c.id !== counter.id);
    // this.setState({ counters });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  // state = {  }
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
        {/* <CounterIncrease /> */}
        {/* <ExternalUsers /> */}
        {/* <Countries/> */}
      </React.Fragment>
    );
  }
}

// function CounterIncrease() {
//   const [count, setCount] = useState(0);
//   const handleClickIncrease = () => setCount(count + 1);
//   const handleClickDecrease = () => setCount(count - 1);
//   // console.log('Increase Clicked');

//   return (
//     <div>
//       <h1>Count: {count} </h1>
//       <button onClick={handleClickIncrease} className="btn-primary m-2">
//         Increase
//       </button>
//       <button onClick={handleClickDecrease} className="btn-primary">
//         Decrease
//       </button>
//     </div>
//   );
// }

// // function ExternalUsers() {
// //   const [users, setUsers] = useState([]);
// //   useEffect(() => {
// //     console.log("sourav ");
// //     fetch("https://jsonplaceholder.typicode.com/users")
// //       .then((res) => res.json())
// //       .then((data) => setUsers(data));
// //   }, []);
// //   return (
// //     <div>
// //       <h3>External Users</h3>
// //       {users.map(user => <User name={user.name} email={user.email}></User>)}
// //     </div>
// //   );
// // }

// // function User(props){

// //   return(
// //     <div className='text-center p-2 m-2' style={{backgroundColor: 'black', color: 'white'}}>
// //       <h4>Name : {props.name}</h4>
// //       <p>Email : {props.email}</p>
// //     </div>
// //   )
// // }

// function Countries(){
//   const [countries, setCountries] = useState([])
//   useEffect(()=>{
//     fetch('https://restcountries.eu/rest/v2/all').then(res => res.json()).then(data => setCountries(data))
//   }, [])
//   return (
//     <div className='text-center'>
//       <h2>Traveling Around The World !</h2>
//       <h4>Countries Available : {countries.length}</h4>
//       {countries.map(country => <Country name={country.name} capital={country.capital} population={country.population}/>)}
//     </div>
//   )
// }
// function Country({name, capital, population}){
//   return(
//     <div>
//       <h2>Name : {name }</h2>
//       <h4>Capital : {capital}</h4>
//       <p> Population: {population}</p>
//     </div>
//   )
// }
export default App;



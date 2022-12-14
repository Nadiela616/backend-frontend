import React from 'react';
import './App.css';



function App() {
  const [ username, setUsername ] = React.useState('')
  const [ password, setPassword ] = React.useState('')
  const [data, setData] = React.useState('')
  const [logIn, setLogIn] = React.useState([])
   




function onClickPassword(e){
setPassword(e.target.value)

}

function onClickUsername(e){
setUsername(e.target.value)
}

const onSubmit = async (e) =>{
e.preventDefault()
const values ={
  username,password
}

const response = await fetch('http://localhost:4000/api/sign-in', {
  method: 'POST', headers: {
      'Content-Type': 'application/json'
  }, body: JSON.stringify(values)
})
const dataAll = await response.json();

console.log(dataAll)
if(typeof dataAll ==='object'){
  console.log('You have been successfully loged In')
} else{
  console.log('Invalid username or passowrd')
}

}




//React.useEffect(() => {
   // async function fetchTrips () {
    //  const response = await fetch('http://localhost:4000/api/sign-up');
     // const result = await response.json();
    //  console.log(result);
    
    //}
   // fetchTrips();
 // }, []);

 return (
  <div>
    <form onSubmit={onSubmit} >
      <input onChange={onClickUsername} type = 'text' name='username'></input> <br/>
      <input onChange = {onClickPassword} type = 'password' name='password'></input> <br/>
      <input type = 'submit' ></input> 
    </form>
  </div>
 )
}

export default App;
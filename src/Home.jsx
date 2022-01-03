import React,{Component} from 'react'
import { useNavigate } from 'react-router-dom';

export const Home =({setUser})=>{
    const navigate = useNavigate()
 const onSubmit=()=>{
   navigate('/about')
 }
const onChangeUser=(event)=>{
  console.log(event.target.value)
  setUser(event.target.value)
}
return(
  
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
   
    <form>
        <label>
         Login
         <br/>
          <input
            name="User Name"
            type="text"
            onChange={onChangeUser}
         />
        </label>
        <br />
        <br/>
        <label>
         Password
         <br/>
          <input
            name="Password"
            type="password"
         />
        </label>
        <br />
        <br/>
        <button type='submit' onClick={onSubmit}>
            Submit
        </button>
       
      </form>
      </div>
)

}

export default Home


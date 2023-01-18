import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        const newUser = {
          firstname, lastname, email, password, confirmpassword
        };
        console.log("Welcome",newUser);
    };


    return (
      <>
    <form onSubmit = { createUser }>
    <div>
      <label>First Name:</label>
      <input type='text' onChange={(e)=>setFirstname(e.target.value)}></input>
    </div>
    <div>
      <label>Last Name:</label>
      <input type='text' onChange={(e)=>setLastname(e.target.value)}></input>
    </div>
  </form>
  <div>
      <p>First Name: {firstname}</p>
  </div>
    </>
)
}
export default UserForm
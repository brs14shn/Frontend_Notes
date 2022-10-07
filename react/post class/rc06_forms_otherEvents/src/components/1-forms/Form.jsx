
import {useState} from "react"


const Form = () => {
const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password,setPassword] =useState("")

const handleUsername =(e)=>{
  //console.log(e.target.value)
 setUsername(e.target.value)
}

const handleSubmit =(e)=>{
  e.preventDefault()  //* Refresh özelliğini kapattık.
  alert(`username  : ${username}`)
  // setEmail("")
  // setPassword("")
  // setUsername("")
  
}

  return (
    <div  >
      <form onSubmit={handleSubmit} style={{margin:"5rem"}}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username :   <span className="text-danger">{username}</span>
          </label>
          <input
            onChange={handleUsername}
            type="text"
            className="form-control"
            id="username"
            // value={username}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address : {email}
          </label>
          <input
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="email"
            // value={email}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="password"
            // value={password}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

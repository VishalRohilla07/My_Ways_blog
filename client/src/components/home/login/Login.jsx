import { useState } from 'react';
import { login } from '../../../service/api';
import {useNavigate} from 'react-router-dom'
import "./style.css";

const initialValues = {
  name: '',
  email: '',
  role: 'admin',
  password: ' ',
  createdAt: new Date(),
};
const Login = () => {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [user, setUser] = useState(initialValues);
  const handleChange = (e) => {
    const {name,value} = e.target
    console.log([e.target]);
    setUser({ ...user, [name]: value });
  };

  const savePost = async () => {
    await login();
    navigate('/');
  };


  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={() => savePost()}>
        <div className="input-container">
          <input placeholder='Email' type="text" name="email" value={user.email} onChange={(e) => handleChange(e)} required />
          {renderErrorMessage('uname')}
        </div>
        <div className="input-container">
          <input placeholder='Password' type="password" name="password" onChange={(e) => handleChange(e)} required />
          {renderErrorMessage('pass')}
        </div>
        <div className="button-container">
          <input type="submit" onClick={(event)=>{
            event.preventDefault();
            console.log(event);
            navigate('/');
            login(user)}} />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Login</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
};

export default Login;

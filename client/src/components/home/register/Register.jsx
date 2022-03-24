import { useState } from 'react';
import { register } from '../../../service/api';
import {useNavigate} from 'react-router-dom'
import "./style.css";


const initialValues = {
    name: '',
    email: '',
    role: '',
    password: ' ',
    createdAt: new Date(),
  };

const Register = () => {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [user, setUser] = useState(initialValues);
  const handleChange = (e) => {
    const {name,value} = e.target
    setUser({ ...user, [name]: value });
  };
  // const savePost = async () => {
  //   await register();
  //   navigate('/login');
  // };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={(event) => event.savePost()}>
        <div className="input-container">
          <input placeholder='Full Name' type="text" name="name" value={user.name}  onChange={(e) => handleChange(e)} required />
          {renderErrorMessage('name')}
        </div>
        <div className="input-container">
          <input placeholder='Email' type="text" name="email" value={user.email} onChange={(e) => handleChange(e)} required  />
          {renderErrorMessage('email')}
        </div>
        <div className="input-container">
          <input placeholder='role:user/admin' type="text" name="role" value={user.role} onChange={(e) => handleChange(e)} required />
          {renderErrorMessage('role')}
        </div>
        <div className="input-container">
          <input placeholder='Password' type="text" name="password"  onChange={(e) => handleChange(e)}  required />
          {renderErrorMessage('password')}
        </div>
        <div className="input-container">
          <input placeholder='Confirmed Password' type="text" onChange={(e) => handleChange(e)} name="password" required />
          {renderErrorMessage('password')}
        </div>
        <div className="button-container">
          <input type="submit" onClick={(event)=>{
            navigate('/login');
            event.preventDefault();
            register(user)}}
           />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Register</div>
        {isSubmitted ? <div>User is successfully Registered in</div> : renderForm}
      </div>
    </div>
  );
};

export default Register;

import { useState } from 'react'
import { useNavigate } from 'react-router'
import './SignUp.css'
import userIcon from '../assets/user.png'
import lockIcon from '../assets/lock.png'
import emailIcon from '../assets/email.png'

const SignUp = () => {
  const navigate = useNavigate();

  const initialValues = { username: "", email: "", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSumbit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    setIsSubmit(true);

    if (Object.keys(errors).length === 0) {
      const nextRoute =
        formValues.username.trim().toLowerCase() === "admin"
          ? "/admin/overview"
          : "/user/home";

      navigate(nextRoute);
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

    if(!values.username) {
      errors.username = "Username is required!"
    }

    if(!values.email) {
      errors.email = "Email is required!"
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!"
    }

    if(!values.password) {
      errors.password = "Password is required!"
    }else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters!"
    }

    return errors;
  };

  return(
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSumbit && (
        <div className="success-message">Signed in successfully!</div>
      )}

        <form className="signup-form" onSubmit={ handleSubmit}>
          <h2>Sign Up</h2>

          <div className="inputGroup">
            <img src={userIcon} alt="userIcon"/>
            <input type="text" id="username" name="username" placeholder="Enter username" value={ formValues.username } onChange={handleChange} />
          </div>
          <p className="error-message">{formErrors.username}</p>

          <div className="inputGroup">
            <img src={emailIcon} alt="userIcon"/>
            <input type="text" id="email" name="email" placeholder="Enter email" value={ formValues.email} onChange={handleChange} />
          </div>
          <p className="error-message">{formErrors.email}</p>


          <div className="inputGroup">
            <img src={lockIcon} alt="userIcon"/>
            <input type="password" id="password" name="password" placeholder="Enter password" value={ formValues.password} onChange={handleChange} />
          </div>
          <p className="error-message">{formErrors.password}</p>


          <div className="buttonGroup">
            <button className="activeButton" type="submit">
              Sign Up
            </button>
          </div>

          

        </form>
    </div>
  );
} 

export default SignUp;

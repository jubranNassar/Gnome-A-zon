import { useState } from 'react'
import './SignUp.css'
import { signUp } from '../../services/users'
import { useHistory } from 'react-router-dom'
import Layout from '../../components/Layout/Layout.jsx';

const SignUp = (props) => {
  const history = useHistory()

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })

  const onSignUp = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signUp(form)
      setUser(user)
      history.push('/')
    } catch (error) {
      console.error(error)
      setForm({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isError: true,
        errorMsg: 'Sign Up Details Invalid',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger form-submit-button-su' : 'form-submit-button-su'
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type='submit' className='form-submit-button-su'>Sign Up</button>
    }
  }

  const { username, email, password, passwordConfirmation } = form

  return (
    <Layout user={props.user}>
      <div className='forms-screen-su'>
        <div className='auth-forms-card-su'>
          <h3 className='form-title-su'>Sign Up</h3>
          <form onSubmit={onSignUp} className='auth-form-su'>

            <div className='form-label-input-div-su'>
              <div className="label-div-su">
                <label>Username:</label>
              </div>
              <input
              required
              type='text'
              name='username'
              className= 'form-input-su'
              value={username}
              placeholder='Enter username'
              onChange={handleChange}
              />
            </div>

            <div className='form-label-input-div-su'>
              <div className="label-div-su">
                <label>Email address:</label>
              </div>
              <input
                required
                type='email'
                name='email'
                className= 'form-input-su'
                value={email}
                placeholder='Enter email'
                onChange={handleChange}
              />
            </div>

            <div className='form-label-input-div-su'>
              <div className="label-div-su">
                <label>Password:</label>
              </div>
              <input
                required
                name='password'
                value={password}
                type='password'
                className= 'form-input-su'
                placeholder='Password'
                onChange={handleChange}
              />
            </div>

            <div className='form-label-input-div-su'>
              <div className="label-div-su">
                <label>Confirm Password:</label>
              </div>
              <input
                required
                name='passwordConfirmation'
                className= 'form-input-su'
                value={passwordConfirmation}
                type='password'
                placeholder='Confirm Password'
                onChange={handleChange}
              />
            </div>
            {renderError()}
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default SignUp

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
    const toggleForm = form.isError ? 'danger form-submit-button' : 'form-submit-button'
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type='submit' className='form-submit-button'>Sign Up</button>
    }
  }

  const { username, email, password, passwordConfirmation } = form

  return (
    <Layout user={props.user}>
      <div className='forms-screen'>
        <div className='auth-forms-card'>
          <h3 className='form-title'>Sign Up</h3>
          <form onSubmit={onSignUp} className='auth-form'>

            <div className='form-label-input-div'>
              <div className="label-div">
                <label>Username:</label>
              </div>
              <input
              required
              type='text'
              name='username'
              className= 'form-input'
              value={username}
              placeholder='Enter username'
              onChange={handleChange}
              />
            </div>

            <div className='form-label-input-div'>
              <div className="label-div">
                <label>Email address:</label>
              </div>
              <input
                required
                type='email'
                name='email'
                className= 'form-input'
                value={email}
                placeholder='Enter email'
                onChange={handleChange}
              />
            </div>

            <div className='form-label-input-div'>
              <div className="label-div">
                <label>Password:</label>
              </div>
              <input
                required
                name='password'
                value={password}
                type='password'
                className= 'form-input'
                placeholder='Password'
                onChange={handleChange}
              />
            </div>

            <div className='form-label-input-div'>
              <div className="label-div">
                <label>Confirm Password:</label>
              </div>
              <input
                required
                name='passwordConfirmation'
                className= 'form-input'
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

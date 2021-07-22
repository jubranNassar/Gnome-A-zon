import { useState } from 'react'
import './SignIn.css'
import { signIn } from '../../services/users'
import { useHistory } from 'react-router-dom'

const SignIn = (props) => {
  const history = useHistory()

  const [form, setForm] = useState({
    email: '',
    password: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const onSignIn = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signIn(form)
      setUser(user)
      history.push('/')
    } catch (error) {
      console.error(error)
      setForm({
        isError: true,
        errorMsg: 'Invalid Credentials',
        email: '',
        password: '',
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
      return <button type='submit' className='form-submit-button'>Sign In</button>
    }
  }

  const { email, password } = form

  return (
    <Layout user={props.user}>

      <div className='forms-screen'>
        <div className='sign-in-forms-card'>
          <h3 className='form-title'>Sign In</h3>
          <form onSubmit={onSignIn} className='auth-form'>

            <div className='form-label-input-div'>
              <div className="label-div">
                <label>Email:</label>
              </div>
              <input
                required
                type='text'
                name='email'
                className= 'form-input'
                value={email}
                placeholder='Enter Email'
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
                className= 'form-input'
                value={password}
                type='password'
                placeholder='Password'
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

export default SignIn

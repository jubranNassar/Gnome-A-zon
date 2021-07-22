import { useState } from 'react'
import './SignIn.css'
import { signIn } from '../../services/users'
import { useHistory } from 'react-router-dom'
import Layout from '../../components/Layout/Layout.jsx';


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
    const toggleForm = form.isError ? 'danger form-submit-button-si' : 'form-submit-button-si'
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type='submit' className='form-submit-button-si'>Sign In</button>
    }
  }

  const { email, password } = form

  return (
    <Layout user={props.user}>

      <div className='forms-screen-si'>
        <div className='sign-in-forms-card-si'>
          <h3 className='form-title-si'>Sign In</h3>
          <form onSubmit={onSignIn} className='auth-form-si'>

            <div className='form-label-input-div-si'>
              <div className="label-div-si">
                <label>Email:</label>
              </div>
              <input
                required
                type='text'
                name='email'
                className= 'form-input-si'
                value={email}
                placeholder='Enter Email'
                onChange={handleChange}
              />
            </div>

            <div className='form-label-input-div-si'>
              <div className="label-div-si">
                <label>Password:</label>
              </div>
              <input
                required
                name='password'
                className= 'form-input-si'
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

import './Home.css'
import Layout from '../../components/Layout/Layout.jsx'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className='home'>
        <div>
        <h1> Welcome to Gnome-A-Zon!</h1>
        <h2>Your source for garden fun and whimsey. Adopt a gnome or rehome your gnome today!</h2>
        </div>
        <Link className='shop_gnomes_button' to={'/products'}><button> Shop Gnomes</button> </Link>
      </div>
    </Layout>
  )
}

export default Home
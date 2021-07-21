import './Home.css'
import Layout from '../../components/Layout/Layout.jsx'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className='home'>
        <div className="welcome_home_card">
          <h1 className ="heading_home_text"> Welcome to Gnome-A-Zon!</h1>
          <h2 className="subtext_home_text">Your source for garden fun and whimsey. Adopt a gnome or rehome your gnome today!</h2>
        </div>
        <Link  to={'/gnomes'}><button className="home_button"> Shop Gnomes</button> </Link>
      </div>
    </Layout>
  )
}

export default Home
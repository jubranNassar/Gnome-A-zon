import './Layout.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layout (props) {
  return (
    <div className="layout">
      < Header user={props.user}/>
      <div className="layout-children">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;
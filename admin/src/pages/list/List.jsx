import Datatable from '../../components/datatable/Datatable.jsx'
import Navbar from '../../components/navbar/Navbar.jsx'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import './list.scss'

const list = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className='listContainer'>
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default list
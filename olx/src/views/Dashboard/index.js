import {useNavigate} from 'react-router-dom'
import './index.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Cards from '../../components/Card'



function Dashboard(){
    const navigate=useNavigate()
    return <div>
        <Header/>
        <Cards/>
        <Footer/>
        
    </div>
}
export default Dashboard
import Directory from '../../components/directory/directory.component'
import '../../components/directory/directory.styles.scss'

import { Outlet } from 'react-router-dom'


const Home = () => {

  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "women",
      "imageUrl": "https://www.prodirectrugby.com/productimages/V3_1_Main/132997.jpg"
    },
    {
      "id": 5,
      "title": "men",
      // "imageUrl": "https://i.pinimg.com/736x/bd/35/8c/bd358c9a308405b8bba762c142c6f1be.jpg"
      "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    }
  ]
  
  
  return (
    <div>
      <Outlet />
      <Directory categories={ categories } />
    </div>
  )
}

export default Home
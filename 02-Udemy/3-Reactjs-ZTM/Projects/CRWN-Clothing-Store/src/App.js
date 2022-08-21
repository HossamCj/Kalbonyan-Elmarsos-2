import Directory from './components/directory/directory.component'
import './components/directory/directory.styles.scss'


const App = () => {

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
      "imageUrl": "https://www.netclipart.com/pp/m/102-1026289_sunshine-baby-showers-bulut-konsepti-dogum-gunu.png"
    },
    {
      "id": 5,
      "title": "men",
      "imageUrl": "https://i.pinimg.com/736x/bd/35/8c/bd358c9a308405b8bba762c142c6f1be.jpg"
    }
  ]
  
  
  return (
    <Directory categories={ categories } />
  )
}

export default App
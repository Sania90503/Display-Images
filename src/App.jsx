
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import data from './data'

function App() {
  
  const cards = data.map(x=>{
return <Card 
key={x.id}
{...x}
/>
  })

  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="cards-list">{cards}</div>
    
    {/* <Card
     image = "img4.jpg"
     rating="5.0"
     reviewCount={60}
     country="USA"
     title="Life Wedding Photography"
     price={125}
     />
     <Card
     image = "img5.jpg"
     rating="4.8"
     reviewCount={2}
     country="USA"
     title="Group Mountain Biking"
     price={50}
     />  */}
     
    </>
  )
}

export default App

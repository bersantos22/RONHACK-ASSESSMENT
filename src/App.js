import './App.css';
import Container from './Components/Container/Container'
import {IdCard} from './Components/IdCard/IdCard'
import img1 from './Components/Images/Joao.jpg'
import img2 from './Components/Images/maria.jpg'
import {Counter} from './Components/Counter/Counter'

function App() {
  return (
    <>
   <Container>

     <IdCard

    picture={img1}
    fullName='John Doe'
    gender='male'
    birthday="1992-07-14"
   
  />

  <IdCard 

    picture={img2}
    fullName='Obrien Delores'
    gender='female'
    birthday="1988-05-11"
    
  />
  
   </Container>

   <Counter />
   </>
  );
}

export default App;

import AddTutorial from '../components/AddTutorial';
import TutorialList from '../components/TutorialList';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {
  const [tutorials, setTutorials] = useState();

  const url = 'https://tutorials-api-cw.herokuapp.com/api/tutorials';

  //! verilerimizi çağırıyoruz.
  const getTutorials =async()=>{

    try {
      const response = await axios.get(url) // get işlemi sadece url alır.
      // const {data} = await axios.get(url) // gelen datayı destructiring yaparız
      //console.log(response);
      setTutorials(response.data)
      
    } catch (error) {
      console.log(error);
      
    }
  }

  //getTutorials() //? state güncellenmediğinden render işlemi tetiklenmez
  //getTutorials //! state güncelliğinden render işleminin sürekli olmasını engellemek için👇

  useEffect(() => {
    //! ComponentDidMount --> Birkez çalışacaktır.
    getTutorials()
  }, [])
  
console.log(tutorials) // ilk undefined gelir çünkü ilk render işlemi tetiklenir.
//? Burada gelen tutorials artık TutorialList aktaracağız.

  return (
    <>
      <AddTutorial/>
      <TutorialList tutorials={tutorials} />
    </>
  );
};

export default Home;

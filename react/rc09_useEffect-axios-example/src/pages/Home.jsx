import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState();

  const url = "https://cw-axios-example.herokuapp.com/api/tutorials";

  // const getTutorials = async () => {
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   setTutorials(data)
  // }
  //? Bu async -await hali axios anlayamayanlar buna da bakabilir
  const getTutorials = async () => {
    try {
      const { data } = await axios.get(url);
      setTutorials(data);
    } catch (err) {
      console.log(err);
    }
  };

  //! Sadece Component mount oldugunda istek yapar

  useEffect(() => {
    getTutorials();
  }, []); //! renderdan sonra birkez mount çalışır

  // * POST(CREATE)
  const addTutorial = async (tutorials) => {
    try {
      await axios.post(url, tutorials);
    } catch (err) {
      console.log(err);
    }
    getTutorials();
  };
  // console.log(tutorials);

  const deleteTutorial = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (err) {
      console.log(err);
    }
    getTutorials();
  };

  const editTutorial = async (id, title, desc) => {
    const filtered = tutorials.filter((tutor) => {
      return tutor.id === id;
    });
    console.log(filtered);
    try {
      await axios.put(`${url}/${id}`);
    } catch (err) {
      console.log(err);
    }
    getTutorials();
  };

  return (
    <>
      <AddTutorial addTutorial={addTutorial} />
      <TutorialList
        tutorials={tutorials}
        deleteTutorial={deleteTutorial}
        editTutorial={editTutorial}
      />
    </>
  );
};

export default Home;

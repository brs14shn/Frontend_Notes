# API Base URLs

## https://tutorials-api-cw.herokuapp.com/api/tutorials

## https://axios-example-cw.herokuapp.com/api/tutorials

## https://cw-axios-example.herokuapp.com/api/tutorials

### API ENDPOINTS

- GET `api/tutorials` get all Tutorials
- GET `api/tutorials/:id` get Tutorial by id
- POST `api/tutorials` add new Tutorial
- PUT `api/tutorials/:id` update Tutorial by id
- DELETE `api/tutorials/:id` remove Tutorial by id
- DELETE `api/tutorials` remove all Tutorials
- GET `api/tutorials/published` find all published Tutorials
- GET `api/tutorials?title=[kw]` find all Tutorials which title contains 'kw'

# Deployed Frontend

## https://axios-example.netlify.app/


### Home.js 👇

propslar yukarıdan aşağıya doğru bir akış seyreder.
Aşağıdan yukarıya veri akışını global statement (context veya redux)
yoluyla yapabiliriz.Ancak reactın yapısını bozmaktadır.
burada Home.js içerisinde tutorial adında bir state tanımladık bu apı den 
gelen verileri datayı saklayacak ve bunu TutorialList.js props olarak gönderecektir.

```js
import AddTutorial from '../components/AddTutorial';
import TutorialList from '../components/TutorialList';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {
 //? tutorials
  const [tutorials, setTutorials] = useState();👇

  1️⃣ propslar yukarıdan aşağıya doğru bir akış seyreder.
  2️⃣ Aşağıdan yukarıya veri akışını global statement (context veya redux) yoluyla yapabiliriz.Ancak reactın yapısını bozmaktadır.
  3️⃣ Burada Home.js içerisinde tutorial adında bir state tanımladık bu apı den gelen verileri datayı saklayacak ve bunu TutorialList.js props olarak gönderecektir.
  4️⃣ <TutorialList tutorials ={tutorials/>

  5️⃣ AddTutorial inputları backend gönderiyoruz.Ancak refresh yaptığımızda bunlar Home gelecek bu yöntem çok effective olmaycaktır.
  6️⃣ Burada AddTutorial gönderilen verileri Home nasıl aktarırız.Children-parent veri akışı yoktur.Home.js içerisinde verileri tutan tutorials güncellenmeli
  7️⃣💣💥❎➡️Bunu fonksiyonu props olarak göndererek gerçekleştirdik.

  //! GET 
  / ❎ axios 👇 
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

  // ❎ fetch
// const getTutorials = async () => {
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   setTutorials(data)
  // }

//! ⛔ Sürekli render işlemini engellemek için

useEffect(() => {
    //! ComponentDidMount --> Birkez çalışacaktır.
    getTutorials()
  }, [])







  const url = 'https://tutorials-api-cw.herokuapp.com/api/tutorials';
  return (
    <>
      <AddTutorial/>
      <TutorialList
      />
    </>
  );
};

export default Home;

```
### AddTutorials.js

```js

import { useState } from 'react';

const AddTutorial = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle('');
    setDesc('');
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-danger mb-4">Submit</button>
      </form>
    </div>
  );
};

export default AddTutorial;

```

### TutorialList

```js
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';


const TutorialList = () => {
  const tutorials = [
    {
      id:1,
      title:"HTML",
      description:"HTML is a markup language"
    },
    {
      id:2,
      title:"CSS",
      description:"HTML is a markup language"
    }
  ]
  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    className="me-2 text-warning cursor-pointer"
                  />
                  <AiFillDelete
                    size={22}
                    className="text-danger cursor-pointer"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      
    </div>
  );
};

export default TutorialList;



```

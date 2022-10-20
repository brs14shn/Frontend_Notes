import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import EditTutorial from './EditTutorial';


const TutorialList = ({tutorials,deleteTutorial,editTutorial}) => {
  // const tutorials = [
  //   {
  //     id:1,
  //     title:"HTML",
  //     description:"HTML is a markup language"
  //   },
  //   {
  //     id:2,
  //     title:"CSS",
  //     description:"HTML is a markup language"
  //   }
  // ]

 
  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Day & Time</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description,day} = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td>{day}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                  data-toggle="modal" 
                  data-target="#edit-modal"
                  size={20}
                  className="me-2 text-warning cursor-pointer"
                  onClick={()=>editTutorial(id,"css","html")}
                  />
                  <AiFillDelete
                    size={22}
                    className="text-danger cursor-pointer"
                    onClick={()=>deleteTutorial(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditTutorial/>

      
    </div>
  );
};

export default TutorialList;

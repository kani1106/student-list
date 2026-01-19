import { useContext } from "react";
import { useState } from "react";
import { StudentContext } from "../context/StudentContext";
import { Link } from "react-router-dom";

function StudentsList() {
    const { addStudents, favourites } = useContext(StudentContext);

    const [students] = useState([
        { id: 1, name: "Kani", roll: "001" },
        { id: 2, name: "Mathi", roll: "002" },
        { id: 3, name: "Bheem", roll: "003" },
        { id: 4, name: "Raju", roll: "004" },
    ]);

    return (
          <div className='container'>

             <div className='list-container'>
            <h1 >Student List</h1>
            <Link to="/fav">Go to Favourite Students</Link>
            <ul className="list">
                {students.map((student) => (
                    <li className="list-btn" key={student.id}>
                        {student.name} - {student.roll}
                        <button className="btn"
                            onClick={() => addStudents(student)}
                            disabled={favourites.some((s) => s.id === student.id)}
                        >
                            {favourites.some((s) => s.id === student.id) ? "Added" : "Add to Favourite"}
                        </button>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default StudentsList;

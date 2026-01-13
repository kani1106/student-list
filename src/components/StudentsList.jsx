
import { useContext } from "react";
import { useState } from "react";
import { StudentContext } from "../context/StudentContext";



function StudentsList() {

    const {addStudents } = useContext(StudentContext);

    const [students] = useState ([

        { id: 1, name: "Kani" ,roll : "001" },
        { id: 2, name: "Mathi" ,roll : "002" },
        { id: 3, name: "Bheem" ,roll : "003" },
        { id: 4, name: "Raju" ,roll : "004"},

    ])


    return (
        <div >
            <h1>Student List</h1>

            {students.map((student) => (
                <div key={student.id}>
                    <p>{student.name}</p>

                    <button onClick={() => addStudents(student)}>
                        Add to Favourite
                    </button>
                </div>
            ))}
        </div>
    )
}

export default StudentsList ; 
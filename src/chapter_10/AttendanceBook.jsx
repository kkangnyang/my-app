import React from "react";

const students = [
    {
        id: 1,
        name: "gayoung"
    },
    {
        id: 2,
        name: "nayoung"
    },
    {
        id: 3,
        name: "dayoung"
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;
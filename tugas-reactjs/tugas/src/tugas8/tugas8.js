import React from "react"

function Tugas8(props){
    return(
        <div class="data">
        <h1>Tugas8 diri peserta kelas Reactjs </h1>
        <p>{props.name}</p>
        <p>{props.email}</p>
        <p>{props.batch}</p>
    </div>
    );
}
export default Tugas8;
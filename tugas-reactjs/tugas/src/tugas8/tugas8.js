import React from "react"

function Data(props){
    return(
        <div class="data">
        <h1>Data diri peserta kelas Reactjs </h1>
        <p>{props.name}</p>
        <p>{props.email}</p>
        <p>{props.batch}</p>
    </div>
    );
}
export default Data;
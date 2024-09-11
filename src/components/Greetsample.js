import React from "react";

// function Greet(params) {
//     return <h1>Hi Migo</h1>
// }


//pag isa lng ung parameter, pwede na tangalin ung ()
export const Greet2 = number => <h1>Hey</h1>

//es6 no return statement because after the => its assume that the fucntion will return it
const Greet = (props) =>
    <>
        <Greet2 />
        <h1>This is migo {props.name} {props.age}</h1>
        <h1>This is migo</h1>
    </>

export default Greet;
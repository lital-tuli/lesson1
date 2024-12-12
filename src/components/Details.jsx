// let username = 'Noam';

import { useEffect, useState } from 'react';
function Details() {
    let [username, setUsername] = useState("Noam");

    const handlerInput = (newInput) => {
//  username = newInput;
setUsername(newInput);
 console.log(username);
 
    };
    //execute every time the page is rendered
    useEffect(() => {
        console.log("page rendered");
    });

    // execute in first render
    useEffect(() => {
        console.log("first render");
    }, []);

    // execute in spesific changes
    useEffect(() => {
        console.log("username changed");
    }, [username]);
    return (  
        <>
        <label htmlFor="username">User Name:</label>
        <input type="text" id="username" onChange={
            (e) => handlerInput(e.target.value)
        } />
<p>{username}</p>
        </>
    );
}

export default Details;
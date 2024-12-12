import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

function UserDetails() {

    let {id}= useParams();
    let user = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);
// let [user , setUser] = useState({});  

// useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users/${id}')
//     .then((response) => response.json())
//     .then((userInfo) => setUser(userInfo));
// } , []);

if(id>=1 && id<=10) {

    return ( 
        <>
        <h1>user {id} details</h1>
        <p>username: {user.username}</p>
        <p>email: {user.email}</p>
        <p>phone: {user.phone}</p>


        </>
     );
    } else {
        return (
            <h1>user not found</h1>
        )
    }
}

export default UserDetails;
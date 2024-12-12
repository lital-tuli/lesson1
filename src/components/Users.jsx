
import { Link } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { getAllUsers } from "../Services/UserServics";
import { useState } from "react";


function Users() {
    // const users = useFetch("https://jsonplaceholder.typicode.com/users");
        // console.log(users)
    let  [users, setUsers] = useState([]);
    getAllUsers() .then ((result)=> setUsers(result.data));

        return (
        <>
        <h2>Users</h2>
        {users.length
        ? (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <Link to={`/users/${user.id}`} > {user.name}</Link>
                    </li>
            ))}
        </ul>
        ) : (
        <p>No users found.</p>
        )}
        </>
    );
}
export default Users;
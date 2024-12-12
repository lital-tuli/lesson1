import { useState } from "react";

function NewUser() {
  let [email, setEmail] = useState("test@demo.com");
  let [password, setPassword] = useState("");

  let register = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };
  return (
    <>
      <h2>Register</h2>
      <form className="form-control w-50" onSubmit={register}>
        <label htmlFor="email">Email:</label>
        <input
          className="form-control w-50"
          type="email"
          id="email"
          autoComplete="on"
          placeholder="israel@israeli.co.il"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          className="form-control w-50"
          type="password"
          id="password"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
        />
          <button type="submit" className="btn btn-dark mt-2">
          Register
        </button>
      </form>
    </>
  );
}

export default NewUser;
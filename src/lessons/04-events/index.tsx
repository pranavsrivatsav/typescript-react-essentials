import React, { useState } from "react";

type Person = {
  name: string;
  email: string;
};

function Component() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onEmailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget); //Formdata accepts e.currentTarget as TS know that via the generic set that the event is a FormEvent
    // const formData = new FormData(e.target as HTMLFormElement) //But if we need to use e.target then we need to explicitly assert that the target will be a HTMLFormElement
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const person: Person = {
      name,
      email,
    };
    console.log(person);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
        />
        <input
          placeholder="Enter Name"
          value={email}
          onChange={onEmailChangeHandler}
          name="email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default Component;

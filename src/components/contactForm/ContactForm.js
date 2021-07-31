import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
       type="name"
       name="name"
       value={name}
       onChange={(e) => setName(e.target.value)}
       required
       placeholder="Name"
       >
       </input>
       <input
       type="email"
       name="email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       required
       placeholder="Email"
       >
       </input>
       <input
       type="phone"
       name="phone"
       value={phone}
       onChange={(e) => setPhone(e.target.value)}
       required
       placeholder="Phone"
       >
       </input>
       <input type='submit'></input>
    </form>
  );
};

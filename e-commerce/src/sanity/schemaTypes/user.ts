const userSchema = {
    name: "user",
    title: "User",
    type: "document",
    fields: [
      { name: "firstName", title: "First Name", type: "string" },
      { name: "lastName", title: "Last Name", type: "string" },
      { name: "email", title: "Email", type: "string" }, 
      { name: "password", title: "Password", type: "string" },
      { name: "age", title: "Age", type: "number" },
    ],
  };

  export default userSchema;
  
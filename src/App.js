import Child from "./Child";

// return (
//   <div>
//     <h3>{props.name}</h3>
//     {props.children}
//   </div>
// )
// function Child(user) {
//   return <h3>`Hello {user.fname + " " + user.lname}</h3>;
// }

export default function App() {
  const user = {
    fname: "Amee",
    lname: "Brisk",
  };

  return <div className="App">{Child(user)}</div>;
}

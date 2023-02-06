import React from "react";
const url = "https://jsonplaceholder.typicode.com/users";
const fetchData = () => {
    fetch(url).then(res => res.json()).then(data => console.log(data))
}
const FetchData = () => {
    return (
      <div className="">
      </div>
    );
  }
  
  export default FetchData;
import React, { useState } from "react";

export default (prop) => {
  const [status, setStatus] = useState('year')


  const handleSubmit = event => {
    alert("Status type: " + { status });
    event.preventDefault();
  }

  const handleChange = event => {
    setStatus(event)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <select value={status} onChange={(e) => handleChange(e.target.value)}>
          <option value="year">Year</option>
          <option value="life">Life</option>
        </select>
      </label>
    </form>
  )
}

// export default class Dropdown extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { status: "year" };


//     this.handleSubmit = this.handleSubmit.bind(this);
//   }


//   handleSubmit = event => {
//     alert("Status type: " + this.state.status);
//     event.preventDefault();
//   }

//   handleChange = event => {
//     this.setState({ status: event.target.status });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>

//           <select value={this.state.status} onChange={this.handleChange}>
//             <option value="year">Year</option>
//             <option value="life">Life</option>

//           </select>
//         </label>
//       </form>
//     );
//   }
// }


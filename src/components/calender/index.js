// import React, { useState } from "react";
// import moment from "moment";
// import "./styles.css";

// function Calender(props) {
//   let [days, setDays] = useState([
//     "Saturday",
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "friday",
//   ]);
//   //   const startWeek = moment().startOf("month").week();
//   //   const endWeek = moment().endOf("month").week();

//   //   let calendar = [];
//   //   for (var week = startWeek; week < endWeek; week++) {
//   //     calendar.push({
//   //       week: week,
//   //       days: Array(7)
//   //         .fill(0)
//   //         .map((n, i) =>
//   //           moment()
//   //             .week(week)
//   //             .startOf("week")
//   //             .clone()
//   //             .add(n + i, "day")
//   //         ),
//   //     });
//   //   }
//   return (
//     <table>
//       <thead>
//         <tr>
//           {days.map((day) => (
//             <th key={day}>{day}</th>
//           ))}
//         </tr>
//       </thead>
//       {/* <tbody>
//       {moment()
//         .toDate()
//         .map((day) => (
//           <tr>
//             <td>{day}</td>
//           </tr>
//         ))}
//       </tbody> */}
//     </table>
//   );
// }

// export default Calender;

import React from "react";

export const ContactPicker = ({onChange, contacts}) => {
  return (
    <select onChange={onChange}>
      <option value={""} key={-1}>None selected</option>
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};


// export const ContactPicker = ({ name, onChange, contacts }) => {
//   return (
//     <select name={name} onChange={onChange}>
//       <option value={""} key={-1}>
//         No Contact Selected
//       </option>
//       {contacts.map((contact) => {
//         return (
//           <option value={contact} key={contact}>
//             {contact}
//           </option>
//         );
//       })}
//     </select>
//   );
// };

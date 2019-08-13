import React from "react";

function DisplayImg({ Images }) {
  let objKeys = Object.keys(Images);

  if (objKeys.length >= 1) {
    return objKeys.map(name => {
      return (
        <tr key={Math.random()}>
          <th scope="row" key={Math.random()}>
            {objKeys.indexOf(name) + 1}
          </th>
          <td key={Math.random()}>
            <img src={Images[name]} alt="" key={Math.random()} />
          </td>
          <td className="text-center" key={Math.random()}>
            {name}
          </td>

          <td className="text-center" key={Math.random()}>
            <span>Current Size</span> {0}
            
          </td>

        </tr>
      );
    });
  } else {
    return <></>;
  }
}

export default DisplayImg;

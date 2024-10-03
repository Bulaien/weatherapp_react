import React from "react";

export const Data = ({ data }) => {
  if (data) {
    return (
      <div>
        {data.map((date) => (
          <h1 key={date.id}>{date.name}</h1>
        ))}
      </div>
    );
  } else {
    return <h1>Weniger als 6</h1>;
  }
};

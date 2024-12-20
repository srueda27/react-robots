import React, { Fragment } from "react";
import Card from "../containers/Card";

const CardList = ({ robots }) => {
  return (
    <>
      {robots.map((user, i) => {
        return (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
          />
        );
      })}
    </>
  );
};

export default CardList;

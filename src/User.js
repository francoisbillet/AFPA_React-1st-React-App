import React from "react";

const Name = ({ user }) => {
  return (
    <p>
      {user.firstname} {user.lastname}
    </p>
  );
};

const Cart = props => {
  return (
    <ul>
      {props.cart.map((element, i) => (
        <li key={i}>
          {element.title}: {element.price}€
        </li>
      ))}
    </ul>
  );
};

const User = props => {
  return (
    <div>
      <Name user={props.user} />
      <Cart cart={props.cart} />
    </div>
  );
};

export default User;

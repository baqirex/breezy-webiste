import React from "react";

const List = ({ heading, list }) => {
  return (
    <div className="my-list">
      <h4 className="list-heading">{heading}</h4>
      <ul>
        {list.map((item) => (
          <li className="listing" key={item}>
            <a className="cool-link">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

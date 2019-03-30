import React from 'react';

import NavItem from './../raws/nav-item';

const Navigators = ({items}) => {
  return (
    <>
      <ul className="nav">
        {items.map(item => (
          <NavItem url={`/${item.id}`} key={item.id} title={`Document ${item.id}`}/>
        ))}
      </ul>
    </>
  );
}

export default Navigators;
import React from 'react';
import { Nav } from 'react-bootstrap'; 

const ItemList = () => {
  const categories = [
    { name: 'Castillo1', href: '#Castillo1' },
    { name: 'Castillo2', href: '#castillo2' },
    { name: 'Granja1', href: '#granja1' },
  ];

  return (
    <>
      {categories.map((category, index) => (
        <Nav.Link key={index} href={category.href}>{category.name}</Nav.Link>
      ))}
    </>
  );
}

export default ItemList;

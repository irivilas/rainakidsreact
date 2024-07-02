import React from 'react';
import { Nav } from 'react-bootstrap'; 

const ItemList = () => {
  const categories = [
    { name: 'Castillo1', href: '#Castillo1' },
    { name: 'Castillo2', href: '#castillo2' },
    { name: 'Granja1', href: '#granja1' },
  ];
  const items = [
    { id: 1, name: 'Castillo1' },
    { id: 2, name: 'Castillo2' },
    { id: 3, name: 'Granja1' },
  ];
  return (
    <>
      {categories.map((category, index) => (
        <Nav.Link key={index} as={Link} to={`/category/${category.name}`}>{category.name}</Nav.Link>
      ))}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ItemList;
// src/components/ItemDetailContainer.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ id, name: `Producto ${id}`, description: 'Descripción del producto.' }), 1000)
      );
      setItem(response);
    };

    fetchItem();
  }, [id]);

  if (!item) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>ID del Producto: {item.id}</p>
      <p>{item.description}</p>
    </div>
  );
}

export default ItemDetailContainer;







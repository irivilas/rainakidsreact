import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';

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

  if (!item) return <p>Cargando..</p>;

  return (
    <ItemDetail item={item} />
  );
}

export default ItemDetailContainer;





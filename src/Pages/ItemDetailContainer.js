// src/components/ItemDetailContainer.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Description from './Description';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchItem = async () => {
      const docRef = doc(db, 'items', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setItem({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No such document!");
      }
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <Description text={item.description} />
      <ItemQuantitySelector onAdd={setQuantity} />
      <AddItemButton item={item} quantity={quantity} />
    </div>
  );
};

export default ItemDetailContainer;

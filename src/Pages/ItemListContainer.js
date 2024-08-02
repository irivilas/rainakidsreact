// src/components/ItemListContainer.js

import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import ItemList from './ItemList';
import { db } from './firebase';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'items'));
      const itemsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(itemsData);
    };

    fetchItems();
  }, []);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;

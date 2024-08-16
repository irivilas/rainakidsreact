
import React, { useEffect, useState } from 'react';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import ItemList from './ItemList';
import { db } from './firebase';
import { collection, getdocs } from 'firebase/firestore';


const ItemListContainer = () => {}
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'items'));
      const itemsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(itemsData);
    };

    fetchItems();
  }, []);

  let productos = collection (db, " Juguetes")
  let getproductos  = getDocs (collection)
  getproductos.then(res) = console.log(res.docs[0].id) ;
  
  const addproductos = ()=> {
    console.log ("se agregaron"); 
    let  productos = collection (db, "juguetes")

    productos.array.forEach(element => {
      addDoc (productos, element)
    });


  return (
    <div>
      <button onClick={addproductos}>Agregar productos </button>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;

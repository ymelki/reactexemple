import { useEffect, useState } from 'react'
import './App.css'
import Header from './header';
import Test from './Test';
import { Link, Route, Router, Routes } from 'react-router-dom';
import NotFound from './NotFound';
function Produits() { 

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        const token = await localStorage.getItem('token')
        console.log(localStorage.getItem('token'));
        try {
          const response = await fetch('https://127.0.0.1:8000/api/produits?page=1', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'accept':'application/ld+json',
              'Content-Type': 'application/ld+json'
            }});
  
          if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
          }
  
          const jsonData = await response.json();
          setData(jsonData['hydra:member']); // Accéder à hydra:member
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) return <div>Chargement en cours...</div>;
  
    if (error)             navigate('/Accueil');
    ;
   


    return ( 
        <div>
             <h1>Liste des prduits</h1> 
             <div>
  
      
      <h1>Données de l'API :</h1>
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.titre}  
            </li>
          ))}
        </ul>
      )}
 
    </div> 
        </div>
      );
    }
    
  
export default Produits;
import { useEffect, useState } from 'react'
import './App.css'
import Header from './header';
import Test from './Test';
import { Link, Route, Router, Routes } from 'react-router-dom';
import NotFound from './NotFound';
function Services() { 

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://127.0.0.1:8000/api/services?page=1');
  
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
  
    if (error) return <div>Erreur: {error.message}</div>;
   


    return ( 
        <div>
             Liste des services 
             <div>
  
      
      <h1>Données de l'API :</h1>
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.nom}  
            </li>
          ))}
        </ul>
      )}
 
    </div> 
        </div>
      );
    }
    
  
export default Services;
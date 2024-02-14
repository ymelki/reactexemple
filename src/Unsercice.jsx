import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

 
function Unservice() { 
    const { id } = useParams();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://127.0.0.1:8000/api/services/${id}`);
  
          if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
          }
  
          const jsonData = await response.json();
          setData(jsonData); // 
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
   


    console.log(data);
    return ( 
        <div>
            NOM : {data.nom}
         </div>
      );
    }
    
  
export default Unservice;
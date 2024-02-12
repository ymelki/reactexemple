import { useState } from "react";
import { Button, Form, FormField } from "semantic-ui-react";
 import { useNavigate } from "react-router-dom";

 
function AjouterService() {
    let navigate = useNavigate();
 

    const [formData, setFormData] = useState({
        nom: ''
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('https://127.0.0.1:8000/api/services', {
            method: 'POST',
            headers: {
              'accept':'application/ld+json',
              'Content-Type': 'application/ld+json',
            },
            body: JSON.stringify(formData),
          });
    
          if (!response.ok) {
            throw new Error('Erreur lors de la requête HTTP !');
          }
    
          console.log('Données envoyées avec succès !');
          // Réinitialise les champs du formulaire après envoi réussi
          setFormData({
            nom: ''
          });

          navigate('/services');

        } catch (error) {
          console.error('Erreur lors de l\'envoi des données :', error.message);
        }
      };
    
    return ( 
        <div>
            <h1>Ajouter service</h1>
            <Form  onSubmit={handleSubmit}>
                <FormField>
                <label>Nom du service</label>
                <input 
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                placeholder='service' />
                </FormField>
                <Button type='submit'>Ajouter</Button>
            </Form>
        </div>
      );
    }
    
  
export default AjouterService;
import { Button, Form, FormField } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



 

function AjouterUSer() {
    
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        "roles": [],
        password: ''
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
       };


      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('https://127.0.0.1:8000/api/users', {
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
            email: '',
            "roles": [],
            password: ''
          });

          // navigate('/services');

        } catch (error) {
          console.error('Erreur lors de l\'envoi des données :', error.message);
        }
      };

    return ( 
        <div>
        <h1>Ajouter un user</h1>
        <Form onSubmit={handleSubmit}>
            <FormField>
            <label>email</label>
            <input  name="email" value={formData.nom} onChange={handleChange} type='email'  placeholder='email' />
            </FormField>
            <FormField>
            <label>password</label>
            <input name="password"  value={formData.nom} onChange={handleChange} type='password' placeholder='password' />
            </FormField>
        
            <Button type='submit'>Submit</Button>
        </Form>
    </div>
      );
    }
    
  
export default AjouterUSer;
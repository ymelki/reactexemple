import { Button, Form, FormField } from "semantic-ui-react";

function AjouterUnService() { 

    const [formData, setFormData] = useState({
        nom: ''
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("test de l'envoie");
    }
    return ( 
        <div>
              <Form  onSubmit={handleSubmit}>
                <FormField>
                <label>Nom</label>
                <input placeholder='Nom'
                
                value={formData.nom}
                onChange={handleChange}
                />
                </FormField>
                 
                <Button type='submit'>Envoyé</Button>
            </Form>
        </div>
      );
}
export default AjouterUnService;
    
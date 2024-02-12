import { Link } from "react-router-dom";
import { Button, Input, Menu, MenuItem } from "semantic-ui-react";

function Header() { 
    return ( 
        <div>
      
        <Menu>
       
        <Link to={`/Accueil`}>
        <MenuItem>Accueil</MenuItem>
         </Link>

         <Link to={`/services`}>
        <MenuItem>Liste des services</MenuItem>
        </Link>

        <Link to={`/ajouterservices`}>
        <MenuItem>Ajouter un service</MenuItem>
        </Link>


   
        <Link to={`/Ajouteruser`}>
        <MenuItem>Inscription</MenuItem>
        </Link>

        <Link to={`/Produit_protege`}>
        <MenuItem>Liste des produits (protégé)</MenuItem>
        </Link>


        <Link to={`/Connexion`}>
        <MenuItem>Connexion</MenuItem>
        </Link>

        <Link to={`/Deconnexion`}>
        <MenuItem>Deconnexion</MenuItem>
        </Link>


      </Menu>
      </div>
      );
    }
    
  
export default Header;
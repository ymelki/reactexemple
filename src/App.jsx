import { useEffect, useState } from 'react'
import './App.css'
import Header from './header';
import Test from './Test';
import { Link, Route, Router, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import Services from './Services';
import AjouterService from './AjouterService';
import AjouterUnService from './AjouterUnService';
import AjouterUSer from './AjouterUser';
import Connexion from './Connexion';
import Produits from './Produits';
import Deconnexion from './Deconnexion';


 /**
 * 
 * composants en JSX
 * Les etats , les hook
 * fetch ou axios pour gérer les API
 * JWT pour gérer l'authentification
 * REACT ROUTER DOM pour gérer les l'URL
 */
function App() {

  
  return (
    <> 
    <Header />
     <Routes>
      {/*
        Router 3 : ajout des routes
        si le `path` (chemin) de la route correspond à l'URL
        alors on affiche `element`
      */}
      <Route path="/React" element={<h1>React</h1>} />
      <Route path="/Accueil" element={<Test />} />
      <Route path="/services" element={<Services />} />
      <Route path="/ajouterservices" element={<AjouterService />} />
      <Route path="/Produit_protege" element={<Produits />} />

      <Route path="/Ajouteruser" element={<AjouterUSer />} />
      <Route path="/Connexion" element={<Connexion />} />
      <Route path="/Deconnexion" element={<Deconnexion />} />

      <Route path="*" element={<NotFound />} />

    </Routes>
   
    
    
    </>
  )
}

export default App

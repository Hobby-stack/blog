<template>
    <section class="header">
      <!-- Barre de navigation -->
      <nav class="navbar">
        <!-- Logo à gauche -->
        <div class="logo">
          <h1>Bl<span>o</span>g<span>.</span></h1>
        </div>
  
        <!-- Liens de navigation à droite -->
        <ul class="nav-links">
          <li><router-link to="/" >Accueil</router-link></li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">FAQ</a></li>
          <li>
            <button>
              <a href="#">Contact</a>
            </button>
          </li>
        </ul>
      </nav>
    </section>
  
    <!-- Section de la bannière -->
    <section class="banner">
      <div class="img-banner">
        <img src="../assets/banner-blog.jpg" alt="Bannière du blog" />
        <div class="banner-text">
          <h2>Votre guide vers une vie saine et équilibrée</h2>
          <p>Conseils pratiques, recettes nutritives et astuces pour prendre soin de vous au quotidien.</p>
        </div>
      </div>
    </section>
  
    <!-- Section principale -->
    <section class="main">
      <div class="main-1">
        <div class="tendances">
          <div class="top-blog">
            <DetailsPost/>
          </div>
        </div>
  
        <div class="card">
          <h2>Similaires</h2>
          <div class="latest-post">
            <RelatedPost/>
          </div>
        </div>
        <div class="comment">
          <h3>Laissez un commentaire</h3>
          <form @submit.prevent="submitComment" class="comment-form">
            <textarea
              v-model="newComment"
              placeholder="Écrivez votre commentaire ici..."
              required
            ></textarea>
            <button type="submit">Publier</button>
          </form>
  
          <!-- Liste des commentaires -->
          <div class="comment-list">
            <div v-for="(comment, index) in comments" :key="index" class="comment-item">
              <div class="comment-author">
                <strong>{{ comment.author }}</strong>
                <span class="comment-date">{{ comment.date }}</span>
              </div>
              <p class="comment-text">{{ comment.text }}</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Section main-2 à droite -->
      <div class="main-2">
        <div class="categorie">
          <h3>Categories</h3>
          <!-- Contenu des catégories -->
          <div class="btn-categorie">
         
            <div><button>Nutrition</button></div>
            <div><button>Activité physique</button></div>
            <div><button>Santé mentale</button></div>
            <div><button>Mode de vie</button></div>
            <div><button>Développement personnel</button></div>
       
          </div>
        </div>
        <div class="tags">
          <h3>Mes articles</h3>
          <!-- Contenu des tags -->
        </div>
        <div class="popular">
          <h3>Blogs populaires</h3>
          <!-- Contenu des blogs populaires -->
          <PopularBlog/>
        </div>
      </div>
    </section>
    <section class="part-contact">
      <div class="contact">
        <h3>Connectez-vous avec notre équipe</h3>
        <div class="contact-zone">
          <div class="text-contact"><p>notre équipe est là pour vous fournir le soutien et les conseils dont vous avez besoin. que vous ayez des questions, besoin de conseils d'experts ou que vous souhaitiez explorer comment nous pouvons collaborer.</p></div>
          <div class="btn-contact"><button>Contact</button></div>
        </div>
      </div>
    </section>
    <FooterPage/>
  </template>
  
  <script setup>
  import DetailsPost from '@/components/DetailsPost.vue';
  import FooterPage from '@/components/FooterPage.vue';
  import PopularBlog from '@/components/PopularBlog.vue';
  import RelatedPost from '@/components/RelatedPost.vue';
  </script>
  
  <style scoped>
  /* Style de la barre de navigation */
  .navbar {
    display: flex;
    justify-content: space-between; /* Logo à gauche, liens à droite */
    align-items: center;
    padding: 10px 20px;
    color: white; /* Couleur du texte */
    border-bottom: #e1e1e3 solid 2px;
  }
  
  /* Style du logo */
  h1 {
    color: #512da8;
    font-size: 25px;
  }
  h1 span {
    color: #fca90f;
  }
  
  /* Style des liens de navigation */
  .nav-links {
    list-style: none; /* Supprime les puces */
    display: flex;
    gap: 20px; /* Espace entre les liens */
    margin: 0;
    padding: 0;
    align-items: center; /* Alignement vertical des éléments */
  }
  
  .nav-links li a {
    color: rgb(0, 0, 0); /* Couleur des liens */
    text-decoration: none; /* Supprime le soulignement */
    font-size: 15px;
  }
  
  .nav-links li a:hover {
    color: #512da8;
  }
  
  /* Style du bouton */
  .nav-links li button {
    background-color: #512da8; /* Fond violet par défaut */
    padding: 8px 16px; /* Ajuste le padding pour un meilleur rendu */
    border: 1px solid #512da8; /* Bordure violette */
    border-radius: 10px;
    display: flex;
    align-items: center; /* Alignement vertical du texte dans le bouton */
    justify-content: center;
    cursor: pointer; /* Change le curseur en pointeur */
    transition: background-color 0.3s, color 0.3s; /* Animation fluide */
  }
  
  /* Style du texte dans le bouton */
  .nav-links li button a {
    color: white; /* Texte blanc par défaut */
    text-decoration: none; /* Supprime le soulignement */
  }
  
  /* Effet au survol du bouton */
  .nav-links li button:hover {
    background-color: white; /* Fond blanc au survol */
  }
  
  /* Effet au survol du texte dans le bouton */
  .nav-links li button:hover a {
    color: #512da8; /* Texte violet au survol */
  }
  
  /* Style de la bannière */
  .banner {
    position: relative;
    width: 100%;
  }
  
  .img-banner {
    position: relative;
    width: 100%;
    height: 500px; /* Hauteur fixe */
  }
  
  .img-banner img {
    width: 100%;
    height: 100%; /* Prend toute la hauteur du conteneur */
    object-fit: cover; /* Conserve les proportions et couvre la zone */
    display: block;
  }
  
  /* Style du texte superposé */
  .banner-text {
    position: absolute;
    top: 50%; /* Position verticale au milieu */
    left: 50%; /* Position horizontale au milieu */
    transform: translate(-50%, -50%); /* Centrage précis */
    text-align: center; /* Alignement du texte au centre */
    color: white; /* Couleur du texte */
  }
  
  .banner-text h2 {
    font-size: 1.8rem; /* Taille du titre */
    margin-bottom: 10px; /* Espace sous le titre */
  }
  
  .banner-text p {
    font-size: 1.2rem; /* Taille du paragraphe */
  }
  
  /* Style de la section principale */
  .main {
    display: flex; /* Utilisation de flexbox pour aligner main-1 et main-2 */
    margin: 20px 200px; /* Marge pour centrer le contenu */
  }
  
  .main-1 {
    flex: 2; /* main-1 prend plus d'espace */
  }
  
  .main-2 {
    flex: 1; /* main-2 prend moins d'espace */
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px; /* Espace entre les sections */
  }
  
  /* Style des sections dans main-2 */
  .main-2 .categorie,
  .main-2 .tags,
  .main-2 .popular {
    border: 1px solid #e1e1e3;
    border-radius: 15px;
    padding: 20px; /* Espace intérieur */
  }
  
  .main-2 .categorie h3,
  .main-2 .tags h3,
  .main-2 .popular h3 {
    margin: 0 0 15px 0; /* Espace sous le titre */
    font-size: 1.2rem; /* Taille du titre */
    color: #512da8; /* Couleur du titre */
  }
  
  /* Style des boutons dans la section catégorie */
  .btn-categorie button {
    width: 100%; /* Largeur maximale */
    padding: 10px; /* Espace intérieur */
    margin-bottom: 10px; /* Espace entre les boutons */
    border: 2px solid #fca90f; /* Bordure orange */
    border-radius: 20px; /* Coins arrondis */
    background-color: transparent; /* Fond transparent par défaut */
    color: rgb(68, 67, 67); /* Couleur du texte */
    font-size: 0.9rem; /* Taille du texte */
    cursor: pointer; /* Curseur en pointeur */
    transition: background-color 0.3s, color 0.3s; /* Animation fluide */
  }
  
  /* Effet au survol des boutons */
  .btn-categorie button:hover {
    background-color: #fca90f; /* Fond orange au survol */
    color: white; /* Texte blanc au survol */
  }
  
  /* Style du formulaire de commentaire */
  .comment h3 {
    margin-top: 25px;
    margin-bottom: 20px;
  }
  
  .comment-form {
    margin-bottom: 20px;
  }
  
  .comment-form textarea {
    width: 100%;
    height: 150px;
    padding: 10px;
    border: 1px solid #e1e1e3;
    border-radius: 5px;
    font-size: 1rem;
    resize: vertical; /* Permet de redimensionner verticalement */
    margin-bottom: 10px;
  }
  
  .comment-form button {
    padding: 10px 20px;
    background-color: #fca90f;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  .comment-form button:hover {
    background-color: #ee9e09;
  }
  
  /* Style de la section contact */
  .contact {
    background-color: #512da8;
    color: white;
    width: 1200px;
    border: 0px solid;
    border-radius: 5px;
  }
  
  .contact .contact-zone .text-contact {
    width: 800px;
  }
  
  .contact .contact-zone .text-contact p {
    font-size: 13px;
  }
  
  .contact .contact-zone {
    display: flex;
    justify-content: space-around;
    padding-bottom: 20px;
  }
  
  .contact h3 {
    margin-top: 15px;
    margin-left: 87px;
    margin-bottom: 5px;
  }
  
  .part-contact {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
  
  /* Style du bouton Contact */
  .contact .contact-zone .btn-contact button {
    background-color: white; /* Fond blanc */
    color: #512da8; /* Texte violet */
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s, color 0.3s; /* Animation fluide */
  }
  
  .contact .contact-zone .btn-contact button:hover {
    background-color: #fca90f; /* Fond orange au survol */
    color: white; /* Texte blanc au survol */
  }
  </style>
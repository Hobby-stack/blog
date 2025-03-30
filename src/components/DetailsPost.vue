<template>
    <div class="top-blog">
      <div class="post-card" v-for="(post, index) in posts" :key="index">
        <div class="img-post">
          <img :src="post.image" :alt="'Image du post ' + (index + 1)" />
        </div>
        <div class="img-profil-user">
          <div class="img"><img :src="post.userAvatar" alt="Avatar de l'utilisateur" /></div>
          <div class="post-title"><h3>{{ post.title }}</h3></div>
        </div>
        <div class="contain-post">
          <p>{{ post.content }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import logo1 from '../assets/details1.jpg';
  import user1 from '../assets/profile.jpg';
 
  
  
  const posts = [
    {
      image: logo1,
      userAvatar: user1,
      title: 'Titre du post 1',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quasi reiciendis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quasi reiciendis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quasi reiciendis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quasi reiciendis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quasi reiciendis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quasi reiciendis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quasi reiciendis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quasi reiciendis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quasi reiciendis.',
      link: '#'
    },
  ];
  </script>
<style scoped>
.img-post {
  margin-top: 15px;
  width: 600px;
  height: 300px;
  border: solid 0px blackn;
  border-radius: 10px;
  margin-bottom: 10px;
}

.img-post img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Conserve les proportions et couvre la zone */
  border: solid 0px;
  border-radius: 10px;
}

.post-title {
  width: 400px;
  height: auto;
  margin-bottom: 5px;
  margin-top: 10px;
}

.post-title h3 {
  color: #512da8;
}

.contain-post {
  width: 100%;
  height: auto;
  font-size: 0.8em;
  margin-bottom: 10px
}


.img {
    
    height: 15px;
    width: 15px;
    object-fit: cover;
    border: 0px solid;
    border-radius: 50%

}
.img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 0px solid;
    border-radius: 50%
}
.top-blog {
  display: flex;
  justify-content: flex-start;
  gap: 20px; /* Espace entre les cartes */
}
</style>
<template>
    <div class="popular-post">
      <div class="popular-post-card" v-for="(post, index) in popularPosts" :key="index">
        <div>
          <div class="img-profil-user">
            <div class="post-title"><h3>{{ post.title }}</h3></div>
          </div>
          <div class="contain-post">
            <p>{{ post.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const popularPosts = [
    {
      title: 'Titre du post 1',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quasi reiciendis.',
    },
    {
      title: 'Titre du post 2',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quasi reiciendis.',
    },
    {
      title: 'Titre du post 3',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quasi reiciendis.',
    },
  ];
  </script>
  
  <style scoped>
  .popular-post {
    width: 250px;
    padding: 10px;
    margin-top: 15px;
  }
  .popular-post:hover {
    cursor: pointer;
  }
  .popular-post-card {
    display: flex;
    border-bottom: #e1e1e3 solid 1px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  
  .popular-post-card .img-profil-user {
    margin-bottom: 10px;
  }
  
  .popular-post-card .post-title h3 {
    color: #512da8;
    margin: 0;
  }
  
  .popular-post-card .contain-post p {
    font-size: 0.9rem;
    color: #666;
    margin: 0;
  }
  </style>
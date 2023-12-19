<template>
    <div class="user-main-container">
      <div class="image-container">
        <img src="../assets/1.jpeg" alt="user-image" class="friends-image" />
      </div>
  
      <div class="user-text-container">alok singh</div>
    </div>
  </template>
  
  <script>

</script>


  <style scoped>
  .user-main-container {
    display: flex;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 1.5% 1.5%;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 12px;
    margin-right: 15px;
  }
    .image-container {
      width: 35px;
      height: 35px;
    }
    .image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50px;
    }
  
    .user-text-container {
      margin-left: 2%;
    }
  
  </style>
  
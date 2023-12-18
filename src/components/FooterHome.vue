<template>
    <footer class="footer">
      <div class="container">
          <div class="footer-section">
            <h2>Site Links</h2>
        <router-link to="/about" class="about">
            About<br><br>
        </router-link>
        <router-link to="/offers" class="about">
            Offers
        </router-link>
        
          </div>
          <div class="footer-section">
            <h2>Contact Us</h2>
            <p>Email: bazaarblend@gmail.com</p>
            <p>Phone: +91 8849567240</p>
          </div>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: white;
    margin-bottom: 0%;
  }
  
  .about{
    text-decoration: none;
    color: white;
    
    
  }
  .container{
    width: 1200px;
    display: flex;
    justify-content: space-evenly;
  }
  
  .footer-section {
    flex: 0;
    margin: 5px 0;
  }
  
  .footer h3 {
    font-size: 15px;
    margin-bottom: 10px;
  }
  
  .footer p {
    font-size: 16px;
    margin: 5px 0;
  }
  @media only screen and (max-width: 768px) {
    .container{
        width:96%;
        display: flex;
        /* flex-direction: column; */
        flex-wrap: wrap;
        align-content: center;
    }
    .footer-section {
    margin: 5px 10px;
  }
  }
 
  </style>
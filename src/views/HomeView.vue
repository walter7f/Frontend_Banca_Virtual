<template>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <img src="../assets/email.png" alt="" width="150" height="50" class="d-inline-block">
          <h1 class="mynav">Banking Send</h1>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <!-- <router-link class="nav-link active" to="/about" @click="mov">About</router-link>-->
                <a @click="mostrarTemplate1" class="nav-link">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="mostrarTemplate2">LogIn</a>
                
                <!-- <button @click="mostrarTemplate2" class="nav-link">Mostrar Template 2</button>-->
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="mostrarTemplate3">Register</a>
                
                <!-- <button @click="mostrarTemplate2" class="nav-link">Mostrar Template 2</button>-->
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div v-if="mov === 1">
        <div class="home">
        <img alt="Vue logo" src="../assets/banking.jpg" class="logo">
        <HelloWorld msg="Bienvenido a tu Banking UMG"/>
        </div>
      </div>

      <div v-if="mov === 2">
        <div class="home">
        <!--<img alt="Vue logo" src="../assets/logo.png">-->
        <About1/>
        </div>
      </div>

      <div v-if="mov === 3">
        <div class="home">
        <!--<img alt="Vue logo" src="../assets/logo.png">-->
        <About2/>
        </div>
      </div>


  <footer>
    <p>&copy; Copyright 2023 - Grupo #05</p>
  </footer>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import About1 from '@/components/About1.vue'
import About2 from '@/components/About2.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    About1,
    About2
  },
  data() {
    return {
      mov: 1,
    };
  },
  methods: {
    mostrarTemplate1() {
      this.mov = 1;
    },
    mostrarTemplate2() {
      this.mov = 2;
    },
    mostrarTemplate3() {
    this.mov = 3;
    },
  }
}
</script>
<style>

  .logo{
    width: 600px;
    height: 270px;
    padding: 2rem;
  }

  .mynav{
    padding-left: 20px;
    color: white;
    font-weight: bold;
    padding-right: 38rem;
  }
  .opti{
    text-align: right;
    padding-inline-end: 10px;
  }
  footer {
      background-color: #333;
      color: #fff;
      text-align: center;
      padding: 6px;
      position: fixed;
      bottom: 0;
      width: 100%;
    }

.nav-link{
  cursor: pointer;
  font-style: oblique;
  font-weight: 500 ;
  font-size: 20px;
  color: snow;
}

</style>

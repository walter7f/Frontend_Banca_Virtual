<template>

<nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <img src="../assets/email.png" alt="" width="100" height="40" class="d-inline">
          <h1 class="mynavs">Banking Send</h1>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
</nav>

<div v-if="mov === 1">
        <div class="homes">
        <!--<img alt="Vue logo" src="../assets/logo.png">-->
        <About3/>
        </div>
      </div>
</template>

<style>

.mynavs{
  text-align: center;
  font-size: larger;
  font-weight: 1200;
  color: aliceblue;
}

.d-inline{
  text-align: center;
}

</style>

<script>
// @ is an alias to /src
import About3 from '@/components/About3.vue'


export default {
  name: 'HomeView',
  components: {
    About3
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
  }
}
</script>

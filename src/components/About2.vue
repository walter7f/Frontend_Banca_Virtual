<template>

        <div>
            <img alt="Vue logo" src="../assets/cartas.png" class="logos" width="300px" height="100px">
        </div>

     <div class="cont1" >
        <div class="information">
            <div class="info-childs">
                <h2>Banca en Linea</h2>
            </div>
        </div>
        <div class="form-place">
            <div class="form-place2">
                <!-- <p>Usa tu correo para registrarte</p> -->
                <form class="form" @submit.prevent="register" >
                    <label>
                        <i class='bx bx-user-check'></i>
                        <input type="text" 
                        name="name"
                        id="name"
                        v-model="name"
                        placeholder="Nombre de usuario">

                    </label>
                    <label>
                        <i class='bx bx-user-check'></i>
                        <input type="email"
                        v-model="email"
                        id="email"
                         placeholder="Ingresa tu @ correo">
                    </label>
                    <label>
                        <i class='bx bx-envelope' ></i>
                        <input type="text"
                        v-model="country"
                        id="country"
                         placeholder="De que cuidad eres?">
                    </label>
                    <label>
                        <i class='bx bx-lock'></i>
                        <input type="password"
                        v-model="password"
                        id="password"
                        placeholder="ingresa tu contraseña">
                    </label>
                    <div v-if="error" class="alert alert-danger" role="alert">
              {{ error }}
            </div>

                    <!-- Button trigger modal -->
<button type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Registrarse
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Banking send</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h1>Bienvenido {{ name }}</h1>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Entendido</button>
      </div>
    </div>
  </div>
</div>
                        

                    
                
                </form>
            </div>
        </div>
    </div>  

    


</template>

<script>
import auth from "@/store/auth.js"
export default {
  name: 'About2',
  data:()=>({
    name:"",
    email:"",
    password:"",
    country: "",
    error:null,
  }),
  methods:{
    async register(){
        try {
            await auth.createUser(this.name,this.email,this.password,this.country);

            if (this.error==null){
                await auth.register(this.email,this.password);
            }

            setTimeout(() => {
                        this.$nextTick(() => {
                    this.$router.push('/about');
                });
                }, 1000);
            
        } catch (error) {
            this.error="Error al crear usuario"
            
        }
    }
  }
}
</script>

<style>
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    }

    /* .cont1{
        padding: 2em;
    } */

    .form label{
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    border-radius: 20px;
    padding: 0 10px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0,0,0,.1);
}

.form label input{
    width: 100%;
    padding: 10px;
    background-color: #fff;
    border: none;
    outline: none;
    border-radius: 20px;
    color: #333;
}

.form label i {
    color: #a7a7a7;;
}

.form input[type="submit"]{
    background-color: #9191db;
    color: "#fff";
    border-radius: 30px;
    border: none;
    padding: 10px 25px;
    cursor: pointer;
    margin-top: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
}

.form input[type="submit"]:hover{
    background-color: #7a7a9a;
}

.form-place {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	text-align: center;
	border-top-right-radius: 20px;
	border-bottom-right-radius: 5rem;
}

.form-place2{
    padding: 10px 40px;
}
</style>
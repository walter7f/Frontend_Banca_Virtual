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
                <form class="form">
                    <label>
                        <i class='bx bx-user-check'></i>
                        <input type="text" placeholder="Correo Electrónico">
                    </label>
                    <label>
                        <i class='bx bx-user-check'></i>
                        <input type="text" placeholder="Nombre de usuario">
                    </label>
                    <label>
                        <i class='bx bx-envelope' ></i>
                        <input type="email" placeholder="Correo electronico">
                    </label>
                    <label>
                        <i class='bx bx-lock'></i>
                        <input type="password" placeholder="Contraseña">
                    </label>

                    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
        Cuenta Creada
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
export default {
  name: 'About2',
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
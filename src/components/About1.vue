<template>

    <div class="cs1">
        <div>
        <img alt="Vue logo" src="../assets/cartas.png" class="logos" width="300px" height="100px" >
        </div>

        <div class="cont1" >
            <h1>Inicio de Sesión</h1>
            <form class="formas">
                <label>
                    <i class='bx bx-envelope' ></i>
                    <input type="email" placeholder="Correo electronico">
                </label>
                <label>
                    <i class='bx bx-lock'></i>
                    <input type="password" placeholder="Contraseña">
                </label>
                <button type="button"  class="btn-primary"><router-link to="/about">Ingresar</router-link></button>
            </form>

            <br>
        </div>  
    </div>
</template>

<script>
export default {
name: 'About1',
}
</script>

<style>

.cs1{
    padding: 3em;
}

*{
margin: 0;
padding: 0;
box-sizing: border-box;
text-decoration: none;
list-style: none;
}


.formas label{
display: flex;
align-items: center;
margin-bottom: 25px;
border-radius: 20px;
padding: 1px 10px;
background-color: #fff;
box-shadow: 0 2px 5px rgba(0,0,0,.1);
}

.formas label input{
width: 40%;
padding: 10px;
background-color: #fff;
border: none;
outline: none;
border-radius: 40px;
color: #333;
}

.formas label i {
color: #a7a7a7;;
}

.formas input[type="submit"]{
background-color: #9191db;
color: "#fff";
border-radius: 30px;
border: none;
padding: 5px 25px;
cursor: pointer;
margin-top: 20px;
box-shadow: 0 2px 10px rgba(0, 0, 0, .1);
}

.formas input[type="submit"]:hover{
background-color: #7a7a9a;
}

.btn-primary{
    background-color: #9191db;
color: "#fff";
border-radius: 30px;
border: none;
padding: 5px 25px;
cursor: pointer;
margin-top: 20px;
box-shadow: 0 2px 10px rgba(0, 0, 0, .1);
}

.btn-primary input[type="submit"]:hover{
background-color: #7a7a9a;
}

</style>
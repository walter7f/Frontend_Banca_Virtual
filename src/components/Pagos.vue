<template>

<div class="home">

    <header class="head">
            <h1 class="nombre">Pagos</h1>
            <h4>Realiza aqui tus pagos</h4>
        </header>
    
<div class="container2">

        <p class="parraf">Cuenta a debitar</p>
        <select name="debito" id="debitar">
            <optgroup label="Debitar de">
                <option value="monetaria">Cuenta monetaria</option>
                <option value="ahorro">Cuenta de ahorro</option>
                <option value="debito">Tarjeta de Debito</option>
                <option value="credito">Tarjeta de Credito</option>
            </optgroup>
        </select>
</div>

<br>

<div class="container2">
    <p class="parraf">Tarjeta a pagar</p>
    <select name="pago" id="pagar">
        <optgroup label="Pago hacia">
            <option value="tdebito">Juan Gomez (Tarjeta de Debito)</option>
            <option value="tclasica">Juan Gomez (Tarjeta de credito clasica)</option>
            <option value="tpremium">Juan Gomez (Tarjeta de credito Premium)</option>
            <option value="tgold">Juan Gomez (Tarjeta de credito Gold)</option>
        </optgroup>
    </select>
</div>

<br>

<div class="container3">
    <p class="parraf">Selecciona la moneda a pagar</p>
    
    <form>
        <input type="checkbox" name="quetzales" id="quetz" value="moneda1">
        <label for="veg1">Quetzales</label>
        <input form="myForm" type="checkbox" name="dolares" id="dola"  value="moneda2"> 
        <label for="veg2">Dolares</label>
        <!-- <input form="myForm" type="checkbox" name="euros" id="eurs"  value="moneda3"> 
        <label for="veg3">Euros</label> -->
        </form>
        <br>
        <button class="my-button">Pagar</button>

</div>

</div>

</template>
<script>
export default{
    name:'Pagos'
}
</script>

<style>
    .home{
    background-color: white;
    margin-left: 10%;
    margin-right: 10%;
    height: 36rem;
    border-radius: 10px;

}

.my-button{
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

input[type=checkbox]{
margin:10px;
}

.parraf{
    padding: 6px 10px;
    border: rgb(152, 163, 0) 5px solid;
    border-radius: 10px;
    margin-left: 20em;
    margin-right: 20em;
    text-align: left;
    display: flex;
    font-weight: 600;
    font-size: medium;
}

/* .container2{
    appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
}

.container2 select::-ms-expand {
    display: none;
} */
 
.container2 select{
	display:flexbox;
	width: 40%;
	cursor: pointer;
  	padding: 7px 10px;
  	height: 40px;
  	outline: 0; 
  	border: 0;
	border-radius: 0;
	background: #f0f0f0;
	color: #131212;
	font-size: 1em;
	color: #020202;
	font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
	border:2px solid rgba(0,0,0,0.2);
    border-radius: 12px;
    position: relative;
    transition: all 0.25s ease;
    text-align: left;
}
 


</style>


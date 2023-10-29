<template>
    <div class="containers">

        <div>
            <form class="row g-2">
                <h3>Transaccion</h3>

                <div class="cold1">
                    <label>No. de cuenta</label>
                    <input type="text" placeholder="No. Cuenta">
                </div>
                


                        <div class="form-group">
                            <label for="">Monto</label>
                            <input type="text" name="Monto" id="Monto" placeholder="Monto">
                        </div>
                        <div class="form-group">
                            <label for="">Descripcion P</label>
                            <input type="text" name="precio" id="Descripcion" placeholder="Descripcion">
                        </div>
      
                        <div class="form-group">
                            <input type="button" value="Registrar" id="registrar" class="btn btn-primary btn-block">
                        </div>
                           <!-- </form> -->
            </form>
        </div>

           
    </div>
   
   </template>
   <script>
   export default{
       name:'Transaccion'
   }
   </script>

<style>
.containers{
    background-color: white;
    width: 50%;
    margin-left: 20em;
    margin-right: 20em;
    height: 21rem;
    border-radius: 10px;
}



</style>


   

<div style="display: flex; justify-content: space-between; padding-right: 10rem; padding-left: 10rem;"> 
        <div style="margin-top: 2.5rem;">
            <div class="credit-card">
                <div class="credit-card-header">
                <h1>Nombre del Titular</h1>
                </div>
                <div class="credit-card-number">
                **** **** **** 1234
                </div>
                <div class="credit-card-info">
                <p>Fecha de Expiración: 12/24</p>
                <p>CVC: 123</p>
                </div>
                <div class="credit-card-logo">
                <img src="../assets/umg.png" alt="Logo de la tarjeta">
                </div>
            </div>
        </div>

        <div style="margin-top: 2.5rem;">
            <div class="credit-card2">
                <div class="credit-card-header2">
                <h1>Gestiones de targeta    </h1>
                </div>
                <div class="credit-card-number">
                <h3>Monto Autorizado: 5,0000.00</h3>
                </div>
                <div class="credit-card-info">
                <p>Creadito disponile: Q4000.00</p>
                <p></p>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 10px 10px 10px 10px;">
                    <button class="btn btn-success">Pagar Targeta</button>
                    <button class="btn btn-danger">Cancelar targeta</button>

                </div>
                <div class="credit-card-logo">
                </div>
            </div>

        </div>
</div>
</template>
<script>
export default{
    name:'Transacciones'
}
</script>

<style>
    .credit-card {
    background: url('../assets/card.avif') center center no-repeat, rgb(35, 34, 34);
      border-radius: 15px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      width: 500px;
      color: antiquewhite;
      height: 17rem;
    }
    .credit-card2 {
      background-color: rgb(219, 211, 195);
      border-radius: 15px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      width: 500px;
      color: rgb(52, 47, 41);
      height: 17rem;
    }

    .credit-card-header {
      color: #fff;
      padding: 15px;
      text-align: center;
    }
    .credit-card-header2 {
        background-color: rgb(45, 40, 40);
      color: #fff;
      padding: 15px;
      text-align: center;
    }

    .credit-card-number {
      font-size: 18px;
      padding: 15px;
      text-align: center;
      letter-spacing: 3px;
    }

    .credit-card-info {
      display: flex;
      justify-content: space-between;
      padding: 15px;
    }

    .credit-card-info p {
      margin: 0;
    }

    .credit-card-logo {
      display: flex;
      justify-content: flex-end;
      padding: 15px;
    }

    .credit-card-logo img {
      width: 40px;
      height: auto;
    }
</style>

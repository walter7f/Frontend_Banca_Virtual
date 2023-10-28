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


   

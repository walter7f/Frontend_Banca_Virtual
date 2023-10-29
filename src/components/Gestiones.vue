<template>
    <div>
        <div>
            <div class="sidebar">
            <li class="gest btn-primary"><a @click="Template_1">SOLICITAR NUEVA CUENTA</a></li>
            <li class="gest btn-primary"><a @click="Template_2">SOLICITAR NUEVA TARGEJA</a></li>
            <li class="gest btn-primary"><a @click="Template_3">TRANSFERENCIAS A TERCEROS</a></li>
            <li class="gest btn-primary"><a @click="Template_4">NUESTRAS INSTALACIONES</a></li>

            </div>
            <div class="gestion">
                    <div v-if="mov === 1">
                        <div  >
                        <SolicitudTargeta/>
                        </div>
                    </div>

                    <div v-if="mov === 2">
                        <div >
                        <AculizacionCuenta/>
                    
                        </div>
                    </div>

                    <div v-if="mov === 3">
                        <div>
                        <Terceros/>
                        </div>
                    </div>
                    <div v-if="mov === 4">
                        <div>
                    
                        <Instalaciones/>
                        </div>
                    </div>


            </div>
        </div>
    </div>

</template>

<script>
import SolicitudTargeta from '@/views/SolicitudTargeta.vue';
import Instalaciones from '@/views/Instalaciones.vue';
import AculizacionCuenta from '@/views/AculizacionCuenta.vue';
import Terceros from '@/views/Terceros.vue';

export default{
    name: 'Gestiones',
    components: { SolicitudTargeta, AculizacionCuenta, Instalaciones, Terceros },
    data(){
        return{
            mov:1
        };

    },
    methods:{
        Template_1(){
            this.mov=1;
        },
        Template_2(){
            this.mov=2;
        },
        Template_3(){
            this.mov=3;
        },
        Template_4(){
            this.mov=4;
        }
    }

}
</script>
<style>
.sidebar{
    position: absolute;
    background-color: rgb(156, 146, 146);
    width: 16rem;
    height: 80vh;
    text-align: left;
}
.gest{
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    margin-left: 7PX;
    color: black;
    cursor: pointer;

}
</style>
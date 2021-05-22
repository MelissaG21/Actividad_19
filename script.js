const app = Vue.createApp({})

app.component('foco',{
    props: ['lugar'],
    data(){
        return {
            estatus: false
        }
    },
    template:
        `<img :src="estatus ? 'fotos/focoOff.png' :  'fotos/focoOn.png'" 
            @click=" estatus = !estatus ">
            <p>{{lugar}}</p>`
})

const vm = app.mount('#app')
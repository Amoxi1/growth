<template>
    <div>
        
    {{person.name}}

    {{isShow?person.age:'保密'}}

    <hr>
    <Hello> 
        <div slot="up">hhh </div>xiaoli
        <div slot="down">kkk </div>
    </Hello>
    </div>
</template>

<script>
import axios from 'axios'
import Hello from './Hello'

export default {
    components:{
        Hello
    },
    data(){
        return {
          person:{
              name:undefined,
              age:undefined
          },
          isShow:false
        }
    },
    created(){
        this.getName()
    },
    methods:{
        getName(){
          axios.get('/getName').then((res)=>{
              //console.log(res)
              this.person.name = res.data.name
          }).then(()=>{
              axios.get('/getSex').then((res)=>{
                //  console.log(res)
                  return res.data
              }).then((r)=>{
                  axios.get('/getAge').then((res)=>{
                      if(r==='woman'){
                          this.isShow = false
                      }else{
                          this.person.age = res.data.age
                          this.isShow = true
                      }
                  })
              })
          })
        },
       
    }
}
</script>
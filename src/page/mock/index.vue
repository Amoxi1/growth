<template>
    <div>
    {{person.name}}

    {{isShow?person.age:'保密'}}
    </div>
</template>

<script>
import axios from 'axios'

export default {
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
              console.log(res)
              this.person.name = res.data.name
          }).then(()=>{
              axios.get('/getSex').then((res)=>{
                  console.log(res)
                  return res.data
              }).then((r)=>{
                  axios.get('/getAge').then((res)=>{
                      if(val==='woman'){
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
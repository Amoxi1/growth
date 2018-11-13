<template>
    <div>
        <h1 class="title">TodoList</h1>
        <div class="wrapper">
             <input type="text" placeholder="请输入待办事项" @keyup.enter="additions" v-model="msg"/>
             <button @click="additions">
                 提交
             </button>
        </div>
        <List :todos="todos">
        </List>
       
    </div>
</template>
<script>
import List from './list'
import store from './store.js'
export default {
    components:{
        List
    },
    created(){
        // this.getTodoList()
    },
    data(){
        return {
            todos:store.fetch(),
            msg:undefined,
            nowTime:undefined
        }
    },
    watch:{
        todos:{
            handler:function(todos){
               store.save(todos)
            },
            deep:true
        }
    },
    methods:{
        // getTodoList(){
        //     this.todos=JSON.parse(window.localStorage.getItem('todos'))||[]
        //     console.log(this.todos)
        // },
        additions(){
            if(this.msg){
                this.todos.push({title:this.msg,isFinished:false})
                //window.localStorage.setItem('todos',JSON.stringify(this.todos))
                this.msg=''
            }else{
                alert('输入不可为空')
            }         
        },
        getNowTime(){
            this.nowTime = new Date().getSeconds()
        }
    }
}
</script>
<style>
    .title{
        width: 100%;
        height:50px;
        line-height:50px;
        text-align: center;
    }
    .wrapper{
        width: 80%;
        height:32px;
        line-height: 32px;
        padding: 10px;
        margin: 10px auto;
    }
    .wrapper input[type=text]{
        float: left;
        width: 400px;
        height: 28px;
        line-height:28px;
    }
    .wrapper button{
        float: right;
        width: 60px;
        height:30px;
        line-height: 30px;
    }
    .wrapper_list{
        width: 80%;
        height:auto;
        margin:0 auto;
    }
    .wrapper_list li{
        width: 100%;
        height:30px;
        line-height: 30px;
    }
    .wrapper_list li.fisish{
        color:darkgrey;
        text-decoration:line-through
    }
    .wrapper_list li button{
        float: right;
    }
    .wrapper_list li.show{
        display: none;
    }
</style>



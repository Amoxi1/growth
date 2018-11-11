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
export default {
    components:{
        List
    },
    data(){
        return {
            todos:[{title:"帮媳妇洗衣服",isFinished:false}],
            done:[],
            msg:undefined,
           
        }
    },
    methods:{
        additions(){
            if(this.msg){
                this.todos.push({title:this.msg,isFinished:false})
                this.msg=''
            }else{
                alert('输入不可为空')
            }         
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



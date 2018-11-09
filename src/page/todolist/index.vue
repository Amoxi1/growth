<template>
    <div>
        <h1 class="title">TodoList</h1>
        <div class="wrapper">
             <input type="text" placeholder="请输入待办事项" @keyup.enter="additions" v-model="msg"/>
             <button @click="additions">
                 提交
             </button>
        </div>
        <ul class="wrapper_list">
            <li v-for="(item,idx) in todos" :key="idx" 
                :class="{fisish:item.isFinished,show:item.isShow}" >{{item.title}}
                <button @click="changeState(idx)">完成</button>
                <button @click="deleteSingle(idx)">删除</button>
                <button  @click="changeData(idx)">修改</button>
            </li>
        </ul>
        <el-dialog
        :visible.sync="totast"
        width="30%">
            <el-form>
                <el-form-item label="修改内容">
                    <el-input v-model="msgToEdit.title"></el-input>
                </el-form-item>
                <el-button type="primary" @click="totast = false">确 定</el-button>
                <el-button @click="totast = false">取 消</el-button>
            </el-form>
       </el-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return {
            todos:[],
            done:[],
            msg:undefined,
            totast:false,
            msgToEdit:{}
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
        },
        changeData(index){
            this.totast = true  
            this.msgToEdit=this.todos[index]
            console.log(this.msgToEdit)
        },
        changeState(index){
            this.todos[index].isFinished = !this.todos[index].isFinished
        },
        deleteSingle(index){
            this.$set(this.todos[index],'title','')
            this.$set(this.todos[index],'isShow',true)
            this.msg=''
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



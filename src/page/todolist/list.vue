<template>
    <div>
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
            totast:false,
            msgToEdit:{}
        }
    },
    props:["todos"],
    methods:{
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


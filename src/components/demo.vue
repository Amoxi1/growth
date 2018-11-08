<template>
    <div>
        <div>
            <input type="text" v-model="todoValue"/>
            <button @click="cliskSubmit">提交</button>
            <ul v-for='(item,idx) in todo_items' :key="idx">
                <li>
                   <span>内容{{item}}</span>
                   <button @click="changeData">修改</button>
                   <button class="delete" @click="deleteData">删除</button>
                </li>
            </ul>
        </div>
    </div>
</template>
<style>

</style>

<script>
const defaultItems = [
    '起床学习',
    '刷牙'
];
export default {
  name: 'demo',
  data(){
      return {
          todo_items:[...defaultItems],
          todoValue:""
      }
  },
  methods:{
      cliskSubmit:function(){
          if(!this.todoValue){
              alert("未输入")
              return;
          }
          this.todo_items.push(this.todoValue)
          this.todoValue=""
      },
      changeData:function(idx){
          if(!this.todoValue){
              alert("请输入修改内容")
          } 
          this.todo_items.splice(idx,1,this.todoValue)
      },
      deleteData:function(idx){
          this.todo_items.splice(idx,1)
      }
  }
}


</script>

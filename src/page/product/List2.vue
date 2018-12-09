<template>
    <div>
        <el-table
            

            :data='tableTeader'
            style="width: 100%">
            <el-table-column
                v-for="(item,idx) in arr"
                :prop="item.name"
                :label="item.header"
                width="180"
                :key="idx">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            tableTeader:[],
            arr:[
                
            ]
        }
    },
    created(){
        this.getData()
    },
    methods:{
        getData(){
            axios.get('/getCommodity').then((res)=>{
                this.tableTeader = res.data
                this.arr=this.tableTeader.map(item)
                console.log(this.tableTeader)
            })
        }
    }
}
</script>

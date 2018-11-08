<template>
   <div>
       <h1>商品列表 </h1>
       <el-table
            :data="tableData"
            border 
            style="width: 100%">
           <el-table-column
                prop="title"
                label="商品名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="price"
                label="商品价格"
                width="180">
            </el-table-column>
            <el-table-column
                label="元"
                width="100"
            >   
                <template slot-scope="scope">
                     {{ scope.row.price/100 }} 元
                </template>
            </el-table-column>
            <el-table-column
                prop="num"
                label="商品数量"
                width="180">
            </el-table-column>
            <el-table-column
                label="操作"
                >
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" size="small">查看</el-button>
                    <el-button size="small" @click="editGoods(scope.row)">编辑</el-button>
                </template>
            </el-table-column>
       </el-table>

       <el-dialog
        :visible.sync="dialogVisible"
        width="30%">
            <div class="singleInfo">
                <div>商品名称
                <p>{{currentData.title}}</p> 
                </div>
                <div>商品数量
                <p>{{currentData.num}}</p> 
                </div>
                <div>商品价格
                <p>{{currentData.price}} </p> 
                </div>
            </div>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            <el-button @click="dialogVisible = false">取 消</el-button>
       </el-dialog>
       <el-dialog
        :visible.sync="editGoodsDialogVisible"
        width="30%">
            <el-form>
                <el-form-item label="修改商品名">
                    <el-input v-model="currentData.title"></el-input>
                </el-form-item>
                <el-form-item label="修改价格">
                    <el-input v-model="currentData.price"></el-input>
                </el-form-item>
                <el-button type="primary" @click="editGoodsDialogVisible = false">确 定</el-button>
                <el-button @click="editGoodsDialogVisible = false">取 消</el-button>
            </el-form>
       </el-dialog>
   </div>
</template>
<script>
    import axios from 'axios'
    export default{
        data(){
            return {
                tableData:[],
                dialogVisible: false,
                editGoodsDialogVisible:false,
                currentData:{}
            }
        },
        created(){
            this.getTableDate()
        },
        methods:{
            getTableDate(){
                axios.get('/getCommodity').then((res)=>{
                    this.tableData = res.data
                })
            },
            handleClick(row) {
                this.dialogVisible = true
                this.currentData = row
                console.log(this.currentData)
            },
            editGoods(row){
                console.log(row)
                this.editGoodsDialogVisible = true
                this.currentData = row
            }
        }
    }
</script>
<style scoped>
    h1{text-align: center;}
    .singleInfo div{margin-bottom: 10px;}

</style>

<template>
    <div>
        <el-form class="demo-ruleForm" label-width="100px">
             <el-form-item label="用户名" prop="name">
                <el-input style="width:200px" v-model="name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input style="width:200px" type="password" v-model="pass"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                name:undefined,
                pass:undefined
            }
        },
        created(){
            document.cookie = "slogen=你大爷"
        },
        methods:{
            login(){
                const uid= this.name + this.pass
                document.cookie = "uid="+uid
            }
        }
    }
</script>


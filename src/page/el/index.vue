<template>
    <div>
        <el-form :model="fruit">
             <el-form-item label="活动名称">
                <el-input v-model="fruit.name"></el-input>
            </el-form-item>
            <el-form-item label="选项">
                <el-select v-model="fruit.color" @change="showSex">
                    <el-option label="红色" value="red"></el-option>
                    <el-option label="绿色" value="green"></el-option>
                </el-select>
            </el-form-item>
             <el-form-item label="性别" v-if="isShow">
                <el-radio-group v-model="fruit.sex">
                <el-radio label="man">男</el-radio>
                <el-radio label="woman">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="选择时间" v-if="fruit['master']!=='xiaoli'">
                <el-time-select
                    v-model="fruit.time"
                    :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30'
                    }"
                    placeholder="选择时间">
                </el-time-select>
            </el-form-item>
            <el-button type="primary" @click="submitData">
                提交
            </el-button>
        </el-form>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                fruit:{
                    master:'xiaoli',
                    name:undefined,
                    size:undefined,
                    time:undefined
                },
                isShow:false,
            }
        },
        methods:{
            submitData(){
                //console.log(this.fruit)
            },
            showSex(val){
                if(val === "red"){
                    this.isShow = true;
                }else{
                    this.isShow = false;
                }
                
            }
        }
    }
</script>

<template>
    <div class="shop">
        <h1>购物车</h1>
        <ul class="shopList">
            <li v-for="(item,idx) in goodsList" :key="idx">
                <input type="checkbox" v-model="item.isSelect"/>
                <div class="name">商品名称：{{item.title}}</div>
                <div class="price">商品价格：{{item.price | capitalize}}</div>
                <div class="num">购买数量：<span class="reduce" @click="clickReduce(idx)">-</span><input type="text" v-model="item.num" @keyup="inputNum(idx)"><span class="add" @click="clickAdd(idx)">+</span></div>
                <div>小计：<span>{{item.num * item.price | capitalize}}</span></div>
            </li>
        </ul>
        <div class="count">
            全选：<input class="select_all" type="checkbox" @click="selectAll"/>
            总价：<span>{{totalPrice}}</span>
            <router-link :to="'/confirm/'+totalPrice+'/'+totalCount">
                <button>
                    结算
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    
    export default {
        data(){
            return{
                goodsList:{},
                totalPrice:undefined,
                totalCount:0
            }
        },
        filters:{
            capitalize:function(val){
                return val/100;
            }
        },
        created(){
            this.getList()
        },
        watch:{
            goodsList:{
                handler:function(value,oldValue){
                    //console.log(value)
                    //console.log(oldValue)
                    let sumPrice=0;
                    let sumNum=0;
                    let singlePrice=0;
                    for(let i=0;i<value.length;i++){
                        if(value[i].isSelect){
                            singlePrice = value[i].price/100*value[i].num
                            sumPrice = sumPrice + singlePrice
                            sumNum +=value[i].num    
                        }
                    }
                    this.totalPrice = sumPrice;
                    this.totalCount = sumNum;
                },
                deep:true,
                immediate:true
            }
        },
        methods:{
            getList(){
                axios.get('/getCommodity').then((res)=>{
                    var response = res.data
                    this.goodsList = response
                    //console.log(this.goodsList)
                    return response
                })
            },
            clickReduce(idx){
                if(this.goodsList[idx].num<=1){
                    return false;
                }else{
                    this.goodsList[idx].num--;
                }
            },
            clickAdd(idx){
                this.goodsList[idx].num ++;
            },
            inputNum(idx){
                this.goodsList[idx].num = this.goodsList[idx].num.replace(/[^1-9]/g,'')
            },
            selectAll(){
                for(var i in this.goodsList){
                    console.log(this.goodsList[i])
                    this.$set(this.goodsList[i],'isSelect',true)
                    
                }
            }
            

        }
        
    }
</script>
<style  lang="scss" scoped>
.shop{
    width:100%;
    height: 300px;
    .shopList{
        float: left;
        margin-bottom: 40px;
        li{
            float: left;
            width: 100%;
            height: 30px;
            line-height: 30px;
            input[type=checkbox]{
                float: left;
                width: 15px;
                height:15px;
                position: relative;
                top: 8px;
                margin-right: 20px;
            }
            div{
                float: left;
            }
            div.name{
                width:255px;
            }
            div.price{
                width:150px;
            }
            div.num{
                float: right;
                span{
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    text-align: center;
                    line-height: 20px;
                    border: 1px #888 solid;
                    cursor: pointer;
                }
                span:nth-child(1){
                    border-right:none; 
                }
                span:nth-child(3){
                    border-left:none; 
                }
                input[type=text]{
                    width: 80px;
                    height: 18px;
                    text-align: center;
                    line-height: 18px;
                    position: relative;
                    top: -2px;
                }
            }
        }
    }
    .count{
        float: left;
        width: 100%;
        height: 40px;
        .select_all{
            margin-right: 20px;
        }
        button{
            float: right;
            width:80px;
            height:30px;
        }
    }
}
    
</style>

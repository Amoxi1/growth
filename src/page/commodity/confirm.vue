<template>
    <div>
        现在的总价格是<div>{{totalPrice}}</div>        
        现在的总购买数是<div>{{totalCount}}</div>
        <router-link to="/goods">回到购物车 </router-link>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                totalPrice:0,
                totalCount:0
            }
        },
      mounted(){
          console.log(this.$router)
          console.log(this.$route)
            this.totalPrice=this.$route.params.totalPrice
            this.totalCount=this.$route.params.totalCount

      }  
    }
</script>

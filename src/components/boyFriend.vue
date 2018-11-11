<template>
    <div>
        <ul>
            <li>{{boyFriend.name}}</li>
             <li>{{boyFriend.age}}</li>
              <li>{{boyFriend.sex}}</li>
              <li>{{text}}</li>
        </ul>
       <input type="number" v-model.number="boyFriend.age">
       <button @click="becomeFriend" class="btn--big">
           男朋友变朋友{{nowMonth()}}
       </button>
    </div>
</template>
<style scoped>
    .btn--big{
        width: 200px;
        height:30px;
        background: blueviolet;
    }
</style>

<script>
    import nowMonth,{getNowWeek,text} from "./test.js"
    export default{
        data(){
            return {text}
        },
        name:"boyFriend",
        props:['boyFriend'],
        methods:{
            nowMonth,
            getNowWeek,
            becomeFriend(){
                this.$emit("statusChange",{...this.boyFriend,name:'chaochao'})
            }
        }
    }
</script>

<template>
    <div>
        <div :id="personId" style="color:red" v-bind:class="{big:isBig}">
            {{personInfo}}
        </div>
        <button @click="showAge" class="btn--big">显示年龄</button>
        <button @click="hiddenAge">不显示年龄</button>
         <button @click="greet">   
            修改显示{{getNowWeek()}}
        </button>
        <ul>
            <li v-for="(friend,idx) in friends" :key="idx" @click="upsertFriendName(idx)">{{friend.name}}</li>
        </ul>
        <boyFriend @statusChange="upsertFriend" :boyFriend="boyFriendValue"> </boyFriend>  
    </div>
</template>
<style>
    .big{font-size: 20px;}
    .btn--big{width: 100px;height:30px;}
</style>

<script>
    import boyFriend from "./boyFriend.vue"
    import {getNowWeek}  from "./test.js"
    export default{
        name:"test",
        components:{
            boyFriend
        },
        data(){
            return {
                name:"li",
                age:18,
                isAgeShow:true,
                personId:'li',
                isBig:true,
                friends:[
                    {"id":0,"name":"hhh","age":19},
                    {"id":1,"name":"bbb","age":15},
                    {"id":2,"name":"aaa","age":14},
                ],
                boyFriendValue:{
                    name:'sc',
                    age:18,
                    sex:'girl'
                }
            }
        },
        computed:{
            personInfo(){
                if(this.isAgeShow){
                    return "name="+this.name+",age="+this.age
                }else{
                    return "name="+this.name
                }
            }
        },

        mounted(){
        
        
            },
        methods:{
            getNowWeek,
            
            showAge(){
                this.isAgeShow = true
                this.isBig = true
            },
            hiddenAge(){
                this.isAgeShow = false
                this.isBig = false
            },
                greet(){
                    this.isAgeShow = !this.isAgeShow
                },
            upsertFriendName(idx) {
                console.log(this.friends[idx])
                   this.$set(this.friends,idx,{"name":"kkk","age":19})
                console.log('idx',this.friends)
            },
            upsertFriend(boy){
                
                this.friends.push(boy)
                this.boyFriendValue={}
                console.log(boy)
            }

        }
    }
</script>
import Mock from 'mockjs'

Mock.setup({
    timeout: '200-700'
})
Mock.mock('/getName', ()=>{
    return {
        name:'xiaoli'
    }
} )

Mock.mock('/getAge',()=>{
    return {
        age:'18'
    }
})
Mock.mock('/getSex',()=>{
    return Math.random()>0.5?'man':'woman'
})
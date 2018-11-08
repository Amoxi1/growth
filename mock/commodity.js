import Mock from 'mockjs'
Mock.setup({
    timeout: '200-600'
})
Mock.mock('/getCommodity', ()=>{
    return [
        {
            title:'阿迪达斯官方篮球鞋',
            price:'24000',
            num:1,
        },
        {
            title:'变形金刚儿童削笔器',
            price:'2800',
            num:1
        },
        {
            title:'澳洲进口洗发水',
            price:'7900',
            num:1
        },
        {
            title:'优衣库男装横条T恤',
            price:'797',
            num:1
        }
    ]
} )

let title = "租客"
let web = "gpt.zukedog.cn"

/*
let getWeb = () => {
    return "blog.zukedog.cn"
}
*/
let getWeb = () => "blog.zukedog.cn"

//方式一：将多个变量或函数分别导出
//export {title, web, getWeb}


//方式二：将一个对象作为整体导出, 导出的对象包含 title、web、getWeb 三个属性
export default {title, web, getWeb}


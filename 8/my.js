function next(elem){
    do{
        elem = elem.nextSibling;
    }while(elem && elem.nodeType !=1);
    return elem;
}
function calcAngleArea() {
    //使用function关键字声明一个函数，接着是函数的名称，函数名称必须符合变量的命名规范
    //花括号用来表示一段代码块
    var wide = window.prompt("请输入三角形的底边长度！", "");
    var high = window.prompt("请输入三角形的高！", "");
    var area = wide * high / 2;
    if (isNaN(area)) {
        alert("您的输入有误!");
    } else {
        alert("三角形的面积为" + area);
    }
}
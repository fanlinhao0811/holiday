function next(elem){
    do{
        elem = elem.nextSibling;
    }while(elem && elem.nodeType !=1);
    return elem;
}
function calcAngleArea() {
    //ʹ��function�ؼ�������һ�������������Ǻ��������ƣ��������Ʊ�����ϱ����������淶
    //������������ʾһ�δ����
    var wide = window.prompt("�����������εĵױ߳��ȣ�", "");
    var high = window.prompt("�����������εĸߣ�", "");
    var area = wide * high / 2;
    if (isNaN(area)) {
        alert("������������!");
    } else {
        alert("�����ε����Ϊ" + area);
    }
}
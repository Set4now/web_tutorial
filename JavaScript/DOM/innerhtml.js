function changeMe(){
    // changing the content
    paras = document.getElementsByTagName("p");
    paras[0].innerHTML = "This iS new text";

}

// combinging the two paras and generating a new one p3

function changeMe(){
    var paras = document.getElementsByTagName("p");
    var para1 = paras[0].innerHTML;
    var para2 = paras[1].innerHTML;
    var para3 = paras[2].innerHTML = para1 + para2;
}
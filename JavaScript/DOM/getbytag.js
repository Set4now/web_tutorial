function changeMe(){

    var paragraphs = document.getElementsByTagName("p");
    // var changepara = paragraphs[0].style.color = "red";
    var i;
    for (i = 0; i < paragraphs.length; i++) {

         paragraphs[i].style.color = "red";
    }


}
function createmore(){
    // create new p element
    var new_element = document.createElement("p");
    // create a h1 
    var new_header = document.createElement("h1");
    // get the parent element under which this shoud be appended
    var get_parent = document.getElementById("content");
    // append the new paragraph element and h1  to parent element here it is the id=content
    get_parent.appendChild(new_header);
    get_parent.appendChild(new_element);
    // create a text node with the texts
    var h1_text = document.createTextNode("AMAZON Products");
    var text = document.createTextNode("Amazon has many products such as aws, ecommerce, prime, alexa and many more.")
    // append the text node as child to its parent that is the p that we just created at the top
    new_header.appendChild(h1_text);
    new_element.appendChild(text);
    
    

}
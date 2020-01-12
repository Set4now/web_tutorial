function bar() {
    var b = document.getElementById('progressbar');
    
    
    // for(var count = 10; count <= 100; count += 20) {
    //     b.style.width =  `${count}px`;
    // }
    
    var count = 10;
    while (count <= 100){
        b.style.width =  `${count}%`;
        b.textContent = `${count}%`;
        count += 10;
    }
    

}


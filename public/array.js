function createArray(){
    console.log("PAras")
    //var test  = document.getElementById("test").style.height = "200px"
    var container = document.getElementById("array");
    for(let i=0;i<15;i++){
        try{
            document.getElementById("Box "+i).remove();
        }catch(Ex){

        }
        var child = document.createElement("div");
        child.className = "box";
        child.id = "Box "+i;
        var height = Math.floor(Math.random()*201) + 100;
        child.innerHTML = height;
        child.style.height = height;
        container.appendChild(child);
    }
}

function sort(){
    console.log(child);
    for(let i=0;i<15;i++){
        var id1 = "Box "+id;
        var box1 = document.getElementById(id);
        var height1 = box1.style.height;
        var heightInt = height1.substring(0, height1.length()-2);

        for(let j=0;j<15;j++){
            var id2 = "Box "+id;
            var box2 = document.getElementById(id);
        }
    }
}


createArray();


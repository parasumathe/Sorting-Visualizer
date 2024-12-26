const arrSize = 50;

function createArray(){
    var container = document.getElementById("array");
    for(let i=0;i<arrSize;i++){
        try{
            document.getElementById("Box "+i).remove();
        }catch(Ex){

        }
        var child = document.createElement("div");
        child.className = "box";
        child.id = "Box "+i;
        var height = Math.floor(Math.random()*500) + 20;
        child.innerHTML = height;
        child.style.height = height;
        container.appendChild(child);
    }
}

async function bubbleSort(){
    console.log("Paras");
    document.getElementById("createArrayButton").disabled  = true;
    document.getElementById("sortArrayButton").disabled  = true;
    for(let i=0;i<arrSize;i++){

        for(let j=0;j<arrSize-1-i;j++){
            var box1Id = "Box "+j;
            var box2Id = "Box "+(j+1);
        
            var height1 = document.getElementById(box1Id).style.height;
            var hei1 = parseInt(height1.substring(0, height1.length-2));

            var height2 = document.getElementById(box2Id).style.height;
            var hei2 = parseInt(height2.substring(0, height2.length-2));
            
            if(hei1 > hei2){
                swap(box1Id, box2Id);
            }
            await sleep(10);
        }
    }
    document.getElementById("createArrayButton").disabled  = false;
    document.getElementById("sortArrayButton").disabled  = false;
}

function mergeSort(){
    mergeSortUtil();
}

function mergeSortUtil(left, right){
    if(left < right){
        var mid = left + (right - left)/2;

        mergeSortUtil(left, mid);
        mergeSortUtil(mid+1, right);

        mergeArray(left, mid, right);
    }
}


function mergeArray(left, mid, right){

}

function swap( box1Id,  box2Id){
    var box1 = document.getElementById(box1Id);
    var box2 = document.getElementById(box2Id);

    var height = box1.style.height;
    var text = box1.innerHTML;

    box1.style.height = box2.style.height;
    box1.innerHTML = box2.innerHTML;

    box2.innerHTML = text;
    box2.style.height = height;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

createArray();

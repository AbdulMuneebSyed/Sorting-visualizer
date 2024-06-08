let arr=[];
let arrsize=30;
for(let i=0;i<arrsize;i++){
    let r = Math.floor(Math.random()*100)
    arr.push(r);
}

let flag = true;
let parentDiv= document.getElementsByClassName('parent')[0];
let btn=document.getElementsByClassName('butn')[0];
let insertionBtn = document.getElementsByClassName('sortButton')[2];
let selectionBtn=document.getElementsByClassName('sortButton')[1];
let bubbleBtn=document.getElementsByClassName('sortButton')[0];
let mergebtn= document.getElementsByClassName('sortButton')[4];
let quickBtn= document.getElementsByClassName('sortButton')[3];
let i=0;
arr.forEach(ele=>{
    let innerDiv = document.createElement('div');
    innerDiv.style.height = (ele*5+'px');
    innerDiv.style.backgroundColor= `#` + ( Math.random()*0xFFFFFF<<0).toString(16).padStart(6, '0');
    // innerDiv.style.backgroundColor= 'blue';
    // innerDiv.style.border="1px white solid"
    innerDiv.style.padding=10+'px';
    innerDiv.style.width="auto";
    innerDiv.setAttribute('id', 'elem' + i);
    i++;
    innerDiv.classList.add("innerDiv");
    // innerDiv.style.borderColor('black');
    parentDiv.appendChild(innerDiv);
});


const sleep = (time)=>{
    return new Promise(resolve=> setTimeout(resolve,time));
}
selectionBtn.addEventListener("click",()=>{
    flag = true;
    selectionBtn.style.display = 'none';
    bubbleBtn.style.display = 'none';
    insertionBtn.style.display = 'none';
    quickBtn.style.display = 'none';
    mergebtn.style.display = 'none';
    btn.style.display = 'block';
    selectionSort(arr);
});
bubbleBtn.addEventListener("click", () => {
    fflag = true;
    selectionBtn.style.display = 'none';
    bubbleBtn.style.display = 'none';
    insertionBtn.style.display = 'none';
    quickBtn.style.display = 'none';
    mergebtn.style.display = 'none';
    btn.style.display = 'block';
    bubbleSort(arr);
    // Add the event listener for the start button
});
//bubble sort;
insertionBtn.addEventListener('click',() => {
    flag = true;
    selectionBtn.style.display = 'none';
    bubbleBtn.style.display = 'none';
    insertionBtn.style.display = 'none';
    quickBtn.style.display = 'none';
    mergebtn.style.display = 'none';
    btn.style.display = 'block';
    insertionsort(arr);
});
//merge sort button
mergebtn.addEventListener('click',()=>{
    flag = true;
    selectionBtn.style.display = 'none';
    bubbleBtn.style.display = 'none';
    insertionBtn.style.display = 'none';
    quickBtn.style.display = 'none';
    mergebtn.style.display = 'none';
    btn.style.display = 'block';

    quicksort(arr);
})
quickBtn.addEventListener('click',()=>{
    flag = true;
    selectionBtn.style.display = 'none';
    bubbleBtn.style.display = 'none';
    insertionBtn.style.display = 'none';
    quickBtn.style.display = 'none';
    mergebtn.style.display = 'none';
    btn.style.display = 'block';
    quicksort(arr);
});
//restart button
btn.addEventListener('click' , ()=>{
    for(let i=0;i<arrsize;i++){
        let r = Math.floor(Math.random()*100)
        arr[i] = r;
        let innerDiv = document.getElementById('elem'+ i);
        innerDiv.style.height=(arr[i]*5) + 'px';
        innerDiv.style.backgroundColor= `#` + ( Math.random()*0xFFFFFF<<0).toString(16).padStart(6, '0');
    }

    flag = true;
    selectionBtn.style.display = 'block';
    bubbleBtn.style.display = 'block';
    insertionBtn.style.display = 'block';
    quickBtn.style.display = 'block';
    mergebtn.style.display = 'block';
    btn.style.display = 'none';
    flag = false;

})
//bubble sort
async function bubbleSort(arr){
    console.log('into the bubblesort function')
    for(let i=0;i<arr.length;i++){
        
        for(let j=0;j<arr.length-1-i;j++){
            if(flag){
                let a='elem'+j;
                let b='elem'+(j+1);
                await sleep(50);
                document.getElementById(a).style.border='1px solid black';
                document.getElementById(b).style.border='1px solid black';
            if(arr[j+1]<arr[j]){
                
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                colorSwap(j,j+1);
                
            }
            await sleep(50);
            document.getElementById(a).style.border='none';
            document.getElementById(b).style.border='none';
        }
        else{
            return;
        }
        }
        console.log('i='+i);
    
   
}}
//selection sort
async function selectionSort(arr){
    console.log('selction sort');
    for(let i=0;i<arr.length-1;i++){
        let mini = i;
        for(let j=i+1;j<arr.length;j++){
            if(flag){
                console.log('i= '+ i + ' j= ' + j + ' lenght' + arr.length);
                let a='elem'+mini;
                let b='elem'+(j);
                await sleep(50);
                document.getElementById(a).style.border='1px solid black';
                document.getElementById(b).style.border='1px solid black';
                if(arr[mini]>arr[j]){
                    mini=j;
                }
            
                await sleep(50);
                document.getElementById(a).style.border='none';
                document.getElementById(b).style.border='none';
            }
            else {
                return;
            }
        }
        if(mini!=i){
            let temp=arr[i];
            arr[i]=arr[mini];
            arr[mini]=temp;
            colorSwap(mini,i);
        }
    }
}
//insertion sort
async function insertionsort(arr){
    console.log('insertion sort');
    for(let i=0;i<arr.length;i++){
        let key = arr[i];
        let j = i - 1;
        let a='elem'+i;
        await sleep(50);
        document.getElementById(a).style.border='1px solid black';
        // Move elements of arr[0..i-1],
        // that are greater than key, 
        // to one position ahead of their
        // current position
        await sleep(100);
        while (j >= 0 && arr[j] > key) {
            if(flag){
            let b = 'elem'+ j;
            document.getElementById(b).style.border = '1px solid yellow';
            arr[j + 1] = arr[j];
            colorSwap(j+1,j);    
            j = j - 1;
            await sleep(100);
            document.getElementById(b).style.border = '1px solid black';
            }
            else {
                return ;
            }
        }

        arr[j + 1] = key;
    
    }
}
async function mergesort(arr) {
    await mergeSort(arr, 0, arr.length - 1);
    
    async function merge(arr, low, mid, high) {
        let temp = []; // temporary array
        let left = low; // starting index of left half of arr
        let right = mid + 1; // starting index of right half of arr
    
        // storing elements in the temporary array in a sorted manner
        while (left <= mid && right <= high) {
            if (arr[left] <= arr[right]) {
                temp.push(arr[left]);
                left++;
            } else {
                temp.push(arr[right]);
                right++;
            }
        }
    
        // if elements on the left half are still left
        while (left <= mid) {
            temp.push(arr[left]);
            left++;
        }
    
        // if elements on the right half are still left
        while (right <= high) {
            temp.push(arr[right]);
            right++;
        }
    
        // transferring all elements from temporary to arr
        for (let i = low; i <= high; i++) {
            arr[i] = temp[i - low];
            console.log('you have reached here');
            await colorSwap(i, indexJ); // Ensure colorSwap is defined and works correctly
        }
    }
    
    async function mergeSort(arr, low, high) {
        if (low >= high) return;
        let mid = Math.floor((low + high) / 2);
        await mergeSort(arr, low, mid); // left half
        await mergeSort(arr, mid + 1, high); // right half
        await merge(arr, low, mid, high); // merging sorted halves
    }
}
async function quicksort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pi = await partition(arr, low, high);
        await sleep(100);
        await quicksort(arr, low, pi - 1);
        await quicksort(arr, pi + 1, high);
    }
    return arr;
}

async function partition(arr, low, high) {

    const pivot = arr[high];
    let i = low - 1;
    let p='elem' + high;
    document.getElementById(p).style.border='1px solid red';
    for (let j = low; j < high; j++) {
        
        let b='elem'+(j);
        await sleep(100);
        document.getElementById(b).style.border='1px solid black';
        if (arr[j] < pivot) {
            i++;
            let a='elem'+i;
            document.getElementById(a).style.border='1px solid black';
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap in the array
            await colorSwap(i, j); // Visualize the swap
            document.getElementById(a).style.border='none'
            document.getElementById(b).style.border='none'
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot into the correct place
    a='elem'+(i+1);b='elem'+high;
    document.getElementById(a).style.border='1px solid black'
    document.getElementById(b).style.border='1px solid black'
    await sleep(50);
    await colorSwap(i + 1, high); // Visualize the swap
    document.getElementById(a).style.border='none';
    document.getElementById(b).style.border='none';
    document.getElementById(p).style.border='none';
    return i + 1;
}
//color swap function
async function colorSwap(i,j){
    console.log('test 3')
    let a = 'elem' + i;
    let b = 'elem' + (j);
    let e1 = document.getElementById(a);
    let e2 = document.getElementById(b);
    if (e1 && e2) { // Ensure elements are found before accessing their styles
        // Swap colors
        let b1 = e1.style.backgroundColor;
        let b2 = e2.style.backgroundColor;
        e1.style.backgroundColor = b2;
        e2.style.backgroundColor = b1;

        // Swap heights
        let h1 = e1.style.height;
        let h2 = e2.style.height;
        e1.style.height = h2;
        e2.style.height = h1;

        // Pause for visualization
        // e1.style.borderColor = 'red';
        // e2.style.borderColor = 'red';
        await sleep(100);
        e1.style.borderColor = 'black';
        e2.style.borderColor = 'black';
    } else {
        console.error(`Element not found: ${a} or ${b}`);
    }
}

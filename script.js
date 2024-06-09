let arrsize=window.prompt("Enter the size of the desired array(5<< x << 65)")
let flag = true;
let parentDiv= document.getElementsByClassName('parent')[0];
let btn=document.getElementsByClassName('butn')[0];
let insertionBtn = document.getElementsByClassName('sortButton')[2];
let selectionBtn=document.getElementsByClassName('sortButton')[1];
let bubbleBtn=document.getElementsByClassName('sortButton')[0];
let mergebtn= document.getElementsByClassName('sortButton')[4];
let quickBtn= document.getElementsByClassName('sortButton')[3];
let changeArrSize=document.getElementsByClassName('sortButtonprimme')[1];
let fastSpeed=document.getElementsByClassName('sortButtonprimme')[0];
let linktext = document.getElementsByClassName('alink')[0];
let showingspeed= document.getElementsByClassName('showSpeed')[0];
changeArrSize.addEventListener('mouseover',()=>{
    linktext.style.color = 'orange';
});
changeArrSize.addEventListener('mouseout',()=>{
    linktext.style.color = 'white';
})
let speeding=500;
let arr=[];
showingspeed.style.display = 'none';
showingSpeed(speeding);
//array input
for(let i=0;i<arrsize;i++){
    let r = Math.floor(Math.random()*100)
    arr.push(r);
}
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
changeArrSize.addEventListener('click',()=>{
    speeding=500;

})
selectionBtn.addEventListener("click",()=>{
    flag = true;
    selectionBtn.style.display = 'none';
    bubbleBtn.style.display = 'none';
    insertionBtn.style.display = 'none';
    quickBtn.style.display = 'none';
    mergebtn.style.display = 'none';
    showingspeed.style.display = 'flex';
    btn.style.display = 'block';
    selectionSort(arr);
});

bubbleBtn.addEventListener("click", () => {
    flag = true;
    selectionBtn.style.display = 'none';
    bubbleBtn.style.display = 'none';
    insertionBtn.style.display = 'none';
    quickBtn.style.display = 'none';
    mergebtn.style.display = 'none';
    btn.style.display = 'block';
    showingspeed.style.display = 'flex';
        bubbleSort(arr);
});
//bubble sort;
insertionBtn.addEventListener('click',() => {
    flag = true;
    selectionBtn.style.display = 'none';
    bubbleBtn.style.display = 'none';
    insertionBtn.style.display = 'none';
    quickBtn.style.display = 'none';
    mergebtn.style.display = 'none';
    showingspeed.style.display = 'flex';
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
    showingspeed.style.display = 'flex';
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
    showingspeed.style.display = 'flex';
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
        innerDiv.style.border='none';
        innerDiv.style.backgroundColor= `#` + ( Math.random()*0xFFFFFF<<0).toString(16).padStart(6, '0');
    }
    speeding=500;
    showingspeed.style.display = 'none';
    showingSpeed(speeding);
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
                await sleep(speeding);
                document.getElementById(a).style.border='1px solid black';
                document.getElementById(b).style.border='1px solid black';
            if(arr[j+1]<arr[j]){
                console.log('iam there');
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                colorSwap(j,j+1);
            }
            await sleep(speeding);
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
                await sleep(speeding);
                document.getElementById(a).style.border='1px solid black';
                document.getElementById(b).style.border='1px solid black';
                if(arr[mini]>arr[j]){
                    mini=j;
                }
            
                await sleep(speeding);
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
        document.getElementById(a).style.border='1px solid black';
        // Move elements of arr[0..i-1],
        // that are greater than key, 
        // to one position ahead of their
        // current position
        await sleep(speeding);
        while (j >= 0 && arr[j] > key) {
            if(flag){
            let b = 'elem'+ j;
            document.getElementById(b).style.border = '1px solid yellow';
            arr[j + 1] = arr[j];
            colorSwap(j+1,j);    
            j = j - 1;
            await sleep(speeding);
            document.getElementById(b).style.border = '1px solid black';
            }
            else {
                return ;
            }
        }

        arr[j + 1] = key;
    
    }
}
async function mergeSort(arr, colorswap) {
    let temp = Array(arr.length);
    async function merge(leftStart, leftEnd, rightStart, rightEnd) {
        let i = leftStart;
        let j = rightStart;
        let k = leftStart;

        while (i <= leftEnd && j <= rightEnd) {
            if (arr[i] <= arr[j]) {
                temp[k] = arr[i];
                i++;
            } else {
                temp[k] = arr[j];
                j++;
            }
            k++;
        }
        // 
        // Copy remaining elements from left subarray, if any
        while (i <= leftEnd) {
            temp[k] = arr[i];
            i++;
            k++;
        }

        // Copy remaining elements from right subarray, if any
        while (j <= rightEnd) {
            temp[k] = arr[j];
            j++;
            k++;
        }

        // Copy the merged elements back into the original array
         for (let idx = leftStart; idx <= rightEnd; idx++) {
            arr[idx] = temp[idx];
            // Call the colorswap function with the current index
            await elemswap(idx,temp);
            await sleep(500);
        }
    }
    async function mergeSortRecursive(left, right) {
        if (left < right) {
            let middle = Math.floor((left + right) / 2);
            mergeSortRecursive(left, middle);
            mergeSortRecursive(middle + 1, right);
            merge(left, middle, middle + 1, right);
        }
    }

    mergeSortRecursive(0, arr.length - 1);
    print(arr);
}
async function quicksort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pi = await partition(arr, low, high);
        await sleep(speeding);
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
        await sleep(speeding);
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
        await sleep(speeding);
        e1.style.borderColor = 'black';
        e2.style.borderColor = 'black';
    } else {
        console.error(`Element not found: ${a} or ${b}`);
    }
}
async function elemswap(i,temp){
    
    let a = ('elem' + i);
    let e1= document.getElementById(a);
    e1.style.height = (temp[i] * 6) + 'px';
}
async function print(arr){
    await arr.forEach(ele=>{
        console.log( ele + ' ');
    })
}
fastSpeed.addEventListener("click",()=>{
    if(speeding>0){
    speeding-=100;
    showingSpeed(speeding);
    }
    else{
        showingspeed.textContent = `Current Speed: ${speeding}ms : this is the lass limit`; 
    }
})
async function showingSpeed(speeding){
    showingspeed.textContent = `Current Speed: ${speeding}ms`;
}

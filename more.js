
//<button onclick="alert('The Button is clicked')">Press Here</button>
<button id='myButton'>LAWRENCE at JAVI</button>
//DOM property assignment
const button=document.getElementById('theBtn');
button.onclick=function(){
    alert('Here we go...stay awake!');
};

//using an addEventListener
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    alert('button clicked!!');


});


import $ from 'jquery';

const nav_group = document.querySelector('.nav_group');

$('#hamburger').on('click',function(){
    nav_group.classList.toggle('open');
    event.stopPropagation();
});

$.getJSON('../src/DATA.json',function(data){
    console.log(data);
})

function main(){
    
    const baseUrl = "../src/DATA.json";
    
    const getDatas = async() => {
        try{    
            const response = await fetch(baseUrl);
            const responseJson = await response.json();
            getData(responseJson);
        }catch(error){
            console.log(error);
        }
    };
    getDatas();
}

const getData = (data) => {
    console.log(data)    
}

// main();

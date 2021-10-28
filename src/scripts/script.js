import $ from 'jquery';
import data from '../DATA.json';

const nav_group = document.querySelector('.nav_group');

$('#hamburger').on('click',function(){
    nav_group.classList.toggle('open');
    event.stopPropagation();
});

// Can't use local json as a GET HTTP request

// $.getJSON('../src/DATA.json',function(data){
//     console.log(data);
// })

console.log(data);

function main(){
    
    const baseUrl = "../src/DATA.json";
    
    const getDatas = async() => {
        try{
            // example use
            const response = data;
            const responseJson = response;
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

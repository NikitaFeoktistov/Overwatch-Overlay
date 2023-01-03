/**
import XMLHttpRequest from 'xhr2';


function returnPlayerData() {
    // https://levelup.gitconnected.com/all-possible-ways-of-making-an-api-call-in-plain-javascript-c0dee3c11b8b
    // code to get JSON data 
    let request = new XMLHttpRequest();
    request.open("GET", 'https://randomuser.me/api/')
    request.send();
    request.onload = () => {
        if (request.status === 200){
           console.log(JSON.parse(request.response));
        } else {
            console.log(`error ${request.status} ${request.statusText}`);
     }
    return request.responseText;
    }
}

console.log(returnPlayerData());

*/



import fetch from 'node-fetch';



async function returnPlayerData() {
    let response = await fetch('https://randomuser.me/api/');
    if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
    let data = await response.json();
    return data;
}

returnPlayerData().then(data => console.log(data));


const obj = returnPlayerData();
console.log(obj);
console.log("hi");
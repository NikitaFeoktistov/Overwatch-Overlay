

function returnPlayerData() {
    // https://levelup.gitconnected.com/all-possible-ways-of-making-an-api-call-in-plain-javascript-c0dee3c11b8b
    // code to get JSON data 
    let request = new XMLHttpRequest();
    request.open("GET", "https://best-overwatch-api.herokuapp.com/player/pc/us/GamersCCCP-1569")
    request.send();
    request.onload = () => {
        if (request.status === 200){
           console.log(JSON.parse(request.response));
        } else {
            console.log(`error ${request.status} ${request.statusText}`);
     }
    }
}
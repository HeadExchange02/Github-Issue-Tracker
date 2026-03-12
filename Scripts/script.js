const loadData = function loadData(){
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((response) => response.json())
    .then((json) => console.log(json))
}



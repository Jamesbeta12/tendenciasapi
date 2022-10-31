const text = document.querySelector(".text")
const search = document.getElementById("search")
const btnSearch = document.getElementById("button")

document.addEventListener("DOMContentLoaded", function () {
    let apikey = "LIVDSRZULELA";
    let lmt = 10;

    btnSearch.addEventListener("click", function () {
        let term = text.value;
        let url = "https://g.tenor.com/v1/search?q=" + term + "&key=" + apikey + "&limit=" + lmt;
        console.log(url);

        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let myArr = JSON.parse(this.responseText);
                console.log(myArr);
                let i = 0;
                console.log(myArr["results"].length);
                while(i < myArr["results"].length) {
                    let src = myArr["results"][i]["media"][0]["nanogif"]["url"];
                    const img = document.createElement("img")
                    img.setAttribute("src",src)
                    search.appendChild(img)
                    i++;
                }
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    })
        
});


// const container = document.getElementById("content");
// const apikey = "AIzaSyBJ5Cbo7wM6J4oPzn_mfe0NCfvzgUjQpIM";
// const clientkey = "my_test_app";
// const term = "excited";

// const URL = "https://tenor.googleapis.com/v2/search?q=" + term + "&key=" + apikey + "&client_key=" + clientkey;
// console.log(URL);

// const URLp = "https://tenor.googleapis.com/v2/trending_terms?q=" + term + "&key=" + apikey + "&client_key=" + clientkey;
// console.log(URLp);


// window.addEventListener("DOMContentLoaded",getApi);



// document.addEventListener('keyup', e=>{

//     if (e.target.matches("#input")){

//         if(e.key ==="Escape")e.target.value = ""

//         document.querySelectorAll(".card").forEach(elemento => {

//             elemento.textContent.toLowerCase().includes(e.target.value)
//             ?elemento.classList.remove("filter")
//             :elemento.classList.add("filter")
//         })
//     }
// })



// function getApi() {
    
//     fetch(URL)
//     .then(response => response.json())
//     .then(data => data["results"].map(results => {

//         const div = document.createElement("div");
//         div.classList.add("card");

//         const name = document.createElement("h1");
//         name.textContent = results["content_description"];
//         name.classList.add("name");

//         const img = document.createElement("img");
//         img.src = results.media_formats.gif["url"];
//         img.classList.add("img");

//         div.appendChild(name);
//         div.appendChild(img);
//         container.appendChild(div);

//     }))
// } 

// fetch('https://g.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=8', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
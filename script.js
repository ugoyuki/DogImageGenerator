const APIURL ="https://dog.ceo/api/breeds/image/random";
const main = document.getElementById("main");
const button = document.getElementById("button");

let number = 1;

async function getImage(){
    const response = await fetch(APIURL);
    const responseData = await response.json();//とりあえずjsonでjavascriptオブジェクト形式に変換する
    console.log(responseData);
    if(response.ok){
        console.log("ok");
        const image = document.createElement("img");
        const div = document.createElement("div");
        const pTag = document.createElement("p");
        pTag.innerHTML =`Dog${number}`;
        image.src = responseData.message
        div.appendChild(image);
        div.appendChild(pTag);
        main.appendChild(div);
        number++;
        console.log(number);

    }
    else{
        
    }
}

button.addEventListener("click",() =>{
    getImage();
})
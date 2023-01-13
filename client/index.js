let count = 0;
let html =``;
let ClassName;
let Default_Img = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fworld-news&psig=AOvVaw0ekkjaed_BI66AiJkuI9G7&ust=1673690215473000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCb0oekxPwCFQAAAAAdAAAAABAM';

async function ServerFetch(){
    document.querySelector("#content").innerHTML='Loading...';
    let country = document.querySelector("#counties").value;
    let category = document.querySelector("#categories").value;
    let response = await fetch(`http://localhost:8000/?country=${country}&category=${category}`);
    console.log(`http://localhost:8000/?country=${country}&category=${category}`)
    let data = await response.json();
    //console.log(data);
    for(let i of data.articles){
        count%2==0 ? ClassName = 'card-style1' : ClassName = 'card-style2';
        html+=`
        <div class=${ClassName}>
        <img src=${i.urlToImage || Default_Img} style="width:250px;height:240px;border-radius:8px" /><br/>
        <p><a href=${i.url} style="color:black;font-weight:500;text-decoration:none;margin-top:0.4rem">${i.title}</a></p>
        </div>
        `;
        count+=1;
    }
    document.querySelector("#content").innerHTML=html;
}

document.querySelector("#search").addEventListener("click",ServerFetch);

window.onload = ServerFetch();


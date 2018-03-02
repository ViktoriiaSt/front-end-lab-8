// Your code goes here
let root = document.getElementById("root");
let mainBlock = document.createElement('div');
function getPage(itemList, div) {
    let title = document.createElement('h1');
    title.textContent = "Most popular tanks";
    div.classList.add('template');
    div.appendChild(title);
    for (let i = 0; i < itemList.length; i++) {
        let a = document.createElement('a');
        let imgDescription = document.createElement('img');
        let tanksBlock = document.createElement('div');
        let tankBlockInfo = document.createElement('div');
        let countryImg = document.createElement('img');
        let level = document.createElement('span');
        let spanModel = document.createElement('span');
        
        imgDescription.setAttribute("src", `${itemList[i].preview}`);
        imgDescription.setAttribute("alt", `${itemList[i].model}`);
        imgDescription.classList.add("preview");
        
        tanksBlock.classList.add("tanks-template");
        tankBlockInfo.classList.add("tank-model-preview");
        
        countryImg.setAttribute("src", `${itemList[i].country_image}`);
        countryImg.setAttribute("alt", `${itemList[i].country}`);
        countryImg.classList.add("country");
        countryImg.setAttribute("title", `${itemList[i].country}`);
        
        level.classList.add("level");
        level.textContent = itemList[i].level;
        
        spanModel.textContent = itemList[i].model;
        spanModel.classList.add("span-model");
        spanModel.setAttribute("title", `${itemList[i].model}`);
        
        tankBlockInfo.appendChild(countryImg);
        tankBlockInfo.appendChild(level);
        tankBlockInfo.appendChild(spanModel);
        
        tanksBlock.appendChild(imgDescription);
        tanksBlock.appendChild(tankBlockInfo);
        
        a.appendChild(tanksBlock);
        a.setAttribute("href", `#${itemList[i].model.replace(/\s/g,"-")}`);
        a.setAttribute("title", "Click to details");
        
        div.appendChild(a);
    }
    return div;
}
let result = getPage(tanks, mainBlock);
root.appendChild(result);
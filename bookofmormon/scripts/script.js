
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function(){
    if (input.value.length === 0){    
    }
    else{
        let chapter = input.value;  
        const listItem = document.createElement("li");
        const listText = document.createElement("span");
        const listBtn = document.createElement("button");

        listItem.appendChild(listText);
        listText.textContent = chapter;
        listItem.appendChild(listBtn);
        listBtn.textContent = "❌";
        listBtn.ariaLabel = "Delete Chapter";
        list.appendChild(listItem);
        input.value = "";

        listBtn.addEventListener("click", function(){
            list.removeChild(listItem);

        });

    }
    input.focus();

})
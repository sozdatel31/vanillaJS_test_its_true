
let container = document.createElement('div');
container.className = "container";
document.body.prepend(container);

let header = document.createElement('div');
header.className = "header";
container.prepend(header);
container.insertAdjacentHTML('beforeend', '<input class="input" type="text" placeholder="Код ОКРБ или наименование закупаемой продукции">');
header.insertAdjacentHTML('afterbegin', '<p class="show_selected">Показать выбранное</p>');
header.insertAdjacentHTML('afterbegin', '<p class="title1">Тендеры в роли поставщика</p>');


const option = [].slice.call(document.getElementsByTagName("option"))




const selectArray = [...document.getElementsByClassName("visually-hidden")]

console.log(selectArray)

function selectShowOptions(dataLevel, value) {
    console.log(`value: ${value}`)
    console.log(`dataLevel: ${dataLevel}`)


}

option.map(m=> m.setAttribute('onclick',
    " selectShowOptions((+this.dataset.level), (+this.value))"))

// selectArray.map(m=>m.setAttribute('onclick',
//     " selectShowOptions((this), (this.parentNode.dataset.group), (this.value))"))

console.log(option)







// function selectShowOptions(dataLevel, dataGroup, value) {
//     console.log(value)
//     let checkboxArray = [...document.querySelectorAll(".container")];
//     for (let i = value; i < option.length+10; i++) {
//         let e = option[i]
//         if (e.dataset.level == dataLevel) { // show/hide elements which are 1 level lower
//             e.classList.toggle("hidden-option");
//             checkboxArray[i].classList.toggle("hidden-option");
//             e.style.paddingLeft = `${dataLevel * 10}px`;
//             i == option.length - 1 ? i-- : i;
//             if (dataLevel + 1 > option[i + 1].dataset.level) {
//                 break;
//             }
//         } else if (!e.classList.contains("hidden-option") && e.dataset.level >= dataLevel && dataGroup === e.parentNode.dataset.group) { // hides all lower levels
//             e.classList.add("hidden-option");
//             checkboxArray[i].classList.add("hidden-option");
//         }
//     }
// }
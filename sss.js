let container = document.createElement('div');
container.className = "container";
document.body.prepend(container);

let header = document.createElement('div');
header.className = "header";
container.prepend(header);
container.insertAdjacentHTML('beforeend', '<input class="input" type="text" placeholder="Код ОКРБ или наименование закупаемой продукции">');
header.insertAdjacentHTML('afterbegin', '<p class="show_selected">Показать выбранное</p>');
header.insertAdjacentHTML('afterbegin', '<p class="title1">Тендеры в роли поставщика</p>');

console.log(document.getElementsByTagName("option"))

const option = [].slice.call(document.getElementsByTagName("option"))
const select = document.getElementsByTagName("select")

console.log(select)

option.forEach(m => {

    m.style.paddingLeft = `${+m.dataset.level * 10}px`
    m.dataset.level = m.dataset.level ? m.dataset.level : "1";
    // m.setAttribute('onclick',
    //     " selectShowOptions((+this.dataset.level), (+this.value))")
    m.addEventListener("click", ()=> selectShowOptions((+m.dataset.level), (+m.value)))
    m.insertAdjacentHTML('beforeend', '<div><input class="heyy" type="checkbox"/></div>');
})

const selectArray = [...document.getElementsByClassName("visually-hidden")]

console.log(selectArray)

function selectShowOptions(dataLevel, value) {
    console.log(`value: ${value}`)
    console.log(`dataLevel: ${dataLevel}`)
    let arr = [], bool = false
    for (let i = value - 9; i < option.length; i++) {
        if (+option[i].dataset.level <= dataLevel) {
            break
        }
        arr.push(option[i])

    }
    arr.forEach((f, i) => {
        if (!i)
            f.style.display = f.style.display ? "" : "none"
        f.style.display = arr[0].style.display ? "none" : ""
    })
}

console.log(option)


let container = document.createElement('div');
container.className = "container";
document.body.prepend(container);

let header = document.createElement('div');
header.className = "header";
container.prepend(header);
container.insertAdjacentHTML('beforeend', '<input class="input" placeholder="Код ОКРБ или наименование закупаемой продукции">');
header.insertAdjacentHTML('afterbegin', '<p class="title1">Тендеры в роли поставщика</p>');
header.insertAdjacentHTML('afterbegin', '<p class="show_selected">Показать выбранное</p>');

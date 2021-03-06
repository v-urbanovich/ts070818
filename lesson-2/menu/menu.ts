type ItemMenu = {
    title: string;
    items?: ItemMenu[];
};

const menuData: ItemMenu[] = [
    {
        title: 'Животные',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    {
                        title: 'Коровы'
                    }, {
                        title: 'Ослы'
                    }, {
                        title: 'Собаки'
                    }, {
                        title: 'Тигры'
                    }
                ]
            }, {
                title: 'Другие',
                items: [
                    {
                        title: 'Змеи'
                    }, {
                        title: 'Птицы'
                    }, {
                        title: 'Ящерицы'
                    }
                ]
            }
        ]
    }, {
        title: 'Рыбы',
        items: [
            {
                title: 'Аквариумные',
                items: [
                    {
                        title: 'Гуппи'
                    }, {
                        title: 'Скалярии'
                    }
                ]
            }, {
                title: 'Форель',
                items: [
                    {
                        title: 'Морская форель'
                    }
                ]
            }
        ]
    }
];

const renderList: (list: ItemMenu[]) => HTMLUListElement = (list: ItemMenu[]): HTMLUListElement => {
    const ul: HTMLUListElement = document.createElement('ul');
    list.forEach((item: ItemMenu) => {
        ul.appendChild(renderItem(item));
    });
    return ul;
};
const renderItem: (item: ItemMenu) => HTMLLIElement = (item: ItemMenu): HTMLLIElement => {
    const li: HTMLLIElement = document.createElement('li');
    const link: HTMLAnchorElement = document.createElement('a');
    link.innerText = item.title;
    li.appendChild(link);
    if (Array.isArray(item.items)) {
        li.appendChild(renderList(item.items));
        link.classList.add('title');
        link.addEventListener('click', () => {
            li.classList.toggle('open');
        });
    }
    return li;
};

const navMenuList: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
const renderedList: HTMLUListElement = renderList(menuData);
navMenuList.appendChild(renderedList);

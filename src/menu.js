export default function loadMenuPage() {
    const content = document.getElementById('content');

    const section = document.createElement('section');
    section.classList.add('menu-section');

    const menuTitle = document.createElement('h2');
    menuTitle.classList.add('menu-title');
    menuTitle.textContent = 'Our Menu';

    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');

    const menuItems = [
        { name: 'Pizza', price: '$12.99' },
        { name: 'Burger', price: '$8.99' },
        { name: 'Pasta', price: '$10.99' },
        { name: 'Salad', price: '$7.99' }
    ];

    menuItems.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.classList.add('menu-item');

        const itemName = document.createElement('span');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('span');
        itemPrice.textContent = item.price;

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemPrice);
        menuList.appendChild(menuItem);
    });

    section.appendChild(menuTitle);
    section.appendChild(menuList);
    content.appendChild(section);
}

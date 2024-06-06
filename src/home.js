export default function loadHomePage(){
    const content = document.getElementById('content');

    const header = document.createElement('header');
    const headerTitle = document.createElement('h1');
    const headerDescription = document.createElement('p');

    //Header title :
    headerTitle.textContent = "Welcome to the Odin Restaurant";
    headerTitle.classList.add('home-welcome');

    headerDescription.textContent = 'Delicious food made with love and expetise by our lovely chef';
    headerDescription.classList.add('home-p');

    header.appendChild(headerTitle);
    header.appendChild(headerDescription);
    content.appendChild(header);
}
import loadHomePage from './home';
import loadAboutPage from './about';
import loadMenuPage from './menu';
import './style.css';


function init(){
    const content = document.getElementById('content');

    //create the nav :
    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';

    const aboutBtn = document.createElement('button');
    aboutBtn.textContent = 'About';

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';

    nav.appendChild(homeBtn);
    nav.appendChild(aboutBtn);
    nav.appendChild(menuBtn);

    document.body.insertBefore(nav,content);

    //loading home page :
    loadHomePage();

    //Adding footer :

    const footer = document.createElement('footer');
    const footerText = document.createElement('p');
    footerText.textContent='Project realised by Chaabane2k03';
    footer.appendChild(footerText);
    document.body.insertBefore(footer,content);



    //Setting up the event listener
    function clearContent(){
        content.innerHTML = '';
    }

    homeBtn.addEventListener('click', function(){
        clearContent();
        loadHomePage();
    });

    aboutBtn.addEventListener('click', function(){
        clearContent();
        loadAboutPage();
    });

    menuBtn.addEventListener('click', function(){
        clearContent();
        loadMenuPage();
    });


}

document.addEventListener('DOMContentLoaded', init);

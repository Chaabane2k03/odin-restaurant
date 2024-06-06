export default function loadAboutPage(){
    const content = document.getElementById('content');

    const section = document.createElement('section');

    const aboutTitle = document.createElement('h2');
    aboutTitle.textContent = 'About Us';
    aboutTitle.classList.add("about-title");
    //TODO : Add styling to the about page : h2 
    const aboutDesc = document.createElement('p');
    aboutDesc.textContent = 'We are passionate about serving delicious foods from different cultures . Founded during 1939 to serve Japanease military , we have enough expertise and celebrity to maintain ourselves as one of the most strongest resaurants .';
    aboutDesc.classList.add('about-p');
    //TODO: Add a class to p and style it
    section.appendChild(aboutTitle);
    section.appendChild(aboutDesc);
    content.appendChild(section);
}
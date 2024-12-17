export function section() {
    const section = document.createElement('section');
    section.classList.add('section');
    const article = document.createElement('article');
    article.classList.add('fold');
    section.appendChild(article);
    const img = document.createElement('img');
    img.classList.add('img');
    img.src = 'src/img/img1.jpg';
    article.appendChild(img);

    let clonedImg = img.cloneNode(true);
    let bottomDiv = document.createElement('div');
    bottomDiv.classList.add('bot');
    article.appendChild(bottomDiv);
    bottomDiv.appendChild(clonedImg);
    let topDiv = document.createElement('div');
    topDiv.classList.add('top');
    article.insertBefore(topDiv, img);
    topDiv.appendChild(img);

    article.querySelectorAll('div').forEach(div => {
        const shadowDiv = document.createElement('div');
        shadowDiv.className = 'shadows';
        div.appendChild(shadowDiv);
    });


    return section;
}

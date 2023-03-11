    const bookList = document.querySelector('#Books-list');

    const menuLinks = document.querySelectorAll('nav a');
    menuLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
    });

    fetch('https://upadhayay.github.io/db.json')
    .then(response => response.json())
    .then(data => {
        const books = data.books;
        let html = '';
        books.forEach(book => {
        if (book.published) {
            html += `<li><a href="${books.link}">${books.title}</a></li>`;
        }
        });
        bookList.innerHTML = html;
    })
    .catch(error => console.log(error));
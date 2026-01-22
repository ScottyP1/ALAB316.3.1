// --------------------------------------------------------- Part 1
const mainEl = document.querySelector('main');
const h1El = document.createElement('h1');

mainEl.style.backgroundColor = 'var(--main-bg)';

h1El.innerHTML = 'DOM Manipulation';
mainEl.appendChild(h1El);

mainEl.classList.add('flex-ctr');

// --------------------------------------------------------- Part 2
const topMenuEl = document.querySelector('#top-menu');

topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

// --------------------------------------------------------- Part 3
var menuLinks = [

    { text: 'about', href: '/about' },

    {
        text: 'catalog', href: '#', subLinks: [

            { text: 'all', href: '/catalog/all' },

            { text: 'top selling', href: '/catalog/top' },

            { text: 'search', href: '/catalog/search' },

        ]
    },

    {
        text: 'orders', href: '#', subLinks: [

            { text: 'new', href: '/orders/new' },

            { text: 'pending', href: '/orders/pending' },

            { text: 'history', href: '/orders/history' },

        ]
    },

    {
        text: 'account', href: '#', subLinks: [

            { text: 'profile', href: '/account/profile' },

            { text: 'sign out', href: '/account/signout' },

        ]
    },

];

menuLinks.map((item) => {
    const linkEl = document.createElement('a');
    linkEl.href = item.href;
    linkEl.text = item.text;

    topMenuEl.appendChild(linkEl);
})

// --------------------------------------------------------- Part 3
const subMenuEl = document.querySelector('#sub-menu');

subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around')

subMenuEl.style.position = 'absolute';
subMenuEl.style.top = 0

// --------------------------------------------------------- Part 4
// const topMenuLinks = topMenuEl.children
const topMenuLinks = document.querySelectorAll('#top-menu a')

topMenuEl.addEventListener('click', function (e) {
    e.preventDefault();
    let linkEl = e.target;
    subMenuEl.replaceChildren()

    if (linkEl.localName !== 'a') return;

    const selectedItem = menuLinks.find(
        (item) => item.subLinks && item.text === linkEl.innerHTML
    );
    if (!selectedItem) {
        h1El.innerHTML = linkEl.innerHTML;
    };

    if (selectedItem) {
        selectedItem.subLinks.forEach((subLink) => {
            const subLinkEl = document.createElement('a');
            subLinkEl.href = '#';
            subLinkEl.text = subLink.text;
            subMenuEl.appendChild(subLinkEl);
        });

        subMenuEl.style.top = '100%';
    }

    // menuLinks.map((item) => {
    //     if (item.subLinks) {
    //         if (item.text === linkEl.innerHTML) {
    //             item.subLinks.map((item2) => {
    //                 const linkEl = document.createElement('a');
    //                 linkEl.href = item2.href;
    //                 linkEl.text = item2.text;
    //                 subMenuEl.appendChild(linkEl);
    //             })

    //             subMenuEl.style.top = '100%';
    //         }
    //     }
    // })

    if (linkEl.classList.contains('active')) {
        linkEl.classList.toggle('active');
        subMenuEl.style.top = '0%'
        return;
    }

    topMenuLinks.forEach(link => link.classList.remove('active'));
    linkEl.classList.toggle('active');


});


// --------------------------------------------------------- Part 5


subMenuEl.addEventListener('click', function (e) {
    e.preventDefault();

    const subMenuLinks = document.querySelectorAll('#sub-menu a')
    let linkEl = e.target;


    if (linkEl.localName !== 'a') return;

    if (linkEl.classList.contains('active')) {
        linkEl.classList.toggle('active');
        return;
    }
    subMenuLinks.forEach(link => link.classList.remove('active'));
    linkEl.classList.toggle('active');

    h1El.innerHTML = linkEl.innerHTML;


});
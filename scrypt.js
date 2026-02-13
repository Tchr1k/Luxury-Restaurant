const menuData = {
    appetizers: [
        {
            title: 'ფუა გრა',
            description: 'ბატის ღვიძლი ინჟირის ჯემით და ტრიუფელის ზეთით',
            price: '65₾',
            image: 'images/menu/foie-gras.jpg',
            badge: 'ჰიტი'
        },
        {
            title: 'ტარტარი ლოსოსისგან',
            description: 'ახალი ნორვეგიული ლოსოსი ავოკადოთი და ლაიმით',
            price: '48₾',
            image: 'images/menu/salmon-tartare.jpg',
            badge: ''
        },
        {
            title: 'ბურატა',
            description: 'იტალიური ყველი ჩერი პომიდვრებით და ბაზილიკით',
            price: '42₾',
            image: 'images/menu/burrata.jpg',
            badge: 'რეკომენდებული'
        }
    ],
    mains: [
        {
            title: 'ხაშლამა კრევეტით',
            description: 'ქართული ხორცეული კერძი თანამედროვე ინტერპრეტაციით',
            price: '85₾',
            image: 'images/menu/khashlama.jpg',
            badge: 'ჰიტი'
        },
        {
            title: 'სტეიკი რიბაი',
            description: '350გრ ხორცი ტრიუფელის პიურესთ და სოკოებით',
            price: '95₾',
            image: 'images/menu/ribeye.jpg',
            badge: ''
        },
        {
            title: 'ზღვის ბასი',
            description: 'მთლიანი თევზი ბოსტნეულით და ლიმონის სოუსით',
            price: '78₾',
            image: 'images/menu/sea-bass.jpg',
            badge: 'რეკომენდებული'
        }
    ],
    desserts: [
        {
            title: 'ტირამისუ',
            description: 'კლასიკური იტალიური დესერტი ჩვენი ხელწერით',
            price: '28₾',
            image: 'images/menu/tiramisu.jpg',
            badge: ''
        },
        {
            title: 'შოკოლადის ფონდანი',
            description: 'თბილი შოკოლადის ტორტი ვანილის ნაყინით',
            price: '32₾',
            image: 'images/menu/fondant.jpg',
            badge: 'ჰიტი'
        },
        {
            title: 'პანა კოტა',
            description: 'იტალიური კრემი ველური კენკრით',
            price: '26₾',
            image: 'images/menu/panna-cotta.jpg',
            badge: ''
        }
    ],
    wines: [
        {
            title: 'საფერავი 2018',
            description: 'ქართული წითელი ღვინო კახეთიდან',
            price: '120₾',
            image: 'images/menu/saperavi.jpg',
            badge: 'რეკომენდებული'
        },
        {
            title: 'რქაწითელი 2020',
            description: 'თეთრი მშრალი ღვინო ქვევრში დაყენებული',
            price: '95₾',
            image: 'images/menu/rkatsiteli.jpg',
            badge: ''
        },
        {
            title: 'კინძმარაული',
            description: 'ნახევრად ტკბილი წითელი ღვინო',
            price: '85₾',
            image: 'images/menu/kindzmarauli.jpg',
            badge: 'ჰიტი'
        }
    ]
};


function loadMenu(category) {
    const container = document.getElementById('menu-content');
    container.innerHTML = '';
    
    menuData[category].forEach(item => {
        const menuItem = `
            <div class="menu-item">
                <img src="${item.image}" alt="${item.title}" class="menu-item-image">
                <div class="menu-item-content">
                    <div class="menu-item-header">
                        <h3 class="menu-item-title">${item.title}</h3>
                        <span class="menu-item-price">${item.price}</span>
                    </div>
                    <p class="menu-item-description">${item.description}</p>
                    ${item.badge ? `<span class="menu-badge">${item.badge}</span>` : ''}
                </div>
            </div>
        `;
        container.innerHTML += menuItem;
    });
}


function switchTab(category, element) {
    document.querySelectorAll('.menu-tab').forEach(tab => tab.classList.remove('active'));
    element.classList.add('active');
    loadMenu(category);
}


function toggleMenu() {
    document.querySelector('.nav-menu').classList.toggle('active');
}


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


function openLightbox(imageSrc) {
    document.getElementById('lightbox').classList.add('active');
    document.getElementById('lightbox-img').src = imageSrc;
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}


function handleRegistration(e) {
    e.preventDefault();
    alert('რეგისტრაცია წარმატებით დასრულდა! ✨');
}

function handleBooking(e) {
    e.preventDefault();
    alert('თქვენი ჯავშანი მიღებულია! ჩვენ მალე დაგიკავშირდებით. 🍷');
}


document.addEventListener('DOMContentLoaded', () => {
    loadMenu('appetizers');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            document.querySelector('.nav-menu').classList.remove('active');
        }
    });
});
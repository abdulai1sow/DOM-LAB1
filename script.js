// Menu data structure
const menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

//grab the main element
const mainEl = document.querySelector('main')

mainEl.style.backgroundColor = 'var(--main-bg)' 

mainEl.innerHTML = '<h1>SEI ROCKS</h1>'
mainEl.classList.add('flex-ctr')

//task2

const topMenuE1 = document.querySelector('#top-menu')
topMenuE1.style.height = '100%'
topMenuE1.style.backgroundColor = 'var(--top-menu-bg)'
topMenuE1.classList.add('flex-around')


menuLinks.forEach((linkObj) => {
  //create new element
  const a = document.createElement('a')
  a.setAttribute('href', linkObj.href) //add a attribute to each link
  a.textContent = linkObj.text //set the text content
  //append the anchor tag to a parent element
  topMenuE1.appendChild(a)
})

console.log(topMenuE1);
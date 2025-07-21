const nav = document.querySelector('.navbar');
const sidebar = document.querySelector('.navbar .navbar-link')
const close = document.querySelector('#close')


window.addEventListener('scroll', function () {
  if (this.scrollY < 10) {
    nav.style.backgroundColor = 'transparent'
  } else {
    nav.style.backgroundColor = '#0d1615'
  }
})

document.querySelector('#menu').onclick = () => {
  sidebar.classList.toggle('active')
}

document.querySelector('#close').onclick = () => {
  sidebar.classList.remove('active')
}





const accordion = document.querySelectorAll('.accordion-header')

accordion.forEach(header => {
  header.addEventListener('click', function () {
    const body = this.nextElementSibling

    if (body.style.maxHeight) {
      body.style.maxHeight = null;
      body.style.padding = "0 20px"
    } else {
      body.style.maxHeight = 200 + "px";
      body.style.padding = "15px 0";
    }
  })
})


const productsCart = document.querySelectorAll('.product-cart')

productsCart.forEach(cart => {
  const productBtn = cart.querySelector('.product-btn')

  cart.addEventListener('mouseenter', function () {
    productBtn.classList.add('show')
  })
  cart.addEventListener('mouseleave', function () {
    productBtn.classList.remove('show')
  })
})



const cart = document.querySelector('.cart'); // Elemen keranjang
const keluar = document.querySelector('#keluar'); // Tombol silang (keluar)

// Event listener untuk tombol buka keranjang (misalnya ikon keranjang belanja)
document.querySelector('.fa-cart-shopping').onclick = () => {
  cart.classList.toggle('active'); // Mengubah status 'active' pada keranjang

  // Tidak perlu menambahkan event listener keluar di sini setiap kali keranjang dibuka.
  // Event listener untuk tombol keluar harus ditambahkan satu kali saja di awal.
};

keluar.addEventListener('click', function(){
  cart.classList.remove('active')
})
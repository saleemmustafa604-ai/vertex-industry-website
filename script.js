document.getElementById("quoteForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name=document.getElementById("name").value;
  const email=document.getElementById("email").value;
  const product=document.getElementById("product").value;
  const qty=document.getElementById("qty").value;
  const message=document.getElementById("message").value;
  const text=`Hello Vertex Industry,%0A%0AName: ${name}%0AEmail: ${email}%0AProduct: ${product}%0AQuantity: ${qty}%0AProject: ${message}`;
  window.open(`https://wa.me/923376027672?text=${text}`,"_blank");
});
document.addEventListener("DOMContentLoaded", function () {
  const quoteForm = document.getElementById("quoteForm");

  if (quoteForm) {
    quoteForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Inputs se values lena (aap ke index.html ke id ke mutabiq)
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const product = document.getElementById("product").value;
      const qty = document.getElementById("qty").value;
      const message = document.getElementById("message").value;

      // Aap ka WhatsApp Number
      const phone = "923376027672";

      // Message Format
      const text = `Hello Vertex Industry,%0A%0A*New Project Inquiry*%0A- *Name:* ${name}%0A- *Email:* ${email}%0A- *Product:* ${product}%0A- *Quantity:* ${qty}%0A- *Details:* ${message}`;

      // WhatsApp URL open karna
      window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    });
  }
});
function toggleMenu() {
  const navMenu = document.getElementById('mobileNav') || document.querySelector('header nav');
  if (navMenu) {
    navMenu.classList.toggle('active');
  }
}
const openMenuBtn = document.getElementById('openMenu');
const closeMenuBtn = document.getElementById('closeMenu');
const navMenu = document.getElementById('navMenu');

// 3 lines par click karne par menu khulega
openMenuBtn.addEventListener('click', () => {
  navMenu.classList.add('active');
});

// 'X' par click karne par menu band ho jayega
closeMenuBtn.addEventListener('click', () => {
  navMenu.classList.remove('active');
});
// Mobile menu links click to close
document.querySelectorAll('.menu-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navMenu').classList.remove('active');
  });
});
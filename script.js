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
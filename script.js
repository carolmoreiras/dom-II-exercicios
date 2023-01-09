function adicionaItem() {
 const novoElemento = document.createElement("article")
 novoElemento.innerHTML = "teste"
 novoElemento.setAttribute("class", "item")
 novoElemento.setAttribute("onclick", "removeItem(event)")
 document.getElementById('container').appendChild(novoElemento)
}

function removeItem (event) {
  event.target.remove()
}
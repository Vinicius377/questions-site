const [, id] = window.location.href.split("?id=")
const html = {
  get(element) {
    return document.querySelector(element)
  },
}
const question = {
  author: html.get("#author"),
  body: html.get("#body"),
}
/**
 * *Mostar a pergunta
 */
function showQuestion({ author, body }) {
  document.title = author
  question.author.innerHTML = author
  question.body.innerHTML = body
}
fetch(`http://localhost:3001/question/${id}`)
  .then(response => response.json())
  .then(result => showQuestion(result))

/**
 * *Mostar todas as respostas
 */
let responses = []
const showResponse = data => {
  data.map(response => responses.unshift(response))
  const main = document.querySelector("main")
  main.innerHTML = ""
  responses.map(({ author, body }) => {
    const element = document.createElement("div")
    element.className = "container-blocks response"
    element.innerHTML = ` 
   <div>
       <h1>${author}</h1>
     </div>
     <p>
       ${body}
     </p>
   `
    main.appendChild(element)
  })
}
/**
 * *Form de nova responsta
 */
const form = {
  author: html.get("#form input"),
  body: html.get("#form textarea"),
  submit: html.get("#form button"),
}

form.submit.addEventListener("click", e => {
  e.preventDefault()
  const inputs = {
    author: form.author.value,
    body: form.body.value,
    id,
  }
  fetch("http://localhost:3001/response", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(inputs),
  }).then(() => showResponse([inputs]))
})

/**
 * *Mostrar todas as repostas
 */
fetch(`http://localhost:3001/response/${id}`)
  .then(response => response.json())
  .then(result => showResponse(result))

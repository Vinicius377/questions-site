//*showquestions
const html = {
  get(element) {
    return document.querySelector(element)
  },
}

let questions = []
const showQuestions = data => {
  data.map(question => questions.unshift(question))
  const main = html.get("main")
  main.innerHTML = ""
  questions.map(({ author, body, id }) => {
    const element = document.createElement("div")
    element.className = "card"
    element.innerHTML = `
    <div>
    <h1>${author}</h1>
    <button onclick="window.location.href='../response/index.html?id=${id}'">Responder</button>
    </div>
    <p>${body}</p>
  `
    main.appendChild(element)
  })
}
//*post new question
const post = html.get("#post")
post.addEventListener("click", e => {
  e.preventDefault()

  const inputs = {
    author: html.get("#author").value,
    body: html.get("#body").value,
  }

  fetch("http://localhost:3001/question", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputs),
  })
    .then(resp => resp.json())
    .then(() => {
      showQuestions([inputs])
    })
  html.get("#author").value = ""
  html.get("#body").value = ""
})

//*allquestions
fetch("http://localhost:3001/question")
  .then(res => res.json())
  .then(resp => {
    showQuestions(resp)
  })
  .catch(e => console.log("houve um erro" + e))

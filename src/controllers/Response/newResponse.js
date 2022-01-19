import Response from "../../models/Response.js"

export function newResponse(req, res) {
  const { author, body, id } = req.body
  if (author && body) {
    Response.create({
      author,
      body,
      question_id: id,
    })
  }
  res.json({ message: "ok" })
}

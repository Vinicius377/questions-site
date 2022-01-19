import Response from "../../models/Response.js"

export function getAllResponse(req, res) {
  const { id } = req.params
  Response.findAll({
    where: {
      question_id: id,
    },
  }).then(resp => {
    res.json(resp)
  })
}

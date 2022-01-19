import Response from "../../models/Response.js"

export function deleteResponse(req, res) {
  const { id } = req.params
  Response.destroy({
    where: {
      id,
    },
  })
}

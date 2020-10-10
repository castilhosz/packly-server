const { rastrearEncomendas } = require('correios-brasil');

module.exports = {
  async track(req, res) {
    const { code } = req.body;

    const api = await rastrearEncomendas(code);
    const data = api[0];

    return res.json(data);
  }
}
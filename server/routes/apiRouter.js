const exprses = require('express');
const router = express.Router();

app.get('/', (req, res) => res.status(200).json({
  message: 'HI'
}))

module.exports = router;
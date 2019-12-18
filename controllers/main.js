const getMessageData = (req, res, db) => {
  db.select('*').from('messages')
    .then(items => {
      if (items.length) {
        res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => res.status(400).json({dbError: 'Database Error'}))
}

const postMessageData = (req, res, db) {
  const {message} = req.body
  db('messages').insert({message})
    .returning('*')
    .then(item => {
      res.json(item)
    })
    .catch(err => res.status(400).json({dbError: 'Database Error'}))
}

module.exports = {
  getMessageData,
  postMessageData
}
const express = require('express');
const router = express.Router();

//@route        GET /api/contacts
//@desc         Get user contacts
//@access       Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

//@route        POST /api/contacts
//@desc         Add user contacts
//@access       Public
router.post('/', (req, res) => {
  res.send('Add new contact');
});

//@route        PUT /api/contacts/:id
//@desc         Update user contacts
//@access       Public
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

//@route        Delete /api/contacts/:id
//@desc         Update user contacts
//@access       Public
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;

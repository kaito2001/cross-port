const express = require('express');
const router = express.Router();
const { faucet } = require('../controllers/index');

// Mint NFT API
router.post('/:address', async (req, res, next) => {
  console.log('faucet');

  try {
    await faucet(req, res, next);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to  faucet address.' });
  }
});

module.exports = router;

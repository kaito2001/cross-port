const express = require('express');
const router = express.Router();
const { generateMint } = require('../controllers/index');

// Mint NFT API
router.post('/generate/:address', async (req, res, next) => {
  console.log('generate');
  try {
    await generateMint(req, res, next);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to mint NFT.' });
  }
});

module.exports = router;

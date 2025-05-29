const express = require('express');
const router = express.Router();
const User = require('../models/user');
const EngineInput = require('../models/EngineInput');

// GET /api/profile/:userId
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const engineData = await EngineInput.find({ userId: req.params.userId });

    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({
      name: user.name,
      email: user.email,
      engineInputs: engineData
    });
  } catch (err) {
    res.status(500).json({ error: 'Error fetching user profile' });
  }
});

module.exports = router;

const User = require('../models/User.');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile: ' + error.message });
  }
};

exports.updateProfile = async (req, res) => {
  const { weight, height } = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.user.id, { weight, height }, { new: true });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: 'Error updating profile: ' + error.message });
  }
};

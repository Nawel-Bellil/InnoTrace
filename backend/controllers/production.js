const Production = require('../models/Production');

// Create a production
exports.createProduction = async (req, res) => {
  try {
    const production = new Production(req.body);
    await production.save();
    res.status(201).json(production);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all productions
exports.getProductions = async (req, res) => {
  try {
    const productions = await Production.find();
    res.status(200).json(productions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a production by ID
exports.getProductionById = async (req, res) => {
  try {
    const production = await Production.findById(req.params.id);
    if (!production) {
      return res.status(404).json({ message: 'Production not found' });
    }
    res.status(200).json(production);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a production by ID
exports.updateProduction = async (req, res) => {
  try {
    const production = await Production.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!production) {
      return res.status(404).json({ message: 'Production not found' });
    }
    res.status(200).json(production);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a production by ID
exports.deleteProduction = async (req, res) => {
  try {
    const production = await Production.findByIdAndDelete(req.params.id);
    if (!production) {
      return res.status(404).json({ message: 'Production not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

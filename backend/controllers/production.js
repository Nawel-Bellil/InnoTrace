const Production = require('../models/production');

// Schedule a new production
exports.scheduleProduction = async (req, res) => {
  const { productId, productionLine, requiredQuantity, scheduledStartTime, scheduledEndTime, assignedMachine, assignedUsers } = req.body;

  try {
    const production = new Production({
      productId,
      productionLine,
      requiredQuantity,
      scheduledStartTime,
      scheduledEndTime,
      assignedMachine,
      assignedUsers,
      startTime: null, // Initial start time is null
      endTime: null, // Initial end time is null
    });

    await production.save();
    res.status(201).json(production);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all scheduled productions (for admin)
exports.getScheduledProductions = async (req, res) => {
  try {
    const productions = await Production.find({ startTime: null })
      .populate('assignedMachine') // Populate machine details
      .populate('assignedUsers'); // Populate user details
    res.status(200).json(productions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Start a production (Admin can start a scheduled production)
exports.startProduction = async (req, res) => {
  const { id } = req.params;

  try {
    const production = await Production.findById(id);
    if (!production) {
      return res.status(404).json({ message: 'Production not found' });
    }
    if (production.status !== 'In Progress') {
      production.status = 'In Progress';
      production.startTime = new Date();
      await production.save();
      res.status(200).json(production);
    } else {
      res.status(400).json({ message: 'Production is already in progress' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an existing scheduled production
exports.updateScheduledProduction = async (req, res) => {
  const { id } = req.params;
  
  try {
    const production = await Production.findByIdAndUpdate(id, req.body, { new: true });
    if (!production) {
      return res.status(404).json({ message: 'Production not found' });
    }
    res.status(200).json(production);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// Log production events (e.g., when a unit is produced or defect detected)
exports.logProductionEvent = async (req, res) => {
  const { id } = req.params;
  const { message } = req.body; // e.g., "Produced unit", "Defect detected"

  try {
    const production = await Production.findById(id);
    if (!production) return res.status(404).json({ message: 'Production not found' });

    // Add a log entry
    production.productionLogs.push({ message });
    await production.save();

    res.status(200).json(production);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update production quantities (e.g., after a successful unit is produced)
exports.updateProductionQuantities = async (req, res) => {
  const { id } = req.params;
  const { successfulQuantity, defectiveQuantity } = req.body;

  try {
    const production = await Production.findByIdAndUpdate(
      id,
      {
        $inc: {
          successfulQuantity,
          defectiveQuantity,
        },
      },
      { new: true }
    );

    if (!production) return res.status(404).json({ message: 'Production not found' });

    res.status(200).json(production);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get production status including tracking logs
exports.getProductionStatus = async (req, res) => {
  const { id } = req.params;

  try {
    const production = await Production.findById(id).populate('machinesUsed');
    if (!production) return res.status(404).json({ message: 'Production not found' });

    res.status(200).json(production);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

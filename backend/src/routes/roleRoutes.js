const express = require('express');
const router = express.Router();
const { getRoles, createRole, updateRole, deleteRole } = require('../controllers/roleController');

// GET all roles (optional filter by department)
router.get('/', getRoles);

// CREATE a role
router.post('/', createRole);

// UPDATE a role by ID
router.put('/:id', updateRole);

// DELETE a role by ID
router.delete('/:id', deleteRole);

module.exports = router;

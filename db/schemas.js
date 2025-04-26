// MongoDB schema design for Nirman-Setu platform collections

// Users collection schema example
// Roles: 'common', 'departmentHead', 'admin'
const UserSchema = {
  _id: 'ObjectId',
  username: 'string',
  email: 'string',
  passwordHash: 'string',
  role: 'string', // 'common', 'departmentHead', 'admin'
  departmentId: 'ObjectId', // Reference to Department (optional for common users)
  fullName: 'string',
  phone: 'string',
  createdAt: 'Date',
  updatedAt: 'Date',
  // Additional profile info as needed
};

// Departments collection schema
const DepartmentSchema = {
  _id: 'ObjectId',
  name: 'string',
  description: 'string',
  headUserId: 'ObjectId', // Reference to User who is department head
  resources: {
    budget: 'number', // total budget allocated
    equipment: [
      {
        name: 'string',
        quantity: 'number',
        description: 'string',
      },
    ],
    humanResources: [
      {
        userId: 'ObjectId',
        role: 'string',
      },
    ],
  },
  createdAt: 'Date',
  updatedAt: 'Date',
};

// Projects collection schema
const ProjectSchema = {
  _id: 'ObjectId',
  name: 'string',
  description: 'string',
  startDate: 'Date',
  endDate: 'Date',
  budget: 'number',
  priority: 'string', // e.g., 'high', 'medium', 'low'
  status: 'string', // e.g., 'planning', 'in-progress', 'completed', 'on-hold'
  departmentsInvolved: ['ObjectId'], // Array of Department IDs
  teamMembers: [
    {
      userId: 'ObjectId',
      role: 'string',
    },
  ],
  milestones: [
    {
      name: 'string',
      dueDate: 'Date',
      status: 'string', // e.g., 'not-started', 'in-progress', 'completed', 'delayed'
      progressPercent: 'number',
      notes: 'string',
    },
  ],
  createdAt: 'Date',
  updatedAt: 'Date',
};

// Notifications collection schema (optional)
const NotificationSchema = {
  _id: 'ObjectId',
  userId: 'ObjectId', // Recipient user
  type: 'string', // e.g., 'project', 'resource', 'system'
  title: 'string',
  message: 'string',
  isRead: 'boolean',
  createdAt: 'Date',
  relatedEntityId: 'ObjectId', // e.g., projectId, resourceId
};

// Activity Logs collection schema (optional)
const ActivityLogSchema = {
  _id: 'ObjectId',
  userId: 'ObjectId',
  action: 'string',
  entityType: 'string',
  entityId: 'ObjectId',
  timestamp: 'Date',
  details: 'string',
};

module.exports = {
  UserSchema,
  DepartmentSchema,
  ProjectSchema,
  NotificationSchema,
  ActivityLogSchema,
};

exports.InternObject = {
  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  phoneNumber: {
    type: Number,
    required: true
  },

  country: {
    type: String,
    required: [true, 'is required']
  },

  address: {
    type: String,
    required: false
  },

  city: {
    type: String,
    required: [true, 'is required']
  },

  state: {
    type: String,
    required: true
  },

  zipcode: {
    type: Number,
    required: true
  },

  track: {
    type: String,
    enum: ['frontend', 'mobile', 'design', 'backend'],
    required: true
  },

  employmentStatus: {
    type: String,
    enum: ['employed', 'unemployed', 'student'],
    default: 'unemployed'
  },

  gender: {
    type: String,
    enum: ['male', 'female'],
    default: 'female'
  },

  referredFrom : {
    type: String,
    
  }
};

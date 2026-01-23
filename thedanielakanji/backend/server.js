const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Note: Mongoose is temporarily disabled because MongoDB is not installed.
// const mongoose = require('mongoose');
// const Booking = require('./models/Booking');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection (Temporary File-based)
const DATA_FILE = path.join(__dirname, 'data', 'bookings.json');
const CONTACTS_FILE = path.join(__dirname, 'data', 'contacts.json');

// Ensure data files exist
[DATA_FILE, CONTACTS_FILE].forEach(file => {
  if (!fs.existsSync(file)) {
    if (!fs.existsSync(path.join(__dirname, 'data'))) {
      fs.mkdirSync(path.join(__dirname, 'data'));
    }
    fs.writeFileSync(file, '[]');
  }
});

/* 
// MongoDB Connection (Commented out until MongoDB is installed)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));
*/

// Email Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Routes
app.get('/', (req, res) => {
  res.send('API is running (File System Mode)...');
});

// Simple Admin Authentication Middleware
const authenticateAdmin = (req, res, next) => {
  const { authorization } = req.headers;
  // In production, use environment variable for password: process.env.ADMIN_PASSWORD
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'DanielAkanji';
  
  if (authorization === `Bearer ${ADMIN_PASSWORD}`) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// Admin Login Endpoint
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'The Daniel Akanji';
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'DanielAkanji';
  
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    res.json({ token: ADMIN_PASSWORD, message: 'Login successful' });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

// Get all bookings (Protected)
app.get('/api/bookings', authenticateAdmin, (req, res) => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const fileData = fs.readFileSync(DATA_FILE, 'utf8');
      res.json(JSON.parse(fileData));
    } else {
      res.json([]);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to read bookings' });
  }
});

// Get all contacts (Protected)
app.get('/api/contacts', authenticateAdmin, (req, res) => {
  try {
    if (fs.existsSync(CONTACTS_FILE)) {
      const fileData = fs.readFileSync(CONTACTS_FILE, 'utf8');
      res.json(JSON.parse(fileData));
    } else {
      res.json([]);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to read contacts' });
  }
});

// Booking Endpoint
app.post('/api/bookings', async (req, res) => {
  try {
    const { name, email, category, categoryOther, service, serviceOther, message } = req.body;

    console.log('Received booking data:', req.body);

    // Basic server-side validation
    if (!name || !email || !category || !service || !message) {
      console.log('Validation failed: Missing required fields');
      return res.status(400).json({ error: 'Please fill in all required fields' });
    }

    const newBooking = {
      id: Date.now().toString(),
      name,
      email,
      category,
      categoryOther,
      service,
      serviceOther,
      message,
      createdAt: new Date()
    };

    // Save to file
    const fileData = fs.readFileSync(DATA_FILE, 'utf8');
    const bookings = JSON.parse(fileData);
    bookings.push(newBooking);
    fs.writeFileSync(DATA_FILE, JSON.stringify(bookings, null, 2));

    /*
    // MongoDB Save (Commented out)
    const newBookingModel = new Booking({ ... });
    await newBookingModel.save();
    */

    console.log('Booking saved to file:', newBooking.id);

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'akanjidaniel03@gmail.com',
      subject: `New Booking Request from ${name}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Category:</strong> ${category} ${categoryOther ? `(${categoryOther})` : ''}</p>
        <p><strong>Service:</strong> ${service} ${serviceOther ? `(${serviceOther})` : ''}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.status(201).json({ message: 'Booking request received successfully', booking: newBooking });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ error: 'Server error: ' + error.message });
  }
});

// Contact Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    console.log('Received contact message:', req.body);

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please fill in all required fields' });
    }

    const newContact = {
      id: Date.now().toString(),
      name,
      email,
      subject: subject || 'No Subject',
      message,
      createdAt: new Date()
    };

    // Save to file
    const fileData = fs.readFileSync(CONTACTS_FILE, 'utf8');
    const contacts = JSON.parse(fileData);
    contacts.push(newContact);
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2));

    console.log('Contact message saved to file:', newContact.id);

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'akanjidaniel03@gmail.com',
      subject: `New Contact Message: ${subject || 'No Subject'}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.status(201).json({ message: 'Message sent successfully', contact: newContact });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ error: 'Server error: ' + error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

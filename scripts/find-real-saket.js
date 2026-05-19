const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://xpertance:XPERTANCE@cluster0.dnv2io.mongodb.net/hr_payroll?retryWrites=true&w=majority';

async function main() {
  console.log('Connecting to database...');
  await mongoose.connect(MONGODB_URI);
  console.log('Connected!');

  const email = 'saket.patil@innonsh.com';
  console.log(`Searching for email: ${email}`);

  const db = mongoose.connection.db;
  
  // 1. Search in users collection
  const user = await db.collection('users').findOne({ 
    $or: [
      { email: { $regex: new RegExp("^" + email + "$", "i") } },
      { username: { $regex: new RegExp("^" + email + "$", "i") } }
    ]
  });
  console.log('\n--- USERS COLLECTION RESULT ---');
  if (user) {
    console.log(JSON.stringify(user, null, 2));
  } else {
    console.log('No user found in users collection.');
  }

  // 2. Search in employees collection
  const employee = await db.collection('employees').findOne({
    $or: [
      { 'personalDetails.email': { $regex: new RegExp("^" + email + "$", "i") } },
      { 'email': { $regex: new RegExp("^" + email + "$", "i") } },
      { 'employeeId': 'INN005' }
    ]
  });

  console.log('\n--- EMPLOYEES COLLECTION RESULT ---');
  if (employee) {
    console.log(JSON.stringify(employee, null, 2));
  } else {
    console.log('No employee found in employees collection.');
  }

  await mongoose.disconnect();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

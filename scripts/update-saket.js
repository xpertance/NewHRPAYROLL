const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const MONGODB_URI = 'mongodb+srv://xpertance:XPERTANCE@cluster0.dnv2io.mongodb.net/hr_payroll?retryWrites=true&w=majority';

async function main() {
  console.log('Connecting to database...');
  await mongoose.connect(MONGODB_URI);
  console.log('Connected!');

  const db = mongoose.connection.db;
  const email = 'saket.patil@innonsh.com';
  
  const hashedPassword = await bcrypt.hash('Saket@123', 10);
  const dob = new Date('1995-05-15');

  console.log(`Updating employee ${email} with password "Saket@123" and DOB "1995-05-15"...`);

  const result = await db.collection('employees').updateOne(
    { 'personalDetails.email': { $regex: new RegExp("^" + email + "$", "i") } },
    { 
      $set: { 
        'password': hashedPassword,
        'personalDetails.dateOfBirth': dob
      } 
    }
  );

  console.log('Update result:', result);
  await mongoose.disconnect();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

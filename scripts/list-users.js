const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://xpertance:XPERTANCE@cluster0.dnv2io.mongodb.net/hr_payroll?retryWrites=true&w=majority';

async function main() {
  console.log('Connecting to database...');
  await mongoose.connect(MONGODB_URI);
  console.log('Connected!');

  const db = mongoose.connection.db;
  
  const users = await db.collection('users').find({}).toArray();
  console.log('\n--- ALL USERS ---');
  console.log(users.map(u => ({ _id: u._id, name: u.name, email: u.email, role: u.role })));

  await mongoose.disconnect();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

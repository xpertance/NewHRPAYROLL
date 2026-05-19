const bcrypt = require('bcryptjs');

const hash = "$2b$10$E/t97bFfQEM9IaqipYTx6elhF/LxwEFdXw3jwxiQ95GYx7PEcR3Lq";

const commonPasswords = [
  'Saket@123',
  'saket@123',
  '123456',
  'password',
  'Saket123',
  'saket123',
  'INN005',
  'inn005',
  'Saket',
  'saket',
  'Patil',
  'patil',
  'SaketPatil',
  'saketpatil'
];

async function main() {
  for (const pw of commonPasswords) {
    const match = await bcrypt.compare(pw, hash);
    if (match) {
      console.log(`FOUND MATCH: "${pw}"`);
      return;
    }
  }
  console.log('No match found among common passwords.');
}

main().catch(console.error);

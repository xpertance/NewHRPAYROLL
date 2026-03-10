const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

async function reset() {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB');

    const User = mongoose.connection.collection('users');

    const newPassword = await bcrypt.hash('admin123', 10);

    await User.updateOne({ email: 'admin@softtech.com' }, { $set: { password: newPassword } });

    console.log('Password for admin@softtech.com has been reset to: admin123');

    process.exit(0);
}

reset().catch(console.error);

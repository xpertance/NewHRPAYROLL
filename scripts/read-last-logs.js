const fs = require('fs');
const logPath = 'C:\\Users\\pc\\.gemini\\antigravity\\brain\\b374fda0-e7c0-4ffa-a2f3-54192cbbe84d\\.system_generated\\logs\\overview.txt';

try {
  const content = fs.readFileSync(logPath, 'utf8');
  const lines = content.split('\n');
  
  console.log(`Total lines: ${lines.length}`);
  
  lines.forEach((line, idx) => {
    if (line.toLowerCase().includes('unauthorized') || line.toLowerCase().includes('unautorized')) {
      console.log(`Line ${idx + 1}: ${line.substring(0, 300)}`);
    }
  });
} catch (err) {
  console.error(err);
}

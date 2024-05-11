const { exec } = require('child_process');

// Port number to use
const port = process.env.PORT || 3000;

// Command to execute
const command = `npx vite preview --port ${port} --host 0.0.0.0`;

// Execute the command
console.log(`Running command: ${command}`);
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Command stderr: ${stderr}`);
    return;
  }
  console.log(`Command output: ${stdout}`);
});
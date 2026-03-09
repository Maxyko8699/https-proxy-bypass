const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const certDir = path.join(__dirname, 'certificates');

if (!fs.existsSync(certDir)) {
    fs.mkdirSync(certDir, { recursive: true });
}

console.log('🔐 Generating self-signed certificate...');
try {
    execSync(`openssl req -x509 -newkey rsa:2048 -keyout ${certDir}/key.pem -out ${certDir}/cert.pem -days 365 -nodes -subj "/CN=localhost"`, { stdio: 'inherit' });
    console.log('✅ Certificate generated successfully!');
    console.log(`📁 Certificates saved to: ${certDir}`);
} catch (error) {
    console.error('❌ Error generating certificate:', error.message);
    console.log('\n📖 Make sure you have OpenSSL installed:');
    console.log('   macOS: brew install openssl');
    console.log('   Ubuntu/Debian: sudo apt-get install openssl');
    console.log('   Windows: Download from https://slproweb.com/products/Win32OpenSSL.html');
}
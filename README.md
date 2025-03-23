Rate Limiting Demo with Express.js

This demo showcases how rate limiting works in an Express.js server using `express-rate-limit`. When too many requests are made, a warning message appears, and excessive requests are blocked.

 Features:
- Limits each IP to 100 requests per 15 minutes.
- Displays a warning after 80 requests.
- Blocks excessive requests with an error message.

 🚀 Setup and Run the Demo

1️⃣ Install Node.js
Ensure you have Node.js installed. You can check by running:
```sh
node -v
```
If not installed, download it from [nodejs.org](https://nodejs.org/).

---

 2️⃣ Clone or Download the Repository
You can either:
- Clone using Git:
  ```sh
  git clone <repository_url>
  cd <repository_folder>
  ```
- Or download and extract the ZIP file.

---

 3️⃣ Install Dependencies
Navigate to the project folder and install required packages:
```sh
npm install
```

---

 4️⃣ Start the Server
Run the Express.js server:
```sh
node server.js
```
You should see:
```
Server running on port 3000
```

---

 5️⃣ Simulate Multiple Requests
In a new terminal, run:
```sh
node sendrequest.js
```
This will send 200 requests to the server.

---

 🛠 Expected Behavior:
1. The first 80 requests will work normally.
2. After 80 requests, the homepage (`/`) will show a warning.
3. At 100+ requests, the server blocks requests and displays a "Too many requests" message.

---

 📝 Notes:
- You can adjust the request limit in `server.js` (`max: 100`).
- Change `sendRequests(200);` in `sendrequest.js` to test with different limits.

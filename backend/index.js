require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const CHATENGINE_PRIVATE_KEY = process.env.CHATENGINE_PRIVATE_KEY;

if (!CHATENGINE_PRIVATE_KEY) {
  console.error(
    "FATAL: CHATENGINE_PRIVATE_KEY is not set. Copy .env.example to .env and fill in your ChatEngine.io private key."
  );
  process.exit(1);
}

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": CHATENGINE_PRIVATE_KEY } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res
      .status(e.response?.status || 500)
      .json(e.response?.data || { error: "Unknown error" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

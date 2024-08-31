import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://xinhua-api.netlify.app/api/gold-data"
    );
    console.log("response", response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: `Failed to fetch gold price ${error}` });
  }
}

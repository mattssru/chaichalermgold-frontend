import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://traderider.com/gold/wp-content/plugins/traderider-fx/api-gold.php?start_date=&end_date="
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch gold price" });
  }
}

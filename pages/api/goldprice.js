import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://traderider.com/gold/wp-content/plugins/traderider-fx/api-gold.php?start_date=&end_date="
    );

    if (response.data && response.data.items) {
      res.status(200).json(response.data);
    } else {
      res.status(404).json({ error: "Data not found" });
    }
  } catch (error) {
    console.error("Error fetching gold price:", error.message);
    res.status(500).json({ error: "Failed to fetch gold price" });
  }
}

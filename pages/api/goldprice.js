import axios from "axios";

export default async function handler(req, res) {
  try {
    console.log("Fetching gold price from external API...");
    const response = await axios.get(
      "https://traderider.com/gold/wp-content/plugins/traderider-fx/api-gold.php?start_date=&end_date="
    );

    console.log("Data received:", response.data);

    if (response.data && response.data.items) {
      res.status(200).json(response.data);
    } else {
      console.error("Data format error:", response.data);
      res.status(404).json({ error: "Data not found or format incorrect" });
    }
  } catch (error) {
    console.error("Error fetching gold price from API:", error.message);
    res.status(500).json({ error: "Failed to fetch gold price" });
  }
}

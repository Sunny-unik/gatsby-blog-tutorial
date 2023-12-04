//src/api/someApiName.js

export default function handler(req, res) {
  // for allow all origins to access without getting CORS error
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json({ message: "That is Quick! ==============>" });
}

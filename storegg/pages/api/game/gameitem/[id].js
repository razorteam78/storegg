import GameItem from "../../../../model/GameItem";
import dbConnect from "../../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const gameItem = await GameItem.findById(id);
        return res.status(200).json({ success: true, data: gameItem });
      } catch (error) {
        return res.json(400).json({ success: false });
      }

    default:
      break;
  }
};

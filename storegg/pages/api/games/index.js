import dbConnect from "../../../utils/dbConnect";
import Games from "../../../model/Games";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const games = await Games.find({});

        if (!games) return res.status(400).json({ success: false });

        return res.status(200).json({ success: true, data: games });
      } catch (error) {
        return res.status(400).json({ success: false });
        break;
      }

    default:
      break;
  }
};

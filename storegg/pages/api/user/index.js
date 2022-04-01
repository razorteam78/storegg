import dbConnect from "../../../utils/dbConnect";
import User from "../../../model/User";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const user = await User.find().select("-token -password");

        res.status(200).json({ succes: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false, error: error });
      }
      break;

    case "POST":
      try {
        const user = await User.create(req.body);

        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ error });
      }
      break;

    default:
  }
};

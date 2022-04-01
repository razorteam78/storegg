import User from "../../../model/User";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const user = await User.findById(id);

        res.status(200).json({ succes: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false, error: error });
      }
      break;

    case "PUT":
      try {
        const user = await User.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!user) {
          return res.status(400).json({
            success: false,
            message: "Something went wrong, cannot update user !",
          });
        }

        return res.status(200).json({ success: true, data: user });
      } catch (error) {
        return res.status(400).json({
          success: false,
          message: "Something went wrong, cannot update user !",
        });
      }

    case "DELETE":
      try {
        const user = await User.findByIdAndDelete(id);

        return res
          .status(200)
          .json({ success: true, message: "User has been deleted !" });
      } catch (error) {
        return res.status(400).json({ success: false });
      }

    default:
  }
};

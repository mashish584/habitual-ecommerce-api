import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

import upload from "../../../utils/upload";
import controller from "../../../controllers/category";
import { catchAsyncError, generateResponse } from "../../../utils";

const handler = nc<NextApiRequest, NextApiResponse>({
  onNoMatch: (req, res) => generateResponse("405", `Request type ${req.method} is not allowed.`, res),
})
  .use(upload().single("image"))
  .get(catchAsyncError(controller.getRequestHandler))
  .post(catchAsyncError(controller.postRequestHandler));

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};

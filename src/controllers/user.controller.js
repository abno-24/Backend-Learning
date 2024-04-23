import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, fullName, password } = req.body;
  console.log(req.body);

  if (
    [userName, email, fullName, password].some((filed) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }
});

export { registerUser };

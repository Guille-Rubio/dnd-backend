const accessTokenCookieOptions = {
  httpOnly: false,
  sameSite: "lax",
  secure: true,
  maxAge: 60 * 60 * 1000,
};

module.exports = accessTokenCookieOptions


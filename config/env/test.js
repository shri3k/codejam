module.exports = {
  db:           process.env.db || "mongodb://localhost/quiz",
  logFormat:    process.env.logFormat || "combined",
};
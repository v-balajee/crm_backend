module.exports = {
  DB_NAME: "crm_db",
  DB_URL:
    process.env.MONGODB_URI ||
    `mongodb+srv://${process.env.USERNAME_5}:${process.env.PASSWORD}@cluster0.dysort2.mongodb.net/crm_db`,
};

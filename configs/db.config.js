module.exports = {
  DB_NAME: "crm_db",

  DB_URL:
    process.env.MONGODB_URI ||
    `mongodb+srv://${process.env.USERNAME_1}:${process.env.PASSWORD}@cluster0.bqw9spk.mongodb.net/crm_db`,
};

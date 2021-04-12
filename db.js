const path = require('path')
var sqlite3 = require('sqlite3').verbose();

const dbPath = path.resolve(__dirname, 'leaderboard.db')
const db = new sqlite3.Database(dbPath)

db.run('CREATE TABLE IF NOT EXISTS players(id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT NOT NULL, last_name TEXT NOT NULL, position TEXT NOT NULL, score INTEGER NOT NULL)');

module.exports = db;
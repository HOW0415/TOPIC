let db = new sqlite3.Database('./SQLite/TOPIC.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the chinook database.');
  });

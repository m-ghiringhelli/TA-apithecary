const pool = require('../utils/pool');
const { Quote } = require('./Quote');

class Character {
  id;
  first_name;
  last_name;
  quotes;

  constructor(row) {
    this.id = row.id;
    this.first_name = row.first_name;
    this.last_name = row.last_name;
    this.quotes =
      row.quotes.length > 0 ? row.quotes.map((quote) => new Quote(quote)) : [];
  }

  static async getAll() {
    const { rows } = await pool.query(`
      SELECT characters.*,
        coalesce(
          json_agg(to_jsonb(quotes))
          filter (WHERE quotes.id IS NOT NULL), '[]') as quotes
      FROM characters left join quotes
      ON characters.id = quotes.character_id
      GROUP BY characters.id;
    `);
    console.log('model getAll', rows);
    return rows;
  }
}

module.exports = Character;

import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("firstName").notNullable();
    table.string("lastName").notNullable();
    table.string("email").unique().notNullable();
    table.string("password").notNullable();
    table.integer("age");
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("users");
}

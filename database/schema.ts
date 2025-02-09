// import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { pgTable, uuid, serial, text, varchar } from "drizzle-orm/pg-core";

import { drizzle } from 'drizzle-orm/node-postgres';


// export const guestBook = sqliteTable("guestBook", {
//   id: integer().primaryKey({ autoIncrement: true }),
//   name: text().notNull(),
//   email: text().notNull().unique(),
// });


export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  phone: varchar('phone', { length: 256 }),
});
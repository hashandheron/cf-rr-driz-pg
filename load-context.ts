import postgres from "postgres"
import { drizzle, type NodePgDatabase } from 'drizzle-orm/node-postgres';
// import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import * as schema from "./database/schema";

type GetLoadContextArgs = {
  request: Request;
  context: {
    cloudflare: {
      env: Env;
      caches: CacheStorage;
      cf: Request["cf"];
      ctx: ExecutionContext;
    };
    db: NodePgDatabase<typeof schema>;
  };
};

declare module "react-router" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface AppLoadContext extends ReturnType<typeof getLoadContext> {
    // This will merge the result of `getLoadContext` into the `AppLoadContext`
  }
}

export function getLoadContext({ context }: GetLoadContextArgs) {
  // return context;
  const db = drizzle(context.cloudflare.env.HYPERDRIVE.connectionString, { schema });
  return {
    ...context,
    db
  }
}

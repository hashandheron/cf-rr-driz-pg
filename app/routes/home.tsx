import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

import * as schema from "~/database/schema";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ context }: Route.LoaderArgs) {
  const users = await context.db.query.users.findMany({
    columns: {
      id: true,
      fullName: true,
    },
  });

  return {
    users,
    message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE,
  };
}

export default function Home({loaderData}: Route.Props) {
  return <Welcome users={loaderData.users}/>;
}

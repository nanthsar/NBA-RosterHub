import { redirect } from '@sveltejs/kit';
import db from "$lib/db.js";

export async function load({ params }) {
  let team = await db.getTeam(params.teams_id)
  return team
}

; 
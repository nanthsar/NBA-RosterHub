import { redirect } from '@sveltejs/kit';
import db from "$lib/db.js";

export async function load({ params }) {
  const team = await db.getTeam(params.teams_id);
  const players = await db.getPlayersByTeamId(team.team_id);
  return { team, players };
};
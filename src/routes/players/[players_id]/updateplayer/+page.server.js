import { redirect } from '@sveltejs/kit';
import db from "$lib/db.js";


export async function load({ params }) {
  const player = await db.getPlayer(params.players_id);
  const teams = await db.getTeams();
  return {
    player, 
    teams};
}

export const actions = {
  update: async ({ request }) => {
    const data = await request.formData();
    const player = {
      _id: data.get("id"),
      first_name: data.get("first_name"),
      last_name: data.get("last_name"),
      team_id: Number(data.get("team_id")),
      position: data.get("position"),
      trikotnummer: Number(data.get("trikotnummer")),
      geburtsdatum: data.get("geburtsdatum"),
      größe: parseFloat(data.get("grösse")),
      draft_jahr: Number(data.get("draft_jahr")),
    }
    await db.updatePlayer(player);
    return { success: true }
  }
}
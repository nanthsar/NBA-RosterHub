import { redirect } from '@sveltejs/kit';
import db from "$lib/db.js";

export async function load({ params }) {
  const player = await db.getPlayer(params.players_id)
  const teams = await db.getTeams();
  return { player, teams };
}

export const actions = {
  delete: async ({ params }) => {
    const id = params.players_id;
    await db.deletePlayer(id);
    throw redirect(303, '/players');
  }

}; 


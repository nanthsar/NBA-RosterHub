import { redirect } from '@sveltejs/kit';
import db from "$lib/db.js";

export async function load({ params }) {
  const player = await db.getPlayer(params.players_id)
  
  return player;
}

/* Params Erklärung: params steht für Parameter aus der URL, also die dynamischen Teile deiner Route – zum Beispiel die:id oder[teams_id] in einer Datei oder Ordnerstruktur
 */

export const actions = {
  delete: async ({ params }) => {
    const id = params.players_id;
    await db.deletePlayer(id);
    throw redirect(303, '/players');
  }

}; 


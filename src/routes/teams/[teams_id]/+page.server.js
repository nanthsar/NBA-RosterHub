import { redirect } from '@sveltejs/kit';
import db from "$lib/db.js";

export async function load({ params }) {
  let team = await db.getTeam(params.teams_id)
  return team
}
/* Params Erklärung: params steht für Parameter aus der URL, also die dynamischen Teile deiner Route – zum Beispiel die:id oder[teams_id] in einer Datei oder Ordnerstruktur
 */

/* export const actions = {
  delete: async ({ params }) => {
    const id = params.movies_id;
    await db.deleteMovie(id);
    throw redirect(303, '/movies');
  }
  
} */

; 
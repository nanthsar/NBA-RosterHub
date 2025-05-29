import { redirect } from '@sveltejs/kit';
import db from "$lib/db.js";

export async function load({ params }) {
  let movie = await db.getMovie(params.movies_id)
  return movie
}

export const actions = {
  delete: async ({ params }) => {
    const id = params.movies_id;
    await db.deleteMovie(id);
    throw redirect(303, '/movies');
  }
  
}; 
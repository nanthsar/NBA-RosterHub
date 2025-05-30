import { redirect } from '@sveltejs/kit';
import db from "$lib/db.js";


export async function load({ params }) {
  const movie = await db.getMovie(params.movies_id);
  return  movie;
}

export const actions = {
  update: async ({request}) =>   {
    const data = await request.formData();
    let movie = {
        _id: data.get("id"),
        title: data.get("title"),
        year: data.get("year"),
        length: data.get("length")
    }
    await db.updateMovie(movie);
    return { success: true} 
  }
  }
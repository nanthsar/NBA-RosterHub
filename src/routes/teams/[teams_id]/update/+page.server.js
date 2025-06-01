import { redirect } from '@sveltejs/kit';
import db from "$lib/db.js";


export async function load({ params }) {
  const team = await db.getTeam(params.teams_id);
  return  team ;
}

export const actions = {
  update: async ({ request }) => {
    const data = await request.formData();
    let team = {
      _id: data.get("id"),
      team_name: data.get("team_name"),
      city: data.get("city"),
      conference: data.get("conference"),
      coach: data.get("coach"),
      description: data.get("description"),
      logo: data.get("logo"),
    }
    await db.updateTeam(team);
    return { success: true }
  }
}
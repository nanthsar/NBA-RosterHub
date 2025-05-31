import db from "$lib/db.js";

export const actions = {
    create: async ({ request }) => {

        const data = await request.formData();

        let player = {
            first_name: data.get("first_name"),
            last_name: data.get("last_name"),
            team_id: Number(data.get("team_id")),
            position: data.get("position"),
            trikotnummer: Number(data.get("trikotnummer")),
            geburtsdatum: data.get("geburtsdatum"),
            größe: parseFloat(data.get("grösse")),
            draft_jahr: Number(data.get("draft_jahr"))
        };

        /* Hier Aufruf Create von db.js */
        db.createPlayer(player)
        return { success: true }

    }
}
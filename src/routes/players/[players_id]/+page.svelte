<script>
    let { data, teamdata } = $props();
    let player = $state(data);


    function getPlayersTeam(team_id) {
        const team = teams.find((t) => t.team_id === team_id);
        return team.team_name;
    }

    function getPositionImage(position) {
        return `/images/${
            {
                "Point Guard": "point_guard.png",
                "Shooting Guard": "shooting_guard.png",
                "Small Forward": "small_forward.png",
                "Power Forward": "power_forward.png",
                Center: "center.png",
            }[position]
        }`;
    }

    function confirmDelete(event) {
        if (
            !confirm(
                `Are you sure you want to delete the player ${data.first_name} ${data.last_name}?`,
            )
        ) {
            event.preventDefault(); // korrekt: Event verhindern
        }
    }
</script>

<div class="details">
    <a href="/players">Back</a>

    <br />
    <br />
    <div class="details-text">
        <h2><strong>{data.first_name} {data.last_name}</strong></h2>
        <p><strong>Date of Birth:</strong> {data.geburtsdatum}</p>
        <p><strong>Height:</strong> {data.größe} m</p>
        <p><strong>Jersey Nr.:</strong> {data.trikotnummer}</p>
        <p><strong>Draft Year:</strong> {data.draft_jahr}</p>
        <p><strong>Position:</strong> {data.position}</p>
        <img src={getPositionImage(data.position)} alt="" class="img_position"/>
            <br>
            <br>
        <div class="d-flex gap-2">
            <!-- Dank dieser Klasse sind Update und Delete Buttons nebeneinander. -->
            <a href={"/players/" + data._id + "/updateplayer"} class="btn custom-btn">
                Update Player
            </a>

            <form method="POST" action="?/delete" onsubmit={confirmDelete}>
                <button type="submit" name="delete" class="btn btn-danger">
                    Delete Player
                </button>
            </form>
        </div>
    </div>
</div>

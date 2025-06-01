<script>
    let { data } = $props();
    let player = data.player;
    let teams = data.teams;

    function getTeamByPlayer(team_id) {
        return teams.find((t) => t.team_id === team_id);
    }

    function getPositionImage(position) {
        return `/images/${
            {
                "Point Guard": "point_guard.png",
                "Shooting Guard": "shooting_guard.png",
                "Small Forward": "small_forward.png",
                "Power Forward": "power_forward.png",
                "Center": "center.png",
            }[position]
        }`;
    }

    function confirmDelete(event) {
        if (
            !confirm(
                `Are you sure you want to delete the player ${player.first_name} ${player.last_name}?`,
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
        <h2><strong>{player.first_name} {player.last_name}</strong><img src="{getTeamByPlayer(player.team_id).logo}" alt="" class="nba-logo" /></h2>
        <br>
        <p><strong>Team:</strong> {getTeamByPlayer(player.team_id).team_name}</p>
        <p><strong>Date of Birth:</strong> {player.geburtsdatum}</p>
        <p><strong>Height:</strong> {player.größe} m</p>
        <p><strong>Jersey Nr.:</strong> {player.trikotnummer}</p>
        <p><strong>Draft Year:</strong> {player.draft_jahr}</p>
        <p><strong>Position:</strong> {player.position}</p>
        <img
            src={getPositionImage(player.position)}
            alt=""
            class="img_position"
        />
        <br />
        <br />
        <div class="d-flex gap-2">
            <!-- Dank dieser Klasse sind Update und Delete Buttons nebeneinander. -->
            <a
                href={"/players/" + player._id + "/updateplayer"}
                class="btn custom-btn"
            >
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

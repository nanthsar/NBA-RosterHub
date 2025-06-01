<script>
    let { data } = $props();
    let team = data.team;
    let players = data.players;
</script>

<div class="details">
    <a href="/teams">Back</a>

    <div class="details-logo">
        <img src={team.logo} alt={team.team_name} class="logo-size" />

        <div class="details-text">
            <h2><strong>{team.team_name}</strong></h2>
            <br />
            <p><strong>City:</strong> {team.city}</p>
            <p><strong>Conference:</strong> {team.conference}</p>
            <p><strong>Coach:</strong> {team.coach}</p>
            <p><strong>Line up {team.team_name}:</strong></p>
            <div class="team-players mt-4">
                <ul>
                    {#each players as player}
                        <li>
                            {player.first_name}
                            {player.last_name} — {player.position}
                        </li>
                    {/each}
                </ul>
            </div>
            <p><strong>Description:</strong> {team.description}</p>
            <p><strong>NBA Championships:</strong></p>
            <ul class="champions-list">
                {#each team.titel as titel}
                    <li>{titel}</li>
                {/each}
            </ul>

            <a href={"/teams/" + team._id + "/update"} class="btn custom-btn"
                >Update Team</a
            >
        </div>
    </div>
</div>

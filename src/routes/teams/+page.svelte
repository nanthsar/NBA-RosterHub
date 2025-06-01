<script>
    let { data } = $props();
    let teams = data.teams;
    let players = data.players;

    function getPlayersByTeam(team_id) {
        const result = players.filter((p) => p.team_id === team_id);
        return result;
    }
</script>

<br />
<h1>NBA Teams</h1>
<br />

<div class="team-grid">
    {#each teams as team}
        <div class="team-item">
            <a href={"/teams/" + team._id} class="team-link">
                <img src={team.logo} alt={team.team_name} class="team-logo" />
            </a>
            <div class="team-information">
                <a href={"/teams/" + team._id} class="team-link">
                    <div><b>{team.team_name}</b></div>
                </a>
                <div>City: {team.city}</div>
                <div>{team.conference}</div>

                <div class="team-players">Players: {getPlayersByTeam(team.team_id).length}</div>
            </div>
        </div>
    {/each}
</div>



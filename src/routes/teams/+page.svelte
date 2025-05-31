<script >
    let { data } = $props();
    let teams = data.teams;
</script>
<br>
<h1>NBA Teams</h1>
<br>

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
            </div>
        </div>
    {/each}
</div>

<br />
<small class="disclaimer">
    Rechtlicher Hinweis: Die Marke NBA und die Logos gehören zur offiziellen
    Lizenz der
    <a href="https://www.nba.com">NBA</a>.
</small>

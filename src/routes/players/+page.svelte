<script>
  let { data } = $props();
  let players = data.players;
  let teams = data.teams;

  function getPlayersTeam(team_id) {
    const team = teams.find((t) => t.team_id === team_id);
    return team.team_name
  }

    function getPlayersTeamlogo(team_id) {
    const team = teams.find((t) => t.team_id === team_id);
    return team.logo
  }
</script>

<br />
<h1>NBA Player</h1>

<div class="adding">
  <a href="/players/create">+Add a new Player</a>
  <br />
  <br />
</div>

<div class="container">
  <div class="row">
    {#each players as player}
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <a href={"/players/" + player._id} class="text-decoration-none">
              <h5 class="card-title">{player.first_name} {player.last_name}</h5>
            </a>
            <p class="card-text">Position: {player.position}</p>
            <p class="card-text">Team: {getPlayersTeam(player.team_id)} <img src={getPlayersTeamlogo(player.team_id)} alt="" style="width: 45px; height: auto; float: right;" /></p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<script>
    let { data } = $props();
    let players = data.players;
</script>

<br>
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
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<br />
<small class="disclaimer">
    Rechtlicher Hinweis: Die Marke NBA und die Logos gehören zur offiziellen
    Lizenz der
    <a href="https://www.nba.com">NBA</a>.
</small>
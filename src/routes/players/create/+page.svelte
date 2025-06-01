<script>
  let { form } = $props();
  const teamNames = {
    1: "Atlanta Hawks",
    2: "Boston Celtics",
    3: "Brooklyn Nets",
    4: "Charlotte Hornets",
    5: "Chicago Bulls",
    6: "Cleveland Cavaliers",
    7: "Detroit Pistons",
    8: "Indiana Pacers",
    9: "Miami Heat",
    10: "Milwaukee Bucks",
    11: "New York Knicks",
    12: "Orlando Magic",
    13: "Philadelphia 76ers",
    14: "Toronto Raptors",
    15: "Washington Wizards",
    16: "Dallas Mavericks",
    17: "Denver Nuggets",
    18: "Golden State Warriors",
    19: "Houston Rockets",
    20: "LA Clippers",
    21: "Los Angeles Lakers",
    22: "Memphis Grizzlies",
    23: "Minnesota Timberwolves",
    24: "New Orleans Pelicans",
    25: "Oklahoma City Thunder",
    26: "Phoenix Suns",
    27: "Portland Trail Blazers",
    28: "Sacramento Kings",
    29: "San Antonio Spurs",
    30: "Utah Jazz",
  };
</script>

<div class="form-container">
  <a href="/players">Back</a>
  <h1>Add a Player</h1>

  <form method="POST" action="?/create">
    <div class="mb-3">
      <label class="form-label" for="first_name">First Name</label>
      <input name="first_name" class="form-control" type="text" required />
    </div>

    <div class="mb-3">
      <label class="form-label" for="last_name">Last Name</label>
      <input name="last_name" class="form-control" type="text" required />
    </div>

    <div class="mb-3">
      <label class="form-label" for="team_id">Team</label>
      <select name="team_id" class="form-control" required>
        <option value="">-- Please choose a team --</option>
        {#each Object.entries(teamNames) as [id, name]}
          <option value={id}>{name}</option>
        {/each}
      </select>
    </div>

    <div class="mb-3">
      <label class="form-label" for="postition">Position</label>
      <select name="position" class="form-control" required>
        <option value="">-- Please choose a position --</option>
        <option value="Point Guard">Point Guard</option>
        <option value="Shooting Guard">Shooting Guard</option>
        <option value="Small Forward">Small Forward</option>
        <option value="Power Forward">Power Forward</option>
        <option value="Center">Center</option>
      </select>
    </div>

    <div class="mb-3">
      <label class="form-label" for="trikotnummer">Jersey Number</label>
      <input name="trikotnummer" class="form-control" type="number" required />
    </div>

    <div class="mb-3">
      <label class="form-label" for="geburtsdatum">Date of Birth</label>
      <input name="geburtsdatum" class="form-control" type="date" required />
    </div>

    <div class="mb-3">
      <label class="form-label" for="grösse">Height (in meters)</label>
      <input
        name="grösse"
        class="form-control"
        type="number"
        step="0.01"
        required
      />
    </div>

    <div class="mb-3">
      <label class="form-label" for="draft_jahr">Draft Year</label>
      <input name="draft_jahr" class="form-control" type="number" required />
    </div>

    <button type="submit" class="btn custom-btn">Add Player</button>
  </form>

  <br />
  {#if form?.success}
    <p style="color: green;">Player added successfully!</p>
  {/if}
</div>

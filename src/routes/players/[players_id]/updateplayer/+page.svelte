<script>
  let { form, data } = $props();

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
    30: "Utah Jazz"
  };
</script>

<div class="form-container">
  <a href={"/players/" + data._id}>Back</a>
  <h1>Update player</h1>

  <form method="POST" action="?/update">
    <input value={data._id} name="id" class="form-control" type="hidden" />

    <div class="mb-3">
      <label for="first_name" class="form-label">First Name</label>
      <input
        id="first_name"
        name="first_name"
        value={data.first_name}
        class="form-control"
        type="text"
      />
    </div>

    <div class="mb-3">
      <label for="last_name" class="form-label">Last Name</label>
      <input
        id="last_name"
        name="last_name"
        value={data.last_name}
        class="form-control"
        type="text"
      />
    </div>

    <div class="mb-3">
      <label class="form-label">Team</label>
      <select class="form-control" name="team_id">
        {#each Object.entries(teamNames) as [id, name]}
          <option value={id} selected={Number(id) === data.team_id}
            >{name}</option
          >
        {/each}
      </select>
    </div>

    <div class="mb-3">
      <label class="form-label">Position</label>
      <select name="position" class="form-control">
        <option value="" disabled selected>-- Please choose Position --</option>
        <option value="Point Guard">Point Guard</option>
        <option value="Shooting Guard">Shooting Guard</option>
        <option value="Small Forward">Small Forward</option>
        <option value="Power Forward">Power Forward</option>
        <option value="Center">Center</option>
      </select>
    </div>

    <div class="mb-3">
      <label for="trikotnummer" class="form-label">Jersey Number</label>
      <input
        id="trikotnummer"
        name="trikotnummer"
        value={data.trikotnummer}
        class="form-control"
        type="number"
      />
    </div>

    <div class="mb-3">
      <label for="geburtsdatum" class="form-label">Date of Birth</label>
      <input
        id="geburtsdatum"
        name="geburtsdatum"
        value={data.geburtsdatum}
        class="form-control"
        type="date"
      />
    </div>

    <div class="mb-3">
      <label for="grösse" class="form-label">Height (m)</label>
      <input
        id="grösse"
        name="grösse"
        value={data.größe}
        class="form-control"
        type="number"
        step="0.01"
      />
    </div>

    <div class="mb-3">
      <label for="draft_jahr" class="form-label">Draft Year</label>
      <input
        id="draft_jahr"
        name="draft_jahr"
        value={data.draft_jahr}
        class="form-control"
        type="number"
      />
    </div>

    <button type="submit" class="btn custom-btn">Update Player</button>
  </form>

  <br />
  {#if form?.success}
    <p style="color: green">Player updated</p>
  {/if}
</div>

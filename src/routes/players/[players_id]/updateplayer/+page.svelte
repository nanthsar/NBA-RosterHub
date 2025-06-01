<script>
  let { form, data } = $props();
  let player = data.player;
  let teams = data.teams;
</script>

<div class="form-container">
  <a href={"/players/" + player._id}>Back</a>
  <h1>Update player</h1>

  <form method="POST" action="?/update">
    <input value={player._id} name="id" class="form-control" type="hidden" />

    <div class="mb-3">
      <label for="first_name" class="form-label">First Name</label>
      <input
        id="first_name"
        name="first_name"
        value={player.first_name}
        class="form-control"
        type="text"
      />
    </div>

    <div class="mb-3">
      <label for="last_name" class="form-label">Last Name</label>
      <input
        id="last_name"
        name="last_name"
        value={player.last_name}
        class="form-control"
        type="text"
      />
    </div>

    <div class="mb-3">
      <label class="form-label">Team</label>
      <select name="team_id" class="form-control">
        {#each teams as team}
          <option
            value={team.team_id}
            selected={Number(team.team_id) === Number(player.team_id)}
          >
            {team.team_name}
          </option>
        {/each}
      </select>
    </div>

    <div class="mb-3">
      <label class="form-label">Position</label>
      <select name="position" class="form-control">
        <option value="" disabled>-- Please choose Position --</option>
        <option value="Point Guard" selected={player.position === "Point Guard"}
          >Point Guard</option
        >
        <option
          value="Shooting Guard"
          selected={player.position === "Shooting Guard"}>Shooting Guard</option
        >
        <option
          value="Small Forward"
          selected={player.position === "Small Forward"}>Small Forward</option
        >
        <option
          value="Power Forward"
          selected={player.position === "Power Forward"}>Power Forward</option
        >
        <option value="Center" selected={player.position === "Center"}
          >Center</option
        >
      </select>
    </div>

    <div class="mb-3">
      <label for="trikotnummer" class="form-label">Jersey Number</label>
      <input
        id="trikotnummer"
        name="trikotnummer"
        value={player.trikotnummer}
        class="form-control"
        type="number"
      />
    </div>

    <div class="mb-3">
      <label for="geburtsdatum" class="form-label">Date of Birth</label>
      <input
        id="geburtsdatum"
        name="geburtsdatum"
        value={player.geburtsdatum}
        class="form-control"
        type="date"
      />
    </div>

    <div class="mb-3">
      <label for="grösse" class="form-label">Height (m)</label>
      <input
        id="grösse"
        name="grösse"
        value={player.größe}
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
        value={player.draft_jahr}
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

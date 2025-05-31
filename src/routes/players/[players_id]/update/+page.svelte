<script>
  let { form, data } = $props();
</script>

<div class="form-container">
  <a href={"/teams/" + data._id}>Back</a>
  <h1>Update Team</h1>

  <form method="POST" action="?/update">
    <input value={data._id} name="id" class="form-control" type="hidden" />

    <div class="mb-3">
      <label class="form-label">Team Name</label>
      <input
        value={data.team_name}
        name="team_name"
        class="form-control"
        type="text"
      />
    </div>

    <div class="mb-3">
      <label class="form-label">City</label>
      <input value={data.city} name="city" class="form-control" type="text" />
    </div>

    <div class="mb-3">
      <label class="form-label">Conference</label>
      <input
        value={data.conference}
        name="conference"
        class="form-control"
        type="text"
      />
    </div>

    <div class="mb-3">
      <label class="form-label">Coach</label>
      <input value={data.coach} name="coach" class="form-control" type="text" />
    </div>

    <div class="mb-3">
      <label class="form-label">Logo (Pfad zur Bilddatei)</label>
      <input value={data.logo} name="logo" class="form-control" type="text" />
    </div>

    <div class="mb-3">
      <label class="form-label">Description</label>
      <textarea name="description" class="form-control"
      rows="10">{data.description}
      </textarea>
    </div>

    <button type="submit" class="btn custom-btn">Update Team</button>
  </form>

  <br />
  {#if form?.success}
    <p style="color: green">Team updated</p>
  {/if}
</div>

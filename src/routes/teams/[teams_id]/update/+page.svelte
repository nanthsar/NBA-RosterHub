<script>
    let { form, data } = $props();
</script>

<div class="form-container">
<a href={"/movies/" + data._id}>Back</a>
<h1>Update movie</h1>

<form method="POST" action="?/update">

    <input value= {data._id} name="id" class="form-control" type="hidden" />

  <div class="mb-3">
    <label for="" class="form-label">Title</label>
    <input value= {data.title} name="title" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Year</label>
    <input value={data.year} name="year" class="form-control" type="number" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Length</label>
    <input value={data.length} name="length" class="form-control" type="text" />
  </div>
  <button type="submit" class="btn btn-primary"> Update Movie </button>
</form>
<br>
{#if form?.success}
  <p>Movie updated</p>
{/if}
</div>


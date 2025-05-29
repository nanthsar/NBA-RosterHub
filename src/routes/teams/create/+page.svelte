<script>
  let { form } = $props();
</script>


<div class="form-container">
<a href="/movies">Back</a>
<h1>Add a movie</h1>
<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="" class="form-label">Title</label>
    <input name="title" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Year</label>
    <input name="year" class="form-control" type="number" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Length</label>
    <input name="length" class="form-control" type="text" />
  </div>
  <button type="submit" class="btn btn-primary"> Add Movie </button>
</form>
<br>
{#if form?.success}
  <p>Movie added</p>
{/if}
</div>

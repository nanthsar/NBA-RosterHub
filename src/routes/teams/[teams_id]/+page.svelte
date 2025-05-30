<script>
    let { data } = $props();
    let teams = data.movies;
/*     function confirmDelete(movie) {
        if (!confirm("Are you sure you want to delete this movie?")) {
            movie.preventDefault(); // cancel form submission
        }
    } */
</script>

<div class="details">
    <a href="/teams">Back</a>
    <h1>Teams Details</h1>

    <div class="details-logo">
        <img src={data.logo} alt={data.team_name} />

        <div class="details-text">
            <p>{data._id}</p>
            <h2>{data.team_name}</h2>
            <p>Cast:</p>
            <ul>
                {#each data.actors as actor}
                    <li>{actor}</li>
                {/each}
            </ul>
            <a href={"/movies/" + data._id + "/update"} class="btn btn-primary"
                >Update Movie</a
            >
<!--             <form method="POST" action="?/delete" on:submit={confirmDelete}>
                <button type="submit" name="delete" class="btn btn-danger"
                    >Delete Movie</button
                >
            </form> -->
        </div>
    </div>
</div>

<script>
    let { data } = $props();
    let movies = data.movies;
    function confirmDelete(movie) {
        if (!confirm("Are you sure you want to delete this movie?")) {
            movie.preventDefault(); // cancel form submission
        }
    }
</script>

<div class="details">
    <a href="/movies">Back</a>
    <h1>Movies Details</h1>

    <div class="details-poster">
        <img src={data.poster} alt={data.title} />

        <div class="details-text">
            <p>{data._id}</p>
            <h2>{data.title}</h2>
            <p>Cast:</p>
            <ul>
                {#each data.actors as actor}
                    <li>{actor}</li>
                {/each}
            </ul>
            <a href={"/movies/" + data._id + "/update"} class="btn btn-primary"
                >Update Movie</a
            >
            <form method="POST" action="?/delete" on:submit={confirmDelete}>
                <button type="submit" name="delete" class="btn btn-danger"
                    >Delete Movie</button
                >
            </form>
        </div>
    </div>
</div>

<script>
let { data } = $props()

let movies = data.movies

</script>

<h3>
    Daten sind mit ChatGPT generiert und Bilder aus dem Internet heruntergeladen
    worden.
</h3>

<div class="adding">
<a href="/movies/create">+add Movie</a>
<br>
<br>
</div>
<div class="movie-grid">
    {#each movies as movie}
        <div class="movie-item">
            <img src={movie.poster} alt="" />
            <div class="movie-information">
                <a href={"/movies/" + movie._id}>
                <div><b>{movie.title}</b></div>
                </a>
                <div>Year: {movie.year}</div>
                <div>Length: {movie.length}</div>
            </div>
        </div>
    {/each}
</div>

<script>
    let { data } = $props();
    let teams = $state(data);
    /*     function confirmDelete(movie) {
        if (!confirm("Are you sure you want to delete this movie?")) {
            movie.preventDefault(); // cancel form submission
        }
    } */
</script>

<div class="details">
    <a href="/teams">Back</a>

    <div class="details-logo">
        <img src={data.logo} alt={data.team_name} class="logo-size" />

        <div class="details-text">
            <h2><strong>{data.team_name}</strong></h2>
            <br />
            <p><strong>City:</strong> {data.city}</p>
            <p><strong>Conference:</strong> {data.conference}</p>
            <p><strong>Coach:</strong> {data.coach}</p>
            <p>
                <strong>
                    <a href={"/player" + data._id}>
                        Starting Five der
                        {data.team_name} 2024
                    </a>
                </strong>
            </p>
            <p><strong>Description:</strong> {data.description}</p>
            <p><strong>NBA Championships:</strong></p>
            <ul class="champions-list">
                {#each data.titel as titel}
                    <li>{titel}</li>
                {/each}
            </ul>

            <a href={"/teams/" + data._id + "/update"} class="btn custom-btn"
                >Update Team</a
            >

            <!--             <form method="POST" action="?/delete" on:submit={confirmDelete}>
                <button type="submit" name="delete" class="btn btn-danger"
                    >Delete Movie</button
                >
            </form> -->
        </div>
    </div>
</div>

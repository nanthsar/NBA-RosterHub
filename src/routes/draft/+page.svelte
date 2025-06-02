<script>
    let { data } = $props();
    const teams = data.teams;

    function getTeamById(id) {
        return teams.find((t) => t.team_id === id);
    }

    const draftWarscheinlichkeit = [
        { team_id: 30, odds: 14 },
        { team_id: 15, odds: 14 },
        { team_id: 4, odds: 14 },
        { team_id: 24, odds: 12.5 },
        { team_id: 13, odds: 10.5 },
        { team_id: 3, odds: 9 },
        { team_id: 14, odds: 7.5 },
        { team_id: 29, odds: 6 },
        { team_id: 19, odds: 3.8 },
        { team_id: 27, odds: 3.7 },
        { team_id: 16, odds: 1.8 },
        { team_id: 5, odds: 1.7 },
        { team_id: 28, odds: 0.8 },
        { team_id: 1, odds: 0.7 },
    ];

    let platzierung = $state([]);

    function runDraft() {
        const pool = draftWarscheinlichkeit.flatMap(({ team_id, odds }) =>
            Array(Math.round(odds * 10)).fill(team_id),
        );

        const selected = new Set();
        platzierung = [];

        while (selected.size < draftWarscheinlichkeit.length) {
            const id = pool[Math.floor(Math.random() * pool.length)];
            if (!selected.has(id)) {
                selected.add(id);
                platzierung.push(id);
            }
        }
    }
</script>

<div class="container mt-5">
    <h1>NBA Draft Lottery 2025</h1>
    <p class="text-center">
        Simulate the official draft order based on <a
            href="https://www.nba.com/jazz/news/2025-nba-draft-lottery-what-you-need-to-know"
            target="_blank"
            >weighted team odds
        </a>.
    </p>

    <div class="text-center my-4">
        <button class="btn custom-btn" onclick={runDraft}>Run Lottery</button>
    </div>

    {#if platzierung.length > 0}
        <ul class="list-group mx-auto" style="max-width: 600px;">
            {#each platzierung as id, i}
                {#if getTeamById(id)}
                    <li class="list-group-item d-flex align-items-center gap-3">
                        <strong style="width: 80px; display: inline-block;"
                            >Pick {i + 1}:</strong
                        >
                        <img
                            src={getTeamById(id).logo}
                            alt=""
                            class="nba-logo"
                        />
                        <span>{getTeamById(id).team_name}</span>
                    </li>
                {/if}
            {/each}
        </ul>
    {/if}
</div>
<br />

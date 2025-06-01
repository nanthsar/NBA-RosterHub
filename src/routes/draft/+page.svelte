<script>
	const teamsWithOdds = [
		{ name: "Utah Jazz", odds: 14 },
		{ name: "Washington Wizards", odds: 14 },
		{ name: "Charlotte Hornets", odds: 14 },
		{ name: "New Orleans Pelicans", odds: 12.5 },
		{ name: "Philadelphia 76ers", odds: 10.5 },
		{ name: "Brooklyn Nets", odds: 9 },
		{ name: "Toronto Raptors", odds: 7.5 },
		{ name: "San Antonio Spurs", odds: 6 },
		{ name: "Houston Rockets", odds: 3.8 },
		{ name: "Portland Trail Blazers", odds: 3.7 },
		{ name: "Dallas Mavericks", odds: 1.8 },
		{ name: "Chicago Bulls", odds: 1.7 },
		{ name: "Sacramento", odds: 0.8 },
		{ name: "Atlanta Hawks", odds: 0.7 }
	];

	let draftOrder = [];
	let topPickLogo = null;

	function runFullDraftLottery() {
		let pool = [];
		teamsWithOdds.forEach(team => {
			const weight = Math.round(team.odds * 10);
			for (let i = 0; i < weight; i++) {
				pool.push(team.name);
			}
		});

		const seen = new Set();
		draftOrder = [];

		while (seen.size < teamsWithOdds.length && pool.length > 0) {
			const index = Math.floor(Math.random() * pool.length);
			const selected = pool[index];

			if (!seen.has(selected)) {
				seen.add(selected);
				draftOrder.push(selected);
			}
			pool = pool.filter((t) => t !== selected);
		}

		if (draftOrder.length > 0) {
			const firstTeam = draftOrder[0].toLowerCase().replaceAll(" ", "_");
			topPickLogo = `/images/${firstTeam}.jpg`;
		}
	}
</script>

<div class="lottery">
	<h1>NBA Draft Lottery 2025</h1>
	<p>Simulate the complete weighted NBA RosterHub lottery!</p>

	<button class="btn custom-btn" on:click={runFullDraftLottery}>Simulate Draft</button>

	{#if draftOrder.length}
		{#if topPickLogo}
			<div class="mt-4">
				<h3>1st Pick: {draftOrder[0]}</h3>
				<img src={topPickLogo} alt="1st Pick Logo" class="top-pick-logo" />
			</div>
		{/if}

		<ol class="draft-results mt-4">
			{#each draftOrder as team, i}
				<ul><strong>Pick {i + 1}:</strong> {team}</ul>
			{/each}
		</ol>
	{/if}
</div>

<style>
	.lottery {
		max-width: 700px;
		margin: 3rem auto;
		padding: 2rem;
		text-align: center;
		background: #f9f9f9;
		border-radius: 12px;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
	}

	h1 {
		color: #0C2340;
		margin-bottom: 1rem;
	}

	button.custom-btn {
		background-color: #0C2340;
		color: white;
		padding: 0.75rem 1.5rem;
		border: none;
		border-radius: 8px;
		font-size: 1rem;
		cursor: pointer;
		margin-top: 1rem;
	}

	.draft-results {
		margin-top: 2rem;
		text-align: left;
		list-style-position: inside;
		font-size: 1.1rem;
	}

	.top-pick-logo {
		width: 120px;
		height: auto;
		margin-top: 1rem;
		border-radius: 10px;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
	}

</style>
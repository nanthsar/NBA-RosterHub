<script>
  let { children } = $props();
  import "./style.css";
</script>

<nav
  class="navbar navbar-expand-lg navbar-dark"
  style="background-color: #0C2340;"
>
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="/images/chatgpt-logo.png" alt="NBA" class="nba-logo" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/teams">NBA Teams</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/players">Players</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/draft">Draft Lottery</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

{@render children()}

<br>
<footer style="text-align: center; margin-top: 2rem;">
  <small class="disclaimer">
    Legal notice: The NBA brand and logos are officially licensed by the
    <a href="https://www.nba.com" target="_blank">NBA</a>.
  </small>
</footer>
<br>
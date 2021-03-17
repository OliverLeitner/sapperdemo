<script>
    import SvelteTable from "svelte-table";
    const rows = [
      /** data (example below) */
    ];
    const columns = [
      /** columns config (example below) */
    ];
  </script>

<svelte:head>
    <title>Table</title>
</svelte:head>

<h1>Table this site</h1>

<p>This is the 'about' page. There's not much here.</p>

<!-- <SvelteTable> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules -->
<!--SvelteTable columns="{columns}" rows="{rows}"></SvelteTable-->
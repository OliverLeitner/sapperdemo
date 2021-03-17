<script lang="ts">
    import {onMount} from "svelte"
    import {FetchData} from "../shared/fetch"
    import type {IAnimalFact} from "../interfaces/ianimalfact.interface"

    let localData: IAnimalFact[];

    // https://alexwohlbruck.github.io/cat-facts/docs/
    onMount(() => {
        new FetchData(
            "https://cat-fact.herokuapp.com/facts"
        ).fetchAnimalFacts().then((anfacts: IAnimalFact[]) => {
            localData = <IAnimalFact[]>anfacts
        })
    })
</script>

<svelte:head>
	<title>Wtf</title>
</svelte:head>

<h1>Wtf this site</h1>

{#if localData}
    <ul>
    {#each localData as fact}
        <li>{fact.user}: {fact.text} - <strong><i>{fact.status.verified}</i></strong></li>
    {/each}
    </ul>
{:else}
    <p>loading data...</p>
{/if}
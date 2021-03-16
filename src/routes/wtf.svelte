<script lang="ts">
    import {onMount} from "svelte"
    import axios from "axios"

    interface IName {
        first: string,
        last: string
    }

    interface IGoogle {
        id: string,
        accessToken: string,
        refreshToken: string
    }

    interface IUser {
        _id: string,
        email: string,
        name: IName,
        isAdmin: boolean,
        google: IGoogle
    }

    interface IStatus {
        feedback: string,
        setCount: number,
        verified: boolean
    }

    interface ICatFact {
        deleted: boolean,
        source: string,
        text: string,
        status: IStatus,
        type: string,
        updatedAt: string,
        used: boolean,
        user: string
        userName?: string
    }

    let localData: ICatFact[];

    // https://alexwohlbruck.github.io/cat-facts/docs/
    async function fetchData(type: string = "catdata") {
        const fetchMe = await axios.get("https://cat-fact.herokuapp.com/facts")
        localData = <ICatFact[]>await fetchMe.data
        // const fetchUsers = await axios.get("https://cat-fact.herokuapp.com/users")
        // const userData = <IUser[]>await fetchUsers.data
        /*if (userData && userData.length > -1) {
            localData.map((fact) => {
                userData.map((user) => {
                    if (user._id === fact.user) return fact.userName = user.name.first + user.name.last
                })
            })
        }*/
        console.log(localData)
    }

    onMount(() => {
        fetchData()
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
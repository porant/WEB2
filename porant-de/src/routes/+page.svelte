<svelte:head>
  <title>PORANT.de</title>
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
</svelte:head>


<script lang="ts">
  import GlitchText from "./GlitchText.svelte";
  import MyAnims from "./MyAnims.svelte";
  import Dashboard from "./Dashboard.svelte";
  import { AppBar } from '@skeletonlabs/skeleton-svelte';
  import { Send, Mail, BotMessageSquare } from '@lucide/svelte';
</script>

<AppBar>
  {#snippet lead()}
  <span class="green pt-1">
    <GlitchText text="PORANT.de"/>
  </span>
  {/snippet}
  {#snippet trail()}
    <a href="mailto:porant@gmail.com" class="btn green" target="_blank"><Mail /></a>
    <a href="https://discord.gg/e6wkfyBDGV" class="btn green" target="_blank"><BotMessageSquare/></a>
    <a href="https://t.me/P0RANT" class="btn green" target="_blank"><Send/></a>
  {/snippet}
</AppBar>
<div class="flex items-center justify-center h-screen">
  <Dashboard />
</div>

<style>
    .green{
        color: #d4fa0f;
    }

    :global(body) {
      background:
		  radial-gradient(50% 50% at 100% 0,#101010 0%  5% ,#171717 6%  15%,#101010 16% 25%,#171717 26% 35%,#101010 36% 45%,
		   #171717 46% 55%,#101010 56% 65%,#171717 66% 75%,#101010 76% 85%,#171717 86% 95%,
		   #0000 96%),
		  radial-gradient(50% 50% at 0 100%,#101010 0%  5% ,#171717 6%  15%,#101010 16% 25%,#171717 26% 35%,#101010 36% 45%,
		   #171717 46% 55%,#101010 56% 65%,#171717 66% 75%,#101010 76% 85%,#171717 86% 95%,
		   #0000 96%),
		  radial-gradient(50% 50%,#101010 0%  5% ,#171717 6%  15%,#101010 16% 25%,#171717 26% 35%,#101010 36% 45%,
		   #171717 46% 55%,#101010 56% 65%,#171717 66% 75%,#101010 76% 85%,#171717 86% 95%,
		   #0000 96%),
		  radial-gradient(50% 50%,#101010 0%  5% ,#171717 6%  15%,#101010 16% 25%,#171717 26% 35%,#101010 36% 45%,
		   #171717 46% 55%,#101010 56% 65%,#171717 66% 75%,#101010 76% 85%,#171717 86% 95%,
		   #0000 96%) 30px 30px;
	    background-size: 60px 60px;
	    background-color: #101010;
    }

</style>
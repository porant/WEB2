<svelte:head>
  <title>PORANT.de</title>
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
</svelte:head>


<script lang="ts">
  import GlitchText from "./GlitchText.svelte";
  import MyAnims from "./MyAnims.svelte";
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
    <a href="mailto:porant@gmail.com" class="btn green"><Mail /></a>
    <a href="https://discord.gg/e6wkfyBDGV" class="btn green"><BotMessageSquare/></a>
    <a href="https://t.me/P0RANT" class="btn green"><Send/></a>
  {/snippet}
</AppBar>

<MyAnims />

<style>
    .green{
        color: #d4fa0f;
    }
</style>
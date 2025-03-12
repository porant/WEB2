
<script lang="ts">
	import GlitchText from "./GlitchText.svelte";
    import { Send, Mail, BotMessageSquare } from '@lucide/svelte';


</script>

<div class="card card-hover p-4 text-center allign-center">
    <GlitchText text = "PORANT.DE"/>
    <div class="flex justify-center">
        <a href="mailto:porant@gmail.com"><Mail /></a>
        <a href="https://discord.gg/e6wkfyBDGV"><BotMessageSquare/></a>
        <a href="https://t.me/P0RANT"><Send/></a>
    </div>
</div>



<style>
    div {
        font: 900 3rem 'Arial';
        color: #d4fa0f;
    }
</style>
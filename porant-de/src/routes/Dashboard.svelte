
<div class="card w-full max-w-md preset-glass-neutral p-4 text-center">
    <form class="mx-auto w-full max-w-md space-y-4">
        <input type="text" class="input" placeholder="Username" />
        <input type="password" class="input" placeholder="Password" />
        <button class="btn">Login</button>
    </form>
</div>

<style>

.preset-glass-neutral {
    background: color-mix(in oklab, var(--color-surface-50-950) 30%, transparent);
    box-shadow: 0 0px 30px color-mix(in oklab, var(--color-surface-50-950) 30%, transparent) inset;
    backdrop-filter: blur(16px);
  }
</style>
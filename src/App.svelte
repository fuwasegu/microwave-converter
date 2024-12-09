<script lang="ts">
  import MicrowaveCalculator from './lib/components/MicrowaveCalculator.svelte';
  import ResultDisplay from './lib/components/ResultDisplay.svelte';
  import { calculateHeatingTime } from './lib/utils/calculator';
  import type { CalculationResult } from './lib/types';
  import { inject } from '@vercel/analytics';

  let calculatedTime: number | null = null;

  function handleCalculate(event: CustomEvent<CalculationResult>) {
    const { originalWattage, originalTime, targetWattage } = event.detail;
    calculatedTime = calculateHeatingTime(originalWattage, originalTime, targetWattage);
  }

  // Vercel Analytics の初期化
  inject();
</script>

<div class="app">
  <header>
    <div class="container">
      <div class="card">
        <h1>
          <span class="subtitle">電子レンジの</span>
          <span class="main-title">温め時間変換器</span>
        </h1>
      </div>
    </div>
  </header>

  <main>
    <div class="container">
      <MicrowaveCalculator on:calculate={handleCalculate} />
      <ResultDisplay {calculatedTime} />
    </div>
  </main>
</div>

<style>
  :global(html) {
    min-height: 100%;
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%);
    background-attachment: fixed;
  }

  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    min-height: 100vh;
    -webkit-text-size-adjust: 100%;
    color: #2c3e50;
  }

  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  header {
    margin-bottom: 1.5rem;
  }

  .container {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 0 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  main {
    flex: 1;
  }

  .card {
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05);
    width: 100%;
    box-sizing: border-box;
  }

  h1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #2c3e50;
    margin: 0;
  }

  .subtitle {
    font-size: 1rem;
    font-weight: 500;
    color: #64748b;
    margin-bottom: 0.25rem;
  }

  .main-title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.4;
    width: 100%;
    text-align: center;
  }

  :global(.card) {
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05);
    width: 100%;
    padding: 1.25rem;
    box-sizing: border-box;
  }

  @media (max-width: 360px) {
    header {
      margin-bottom: 1rem;
    }

    .container {
      gap: 1rem;
      padding: 0 0.5rem;
    }

    :global(.card) {
      padding: 1rem;
      border-radius: 12px;
    }

    .subtitle {
      font-size: 0.9rem;
    }

    .main-title {
      font-size: 1.5rem;
    }
  }
</style>

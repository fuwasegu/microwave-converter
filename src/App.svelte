<script lang="ts">
  import MicrowaveCalculator from './lib/components/MicrowaveCalculator.svelte';
  import ResultDisplay from './lib/components/ResultDisplay.svelte';
  import { calculateHeatingTime } from './lib/utils/calculator';
  import type { CalculationResult } from './lib/types';

  let calculatedTime: number | null = null;

  function handleCalculate(event: CustomEvent<CalculationResult>) {
    const { originalWattage, originalTime, targetWattage } = event.detail;
    calculatedTime = calculateHeatingTime(originalWattage, originalTime, targetWattage);
  }
</script>

<div class="app">
  <header>
    <div class="header-content">
      <h1>
        <span class="subtitle">電子レンジの</span>
        <span class="main-title">温め時間変換器</span>
      </h1>
    </div>
  </header>

  <main>
    <div class="content">
      <MicrowaveCalculator on:calculate={handleCalculate} />
      <ResultDisplay {calculatedTime} />
    </div>
  </main>
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%);
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
    background: white;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
  }

  .header-content {
    width: 100%;
    max-width: 400px;
    padding: 1.25rem 1rem;
    text-align: center;
  }

  main {
    flex: 1;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 0 1rem;
    box-sizing: border-box;
  }

  .card {
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05);
    width: 100%;
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
    border-radius: 16px;
  }

  @media (max-width: 360px) {
    header {
      margin-bottom: 1rem;
    }

    .header-content {
      padding: 1rem;
    }

    .content {
      gap: 1rem;
      padding: 0 0.5rem;
    }

    :global(.card) {
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

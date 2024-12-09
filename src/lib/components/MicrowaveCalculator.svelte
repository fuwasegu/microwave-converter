<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { CalculationResult } from '../types';

  const dispatch = createEventDispatcher<{
    calculate: CalculationResult;
  }>();

  let originalWattage = 600;
  let minutes = 1;
  let seconds = 0;
  let targetWattage = 500;

  const commonWattages = [
    { value: 500, label: '500W' },
    { value: 600, label: '600W' },
    { value: 700, label: '700W' },
    { value: 800, label: '800W' },
  ];

  $: originalTime = minutes + seconds / 60;
  $: dispatch('calculate', {
    originalWattage,
    originalTime,
    targetWattage
  });
</script>

<div class="card calculator-form">
  <div class="form-group">
    <label for="originalWattage">パッケージ記載のワット数</label>
    <div class="input-container">
      <div class="input-group">
        <input
          type="number"
          id="originalWattage"
          bind:value={originalWattage}
          min="1"
          required
        />
        <span class="unit">W</span>
      </div>
      <div class="preset-buttons">
        {#each commonWattages as wattage}
          <button
            type="button"
            class="preset-button"
            class:active={originalWattage === wattage.value}
            on:click={() => originalWattage = wattage.value}
          >
            {wattage.label}
          </button>
        {/each}
      </div>
    </div>
  </div>

  <div class="form-group">
    <label>パッケージ記載の時間</label>
    <div class="time-input-group">
      <div class="input-group compact">
        <input
          type="number"
          bind:value={minutes}
          min="0"
          step="1"
          required
        />
        <span class="unit">分</span>
      </div>
      <div class="input-group compact">
        <input
          type="number"
          bind:value={seconds}
          min="0"
          max="59"
          step="1"
          required
        />
        <span class="unit">秒</span>
      </div>
    </div>
  </div>

  <div class="form-group">
    <label for="targetWattage">お使いの電子レンジのワット数</label>
    <div class="input-container">
      <div class="input-group">
        <input
          type="number"
          id="targetWattage"
          bind:value={targetWattage}
          min="1"
          required
        />
        <span class="unit">W</span>
      </div>
      <div class="preset-buttons">
        {#each commonWattages as wattage}
          <button
            type="button"
            class="preset-button"
            class:active={targetWattage === wattage.value}
            on:click={() => targetWattage = wattage.value}
          >
            {wattage.label}
          </button>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .calculator-form {
    padding: 1.5rem;
    background: white;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .form-group:last-child {
    margin-bottom: 0;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .input-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 120px;
    position: relative;
    background: #f8f9fa;
    border-radius: 8px;
    padding: 0.25rem;
  }

  .input-group.compact {
    width: 90px;
  }

  .time-input-group {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .preset-buttons {
    display: flex;
    gap: 0.5rem;
    min-width: 0;
  }

  label {
    font-weight: 600;
    color: #2c3e50;
    font-size: 0.95rem;
  }

  input {
    padding: 0.625rem;
    border: 1px solid transparent;
    border-radius: 6px;
    width: 100%;
    font-size: 1rem;
    background: transparent;
    color: #2c3e50;
    transition: all 0.2s;
  }

  input:focus {
    outline: none;
    background: white;
    border-color: #4CAF50;
  }

  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .unit {
    font-weight: 600;
    color: #2c3e50;
    min-width: 1.5rem;
    font-size: 0.9rem;
    opacity: 0.8;
  }

  .preset-button {
    padding: 0.5rem;
    background-color: white;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.9rem;
    min-width: 70px;
    color: #2c3e50;
    font-weight: 500;
    white-space: nowrap;
  }

  .preset-button:hover {
    background-color: #f8f9fa;
    transform: translateY(-1px);
  }

  .preset-button.active {
    background-color: #4CAF50;
    color: white;
    border-color: #4CAF50;
    box-shadow: 0 2px 8px rgba(76, 175, 80, 0.25);
  }

  @media (max-width: 360px) {
    .calculator-form {
      padding: 1rem;
    }

    .preset-button {
      min-width: 60px;
      padding: 0.4rem;
      font-size: 0.8rem;
    }

    .input-group.compact {
      width: 80px;
    }

    label {
      font-size: 0.85rem;
    }

    .unit {
      font-size: 0.8rem;
    }
  }
</style> 
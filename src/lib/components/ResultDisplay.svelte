<script lang="ts">
  export let calculatedTime: number | null = null;

  $: minutes = calculatedTime ? Math.floor(calculatedTime) : 0;
  $: seconds = calculatedTime ? Math.round((calculatedTime - minutes) * 60) : 0;
  // 秒が60になった場合の調整
  $: {
    if (seconds === 60) {
      minutes += 1;
      seconds = 0;
    }
  }
</script>

{#if calculatedTime !== null}
  <div class="card result-container">
    <div class="result-content">
      <h2>計算結果</h2>
      <div class="time-display">
        <span class="label">温め時間の目安</span>
        <div class="time">
          <span class="number">{minutes}</span>
          <span class="unit">分</span>
          <span class="number">{seconds}</span>
          <span class="unit">秒</span>
        </div>
      </div>
      <p class="note">※ 目安の時間です。食品の温まり具合を確認しながら調整してください。</p>
    </div>
  </div>
{/if}

<style>
  .result-container {
    padding: 1.5rem;
  }

  h2 {
    margin: 0 0 1.5rem;
    color: #2c3e50;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 700;
  }

  .time-display {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 1.25rem;
    margin-bottom: 1rem;
  }

  .label {
    display: block;
    text-align: center;
    color: #2c3e50;
    font-size: 1rem;
    margin-bottom: 0.75rem;
    font-weight: 500;
  }

  .time {
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 0.25rem;
  }

  .number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #4CAF50;
    line-height: 1;
    font-feature-settings: "tnum";
  }

  .unit {
    font-size: 1.25rem;
    color: #2c3e50;
    font-weight: 500;
    margin: 0 0.5rem 0 0.125rem;
  }

  .note {
    font-size: 0.9rem;
    color: #64748b;
    margin: 0;
    text-align: center;
    line-height: 1.5;
  }

  @media (max-width: 360px) {
    .result-container {
      padding: 1rem;
    }

    h2 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    .time-display {
      padding: 1rem;
    }

    .label {
      font-size: 0.9rem;
    }

    .number {
      font-size: 2rem;
    }

    .unit {
      font-size: 1rem;
    }

    .note {
      font-size: 0.8rem;
    }
  }
</style> 
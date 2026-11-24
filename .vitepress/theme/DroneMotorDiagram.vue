<script setup>
defineProps({
  stronger: { type: Array, default: () => [] },
});
</script>

<template>
  <span
    class="drone-motor-diagram"
    role="img"
    :aria-label="`نمای بالا؛ جلوی پهپاد رو به بالا است. M1 و M3 پادساعت‌گرد؛ M2 و M4 ساعت‌گرد. موتورهای قوی‌تر: ${stronger.length ? stronger.map(id => 'M' + id).join('، ') : 'هیچ‌کدام'}؛ سایر موتورها ضعیف‌تر.`"
  >
    <span class="arm arm-first" aria-hidden="true"></span>
    <span class="arm arm-second" aria-hidden="true"></span>
    <span class="front" aria-hidden="true"></span>
    <span
      v-for="motor in [1, 2, 3, 4]"
      :key="motor"
      class="motor"
      :class="[`motor-${motor}`, { strong: stronger.includes(motor), ccw: motor === 1 || motor === 3 }]"
      aria-hidden="true"
    >
      <span class="rotation-arrow">{{ motor === 1 || motor === 3 ? '↺' : '↻' }}</span>
    </span>
  </span>
</template>

<style scoped>
/* Keep the drone's physical positions and front arrow identical in RTL and LTR. */
/*rtl:begin:ignore*/
.drone-motor-diagram {
  position: relative;
  display: inline-block;
  width: 88px;
  height: 88px;
  vertical-align: middle;
  border-radius: 8px;
  background: #181818;
  user-select: none;
}

.arm {
  position: absolute;
  top: 42px;
  left: 10px;
  width: 68px;
  height: 4px;
  background: #888;
}

.arm-first { transform: rotate(45deg); }
.arm-second { transform: rotate(-45deg); }

.front {
  position: absolute;
  top: 25px;
  left: 42px;
  width: 4px;
  height: 21px;
  background: #f9c900;
}

.front::before {
  content: '';
  position: absolute;
  top: -6px;
  left: -4px;
  border-right: 6px solid transparent;
  border-left: 6px solid transparent;
  border-bottom: 8px solid #f9c900;
}

.motor {
  position: absolute;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #888;
}

.motor-1 { top: 9px; left: 57px; }
.motor-2 { top: 9px; left: 9px; }
.motor-3 { top: 57px; left: 9px; }
.motor-4 { top: 57px; left: 57px; }
.strong { background: #f9c900; }

.rotation-arrow {
  display: block;
  width: 22px;
  height: 22px;
  color: #181818;
  font: 24px / 22px Arial, sans-serif;
  text-align: center;
  animation: motor-spin 6s linear infinite;
}

.strong .rotation-arrow { animation-duration: 1.5s; }
.ccw .rotation-arrow { animation-direction: reverse; }

@keyframes motor-spin {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .rotation-arrow { animation: none; }
}
/*rtl:end:ignore*/
</style>

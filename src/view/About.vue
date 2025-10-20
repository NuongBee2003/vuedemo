<!-- File: InputScaleIosTest.vue -->
<template>
  <div class="p-4 space-y-6">
    <!-- Repro lỗi: scale đặt trên chính input -->
    <section>
      <h3 class="text-lg font-semibold mb-2">Broken (scale trên input)</h3>
      <input
        v-model="broken"
        :class="brokenInputClass"
        placeholder="Tap ở iOS → thường KHÔNG mở bàn phím"
        autocomplete="off"
        autocapitalize="off"
        spellcheck="false"
      />
    </section>

    <!-- Bản sửa: scale ở wrapper, input giữ font-size 16px -->
    <section>
      <h3 class="text-lg font-semibold mb-2">Fixed (scale ở wrapper, KHÔNG scale input)</h3>

      <!-- iOS: KHÔNG áp scale để tránh bug hit-test -->
      <div :class="isIOS ? 'origin-left' : 'origin-left scale-[0.875]'">
        <input
          v-model="fixed"
          :class="fixedInputClass"
          placeholder="Tap ở iOS → bàn phím MỞ bình thường"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
        />
      </div>

      <p class="mt-2 text-sm text-gray-500">
        iOS được giữ <code>font-size:16px</code> để tránh auto-zoom.
        Các nền tảng khác vẫn nhìn như 14px nhờ scale ở wrapper.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// detect iOS rất đơn giản (đủ cho test)
const isIOS = /iPad|iPhone|iPod/i.test(navigator.userAgent)

const baseInputClass =
  'flex w-full rounded-md border border-solid border-gray-300 ' +
  'bg-transparent px-3 py-1 text-base h-[44px] box-border ' +
  'placeholder:text-gray-600 focus-visible:outline-none ' +
  'disabled:cursor-not-allowed disabled:opacity-50'

// LỚP GÂY LỖI: scale đặt trực tiếp trên input
const brokenInputClass = computed(
  () => baseInputClass + ' scale-[0.875] origin-left'
)

// BẢN SỬA: KHÔNG scale trên input
const fixedInputClass = computed(() => baseInputClass)

const broken = ref('')
const fixed = ref('')
</script>

<style>
/* Bảo đảm iOS không tự phóng chữ khi focus */
html, body { -webkit-text-size-adjust: 100%; }

/* Trường hợp bạn dùng Tailwind, các class ở trên là đủ; phần CSS này chỉ nhắc bổ sung. */
</style>

<template>
  <div class="p-4 space-y-8">
    <!-- 1️⃣ Broken -->
    <section>
      <h3 class="text-lg font-semibold mb-2 text-red-500">
        Broken (scale trên input → iOS KHÔNG hiện bàn phím)
      </h3>
      <input
        v-model="broken"
        :class="brokenInputClass"
        placeholder="Tap ở iOS → KHÔNG bật bàn phím"
        autocomplete="off"
      />
    </section>

    <!-- 2️⃣ Fixed -->
    <section>
      <h3 class="text-lg font-semibold mb-2 text-green-500">
        Fixed (scale ở wrapper → iOS OK)
      </h3>
      <div :class="isIOS ? 'origin-left' : 'origin-left scale-[0.875]'">
        <input
          v-model="fixed"
          :class="fixedInputClass"
          placeholder="Tap ở iOS → Bật bàn phím OK"
          autocomplete="off"
        />
      </div>
    </section>

    <section>
      <input>nhapppp</input>
    </section>

    <!-- 3️⃣ Safe 14px look -->
    <section>
      <h3 class="text-lg font-semibold mb-2 text-blue-500">
        Safe 14px look (no scale, dùng zoom)
      </h3>
      <div class="safe14-wrapper origin-left">
        <input
          v-model="safe"
          :class="safeInputClass"
          placeholder="Trông như 14px, iOS vẫn gõ được"
          autocomplete="off"
        />
      </div>
      <p class="mt-2 text-sm text-gray-400">
        Dùng <code>zoom:0.875</code> thay vì <code>transform:scale()</code> — không gây lỗi hit-test.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const isIOS = /iPad|iPhone|iPod/i.test(navigator.userAgent)

const baseInputClass =
  'flex w-full rounded-md border border-solid border-gray-300 ' +
  'bg-transparent px-3 py-1 text-base h-[44px] box-border ' +
  'placeholder:text-gray-600 focus-visible:outline-none ' +
  'disabled:cursor-not-allowed disabled:opacity-50'

// 1️⃣ Lỗi thật
const brokenInputClass = computed(() => baseInputClass + ' scale-[0.875] origin-left')
// 2️⃣ Sửa
const fixedInputClass = computed(() => baseInputClass)
// 3️⃣ Safe 14px
const safeInputClass = computed(() => baseInputClass + ' text-[16px]') // vẫn 16px thật

const broken = ref('')
const fixed = ref('')
const safe = ref('')
</script>

<style scoped>
html, body { -webkit-text-size-adjust: 100%; }

/* 3️⃣ Safe 14px look: Dùng zoom (an toàn trên iOS) */
.safe14-wrapper {
  zoom: 0.875;               /* Giảm toàn bộ tỉ lệ render, KHÔNG ảnh hưởng hit-test */
}
</style>

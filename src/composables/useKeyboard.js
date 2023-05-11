import { ref, computed } from "vue";

const FACTOR_HASKEYBOARD = 0.9;
const WINDOW_HEIGHT = window.innerHeight;

const viewportState = ref({
  viewport: window.visualViewport,
  height: window.visualViewport.height,
  offsetTop: window.visualViewport.offsetTop,
});

function hasKeyboard(currentViewportHeight) {
  return currentViewportHeight / WINDOW_HEIGHT < FACTOR_HASKEYBOARD;
}

export function useKeyboard() {
  const keyboardStatus = computed(() =>
    hasKeyboard(viewportState.value.height)
  );

  const displayHeight = computed(() => {
    return keyboardStatus.value ? viewportState.value.height : WINDOW_HEIGHT;
  });

  const displayOffset = computed(() => {
    return keyboardStatus.value ? viewportState.value.offsetTop : 0;
  });

  function updateState(event) {
    viewportState.value.viewport = event.target;
    viewportState.value.height = event.target.height;
    viewportState.value.offsetTop = event.target.offsetTop;
  }

  window.visualViewport.onresize = (event) => {
    if (hasKeyboard(event.target.height) !== keyboardStatus.value) {
      updateState(event);
    }
  };

  return {
    keyboardStatus,
    displayHeight,
    displayOffset,
  };
}

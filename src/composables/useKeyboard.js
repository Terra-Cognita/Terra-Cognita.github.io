import { ref, computed } from "vue";

const FACTOR_HASKEYBOARD = 0.9;
const VIEWPORT_MAX_HEIGHT = window.visualViewport.height;

function hasKeyboard(currentViewportHeight) {
  return currentViewportHeight / VIEWPORT_MAX_HEIGHT < FACTOR_HASKEYBOARD;
}

const state = ref({
  active: hasKeyboard(window.visualViewport.height),
  offsetTop: window.visualViewport.offsetTop,
  height: window.visualViewport.height,
});

function updateState(event) {
  state.value.offsetTop = event.target.offsetTop;
  state.value.height = event.target.height;
  state.value.active = hasKeyboard(event.target.height);
}

window.visualViewport.onresize = (event) => {
  if (hasKeyboard(event.target.height) !== state.value.active) {
    updateState(event);
  }
  return;
};

export function useKeyboard() {
  const keyboardStatus = computed(() => state.value.active);

  const displayHeight = computed(() => {
    return state.value.active ? state.value.height : VIEWPORT_MAX_HEIGHT;
  });

  const displayOffsetTop = computed(() => {
    return state.value.active ? state.value.offsetTop : 0;
  });

  const displayOffsetBottom = computed(() => {
    return state.value.active ? VIEWPORT_MAX_HEIGHT - state.value.height : 0;
  });

  return {
    keyboardStatus,
    displayHeight,
    displayOffsetTop,
    displayOffsetBottom,
  };
}

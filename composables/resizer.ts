import { computed, onMounted, ref } from 'vue'
import type { ProjectParams, DeviceParams } from './types'

export const projectParams: ProjectParams = {
  desktop: {
    name: 'desktop',
    width: 1920,
    height: 1080,
    minWidth: 0,
    minHeight: 0,
    fontSize: 16,
    maxWidth: 16,
  },
  mobile: {
    name: 'mobile',
    width: 375,
    height: 668,
    minWidth: 0,
    minHeight: 0,
    fontSize: 16,
    maxWidth: null,
  },
}

export function useResizer() {
  const _viewPortWidth = ref<number>(0)
  const _viewPortHeight = ref<number>(0)
  const currentProjectConfig = ref<DeviceParams>(projectParams.mobile)

  const fontSize = computed(() => {
    const config = currentProjectConfig.value
    const horizontalRatio
      = Math.max(config.minWidth, _viewPortWidth.value) / config.width
    const verticalRatio
      = Math.max(config.minHeight, _viewPortHeight.value) / config.height

    const minRatio = Math.min(horizontalRatio, verticalRatio)
    const fz = config.fontSize * minRatio

    if (currentProjectConfig.value.maxWidth) {
      return fz >= currentProjectConfig.value.maxWidth
        ? currentProjectConfig.value.maxWidth
        : fz
    }
    return fz
  })

  onMounted(() => {
    _resizeHandler()
    window.addEventListener('resize', _resizeHandler)
  })

  function _getBrowserParams(type: string): number {
    if (type === 'width') {
      return window.innerWidth ?? document.documentElement.clientWidth
    }

    if (type === 'height') {
      return window.innerHeight ?? document.documentElement.clientHeight
    }

    return 0
  }

  function _resizeHandler() {
    _viewPortWidth.value = _getBrowserParams('width')
    _viewPortHeight.value = _getBrowserParams('height')

    currentProjectConfig.value = _calcCurrentProjectConfig()
  }

  function _calcCurrentProjectConfig(): DeviceParams {
    const { desktop, mobile } = projectParams

    return _viewPortWidth.value >= desktop.minWidth ? desktop : mobile
  }

  return {
    fontSize,
    currentProjectConfig,
  }
}

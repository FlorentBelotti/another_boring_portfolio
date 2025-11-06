export const TRANSITION_CONFIG = {
  duration: 2.0, // en secondes
  staggerDelay: 0.1, // en secondes
  numberOfBlocks: 3, // nombre de blocs par page
}

export function calculateTransitionTiming() {
  const { duration, staggerDelay, numberOfBlocks } = TRANSITION_CONFIG
  const durationMs = duration * 1000
  const staggerDelayMs = staggerDelay * 1000
  const lastBlockDelay = (numberOfBlocks - 1) * staggerDelayMs
  
  return {
    timeToCover: lastBlockDelay + (durationMs / 2),
    totalDuration: lastBlockDelay + durationMs,
  }
}

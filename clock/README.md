# 7 segment Digital Clock

## Problem

Create a widget that renders the current time in HH:MM:SS format using a 7-segment digital display. You are free to choose to use 12-hour or a 24-hour display.

Here's an example of a digital clock. Each digit needs to be rendered by individual segments, but you can exercise your creativity by choosing different colors and styling it differently. It should however still function as a clock, allowing the user to read the time.

## Notes

**Key topics:** useState (lazy initialization), Timers(setInterval), Component decomposition, and mapping visual logic to state.

- Figuring out how to represent digits with 7 segments and map them visually was the hardest part, but it taught me to think about how react can dynamically render a visual design
- I learnt how to use lazy initialization so that the function only runs once on mount.

# Traffic Light

## Problem

Build a traffic light where the lights switch from green to yellow to red after predetermined intervals and loop indefinitely. Each light should be lit for the following durations:

- Red light: 4000ms
- Yellow light: 500ms
- Green light: 3000ms

## Notes

**Key Topics:** useEffect, Cleanup of side effects, and Timers (setTimeout), 

- I learned that timers like setTimeout and setInterval are sideEffects and should be handled inside useEffect
- Cleaning up timers are necessary to prevent timers from continuously running or stacking even after the component unmounts.
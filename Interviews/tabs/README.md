# Tabs

## Problem

Build a tabs component that displays one panel of content at a time depending on the active tab element. Some HTML is provided for you as example contents.

### Requirements
- Clicking on a tab makes it the active tab. Add a visual indication (e.g. using blue text color) for the active tab to differentiate it from the non-active tabs.
- At all times, only one panel's contents should be displayed — the one corresponding to the active tab's.

## Notes

**key topics:** Uncontrolled vs controlled components, Props (API design), and scalable solutions.

- The **Array → Filter → Join** pattern is a clean way to conditionally add class names in React.
- It avoids messy logic with nested ternaries and scales well for multiple conditional classes.
Initially, I hardcoded the tabs and state, which worked but wasn’t reusable or scalable.
- I learnt what Props API design is and how it can make a component resuable
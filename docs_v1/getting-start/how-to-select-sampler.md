---
description: |
  In this chapter, you will be introduced to the use of Tunny's Optimization window.
  You'll learn how to run optimize, show result plot, and get result data into grasshopper.
---

# Guidelines for Selecting a Optimization Algorithm Settings

The information provided here is purely for reference. Consider it an indicator
to help you make a good initial choice.

## Flow Chart

### Anyway, I want to optimize it.

If you want to try optimization anyway, select AUTO Sampler.

<img width="40%" alt="image" src="/images/docs_v1/getting-start/anyway-optimize.png">

### Optimization without constraints

If there are no constraints, the following flowchart can be used to select the
sampler to be used.

<img width="100%" alt="image" src="/images/docs_v1/getting-start/optimize-without-constraint.png">

### Optimization with constraints

Constraints reduce the number of samplers available.

<img width="100%" alt="image" src="/images/docs_v1/getting-start/optimize-with-constraint.png">

### Revealing the Design Space

Tunny can also perform sampling to reveal the design space without optimization.

`Revealing the design space` means trying various combinations of variables to
see how much the objective function changes with the combination of variables
you are currently setting and which variables affect the objective function.

Combined with Tunny's dashboard, it provides an efficient way to reveal the
design space.

<img width="60%" alt="image" src="/images/docs_v1/getting-start/reveal-design-space.png">

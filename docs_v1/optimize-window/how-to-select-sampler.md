---
description: |
  In this chapter, you will be introduced to the use of Tunny's Optimization window.
  You'll learn how to run optimize, show result plot, and get result data into grasshopper.
---

# Guidelines for Selecting a Optimization Algorithm Settings

Much of the content is sourced from the official documentation of Optuna, the
optimization library used by Tunny.

## Flow Chart

This may not always be the best choice, but in general, the following flow can
be used to select which sampler to use.

<img width="100%" alt="image" src="https://user-images.githubusercontent.com/23289252/188254450-1e718d97-f81e-49a1-949b-e158837bc44f.png">

## Sampler info table

<a href="https://optuna.readthedocs.io/en/stable/reference/samplers/index.html">
<img width="100%" alt="image" src="https://user-images.githubusercontent.com/23289252/190851118-2084c531-d236-4eb5-8849-5802b8df5656.png">
</a>

## Advanced Usage

### Optimization using sampling results

Bayesian optimization TPE and GP require constant sampling with Random or
Quasi-MonteCarlo before optimization due to the characteristics of the
optimization method.

By default, a random sampler is automatically used to sample the set "Number of
startup trials".\
However, if you first select any sampler and sample a certain number of samples,
then select TPE or GP and perform the optimization again, you can use that
sample data to perform the optimization.

### Reveal the importance of variables

Tunny is not just an optimization tool, but a design support tool. For example,
you can identify the importance of variables and see which variables have the
greatest impact on the design.

Below are the results of the Hyper Parameter Importance visualization introduced
in the Visualization Tab. This shows the effect of each variable on the
objective function 0, which sums to 1 for each variable.

<img width="1141" alt="image" src="https://user-images.githubusercontent.com/23289252/190849715-2bae3ac7-0c52-47d7-ae61-968160a88206.png">

For this type of study, use Quasi-MonteCarlo instead of TPE, GP, NSGAII, or
CMA-ES to perform the optimization, as it is easier to obtain accurate values up
to higher dimensions.

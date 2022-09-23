---
description: |
  In this chapter of the Fresh documentation, you'll be introduced to the
  framework. Create a new project, run it locally, edit and create pages, fetch
  data, handle user interactions, and deploy it.
---

<img width="40%" alt="image" src="https://user-images.githubusercontent.com/23289252/188255969-9355c626-36d3-4d9b-8f50-0a8bda79bf8e.png">

**(new in v0.5.0)**
Allows detailed optimization settings to be performed in the UI.
See below for the meaning of each setting.

# Guidelines for Selecting a Optimization Algorithm

Much of the content is sourced from the official documentation of Optuna, the optimization library used by Tunny.

## Summary

<a href="https://optuna.readthedocs.io/en/stable/reference/samplers/index.html">
<img width="100%" alt="image" src="https://user-images.githubusercontent.com/23289252/190851118-2084c531-d236-4eb5-8849-5802b8df5656.png">
</a>

# Useful resources for understanding each algorithm

## TPE (Tree-structured Parzen Estimator)

TPE fits one Gaussian Mixture Model (GMM) `l(x)`to the set of parameter values associated with the best objective values, and another GMM `g(x)`to the remaining parameter values. It chooses the parameter value `x`that maximizes the ratio `l(x)/g(x)`.

### API Reference

- [optuna.samplers.TPESampler](https://optuna.readthedocs.io/en/stable/reference/samplers/generated/optuna.samplers.TPESampler.html)

### Referenced Papers

- [Algorithms for Hyper-Parameter Optimization](https://papers.nips.cc/paper/4443-algorithms-for-hyper-parameter-optimization.pdf)
- [Making a Science of Model Search: Hyperparameter Optimization in Hundreds of Dimensions for Vision Architectures](http://proceedings.mlr.press/v28/bergstra13.pdf)
- [Multiobjective tree-structured parzen estimator for computationally expensive optimization problems](https://dl.acm.org/doi/10.1145/3377930.3389817)
- [Multiobjective Tree-Structured Parzen Estimator](https://doi.org/10.1613/jair.1.13188)

### About constraints

- A value strictly larger than 0 means that a constraints is violated. A value equal to or smaller than 0 is considered feasible.
- [https://github.com/optuna/optuna/pull/3506](https://github.com/optuna/optuna/pull/3506)

### How many should the Number of startup trials be?

- Bayesian optimization first performs random sampling to create a surrogate model. This is the setting for how many trials random sampling is performed.
- **The original paper recommends “number of variables” \* 11-1.**

## BoTorch (Gaussian Process)

### API Reference

- [optuna.integration.BoTorchSampler](https://optuna.readthedocs.io/en/stable/reference/generated/optuna.integration.BoTorchSampler.html)

### About constrains

- A value strictly larger than 0 means that a constraints is violated. A value equal to or smaller than 0 is considered feasible.
- more detail
  [Constraints · BoTorch](https://botorch.org/docs/constraints#outcome-constraints)

## CMA-ES (Covariance Matrix Adaptation Evolution Strategy)

### API Reference

- [optuna.samplers.CmaEsSampler](https://optuna.readthedocs.io/en/stable/reference/samplers/generated/optuna.samplers.CmaEsSampler.html)

### Image of behavior

![https://user-images.githubusercontent.com/5564044/73486622-db5cff00-43e8-11ea-98fb-8246dbacab6d.gif](https://user-images.githubusercontent.com/5564044/73486622-db5cff00-43e8-11ea-98fb-8246dbacab6d.gif)

- Optuna uses the following libraries
  - [https://github.com/CyberAgentAILab/cmaes](https://github.com/CyberAgentAILab/cmaes)

## NSGA-II (Non-dominated Sorting Genetic Algorithm)

Multi-objective sampler using the NSGA-II algorithm.

### API Reference

- [optuna.samplers.NSGAIISampler](https://optuna.readthedocs.io/en/stable/reference/samplers/generated/optuna.samplers.NSGAIISampler.html)

### Referenced Paper

- [A fast and elitist multiobjective genetic algorithm: NSGA-II](https://ieeexplore.ieee.org/document/996017)

### What difference of corossover algorithm

- You can select several variants of the crossover option from `uniform` (default), `blxalpha`, `sbx`, `vsbx`, `undx`, and `spx`.
- detail
  - [https://github.com/optuna/optuna/pull/2903](https://github.com/optuna/optuna/pull/2903)

### About constraints

- A value strictly larger than 0 means that a constraints is violated. A value equal to or smaller than 0 is considered feasible.
- [https://github.com/optuna/optuna/pull/3506](https://github.com/optuna/optuna/pull/3506)

## QMC (Quasi-Monte Carlo)

A Quasi Monte Carlo Sampler that generates low-discrepancy sequences.

### API Reference

- [optuna.samplers.QMCSampler](https://optuna.readthedocs.io/en/stable/reference/samplers/generated/optuna.samplers.QMCSampler.html)

This process uses scipy inside optuna. If you want to know the detailed process, please refer to the following scipy documentation.

- [scipy.stats.qmc](https://docs.scipy.org/doc/scipy/reference/stats.qmc.html)

### Related to PullRequest

- [https://github.com/optuna/optuna/pull/2423](https://github.com/optuna/optuna/pull/2423)

### When should QMC be selected instead of random?

Random sampling, as the name implies, samples randomly. This means that the spacing between the sampled points is not guaranteed to be far apart, and it is possible to sample a point right next to a point that has already been sampled.  
On the other hand, quasi-Monte Carlo allows for random sampling with some spacing.
For example, if you want to check the entire solution space with a small sample, you may be able to do so faster than with random.

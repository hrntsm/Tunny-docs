---
description: |
  :fish:**Tunny**:fish: is Grasshopper's optimization component using Optuna, an open source hyperparameter auto-optimization framework.
---

:fish:**Tunny**:fish: is Grasshopper's optimization component using Optuna, an open source hyperparameter auto-optimization framework.

This component support below optimization algorithms. 

1. Bayesian optimization(TPE)
1. Bayesian optimization(GP)
1. Genetic algorithm(NSGA-II)
1. Evolution strategy(CMA-ES)
1. Quasi-MoteCarlo
1. Random
1. Grid

TPE, GP and NSGA-II also **support multi-objective optimization with constrains**.
A very significant feature of this component is its support for **Bayesian optimization**.

It is inspired by components such as Galapagos, opossum, and wallacei, and can be used in a similar way to them.
For more information on how to use it, click here to see document.

The following is taken from the Optuna official website

> Optuna™, an open-source automatic hyperparameter optimization framework, automates the trial-and-error process of optimizing the hyperparameters.
> It automatically finds optimal hyperparameter values based on an optimization target.
> Optuna is framework agnostic and can be used with most Python frameworks, including Chainer, Scikit-learn, Pytorch, etc.
>Optuna is used in PFN projects with good results. One example is the second place award in the Google AI Open Images 2018 – Object Detection Track competition.

Optuna official site : https://optuna.org/
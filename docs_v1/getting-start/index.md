---
description: |
  Tunny is Grasshopper's optimization component using Optuna, an open source hyperparameter auto-optimization framework.
---

:fish:**Tunny**:fish: is Grasshopper's optimization component using Optuna, an
open source hyperparameter auto-optimization framework.

This component support below optimization algorithms.

| Name            | Single-Objective | Multi-Objective | Constraints | Human-in-the-loop | Note                                                                             |
| --------------- | ---------------- | --------------- | ----------- | ----------------- | -------------------------------------------------------------------------------- |
| AUTO Sampler    | ✓                | ✓               | ✓           |                   | The appropriate sampler is automatically selected.                               |
| TPE             | ✓                | ✓               | ✓           | ✓                 |                                                                                  |
| cTPE            | ✓                | ✓               | ✓           |                   | This is an enhanced version of TPE's constraint handling.                        |
| GP-Optuna       | ✓                |                 | ✓           |                   | It operates faster than GP-BoTorch.                                              |
| GP-BoTorch      | ✓                | ✓               | ✓           |                   |                                                                                  |
| HEBO            | ✓                |                 |             |                   | Even problems with strong nonlinearities and multimodalities converge very fast. |
| NSGA-II         | ✓                | ✓               | ✓           |                   |                                                                                  |
| NSGA-III        | ✓                | ✓               | ✓           |                   | It is a multi-objective, enhanced version of the NSGA-II                         |
| MOEA/D          |                  | ✓               |             |                   | It is a specialized method for multi-objective optimization                      |
| DE              | ✓                |                 |             |                   |                                                                                  |
| CMA-ES          | ✓                |                 |             |                   |                                                                                  |
| MO-CMA-ES       |                  | ✓               |             |                   |                                                                                  |
| Random          | ✓                | ✓               |             |                   |                                                                                  |
| QMC             | ✓                | ✓               |             |                   |                                                                                  |
| BruteForce      | ✓                | ✓               |             |                   | Explore all variable combinations                                                |
| GP-Preferential |                  |                 |             | ✓                 | Sampler designed exclusively for Human-in-the-loop.                              |

It is inspired by components such as Galapagos,
[Opossum](https://www.food4rhino.com/en/app/opossum-optimization-solver-surrogate-models),
and [Wallacei](https://www.food4rhino.com/en/app/wallacei), and can be used in a
similar way to them. For more information on how to use it, click here to see
document.

Tunny has been wrapped around Optuna; it might be called Optuna's UI for
Grasshopper. For this reason, Optuna is also introduced. The following is taken
from the Optuna official website

> Optuna™, an open-source automatic hyperparameter optimization framework,
> automates the trial-and-error process of optimizing the hyperparameters. It
> automatically finds optimal hyperparameter values based on an optimization
> target. Optuna is framework agnostic and can be used with most Python
> frameworks, including Chainer, Scikit-learn, Pytorch, etc. Optuna is used in
> PFN projects with good results. One example is the second place award in the
> Google AI Open Images 2018 – Object Detection Track competition.

More detail, Please see Optuna official site : https://optuna.org/

---
description: |
  In this chapter of the Fresh documentation, you'll be introduced to the
  framework. Create a new project, run it locally, edit and create pages, fetch
  data, handle user interactions, and deploy it.
---

<img width="40%" alt="image" src="https://user-images.githubusercontent.com/23289252/188254704-533139c7-169a-4aee-bcd5-0e98ff45f35e.png">

Values that can be set and their meanings are as follows.

## Sampler

- Sets the algorithm to perform the optimization. The following types are available.
- All are optimization algorithms provided by Optuna.
  1. Bayesian optimization(TPE)
  2. Bayesian optimization(GP) **(new in v0.5.0)**
  3. Genetic algorithm(NSGA-II)
  4. Evolution strategy(CMA-ES)
  5. Quasi-MonteCarlo **(new in v0.5.0)**
  6. Random
  7. Grid

## Number of trial

- This number of trials will be performed.
  - Bayesian optimization first performs random sampling to create a surrogate model. This is the setting for how many trials random sampling is performed.
  - The original paper recommends “number of variables” \* 11-1.
- If the grid sampler is selected, the calculation is performed by dividing each entered Variable by this number.
  - **Note** that the number of calculations is (Number of trial) to the power of (Number of Variable).

## Timeout(sec)

- After the time set here elapses, optimization stops.
- If 0 is input, no stop by time is performed.

## Load if study file exists & Study Name

- If the checkbox is checked and a file of optimization results is available, the results of the training will be used to perform ongoing optimization.
- Study Name
  - Name of the training result to be saved in the optimization result file

## Run & Stop

- RunOptimize
  - Push the button to perform the optimization.
  - If the StudyName you set already exists in the results file, the optimization is performed as a continuation of that result.
- Stop
  - Force optimization to stop.
  - Even when stopped, the system automatically saves the results up to the most recent evaluation.

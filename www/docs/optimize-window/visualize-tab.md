---
description: |
  In this chapter of the Fresh documentation, you'll be introduced to the
  framework. Create a new project, run it locally, edit and create pages, fetch
  data, handle user interactions, and deploy it.
---

<img width="40%" alt="image" src="https://user-images.githubusercontent.com/23289252/188255757-8532948f-b784-45b7-b116-17ba79db9536.png">

Values that can be set and their meanings are as follows.

## Optuna-Dashboard

<img width="1188" alt="image" src="https://user-images.githubusercontent.com/23289252/190850085-691f3ee1-60c2-4b3c-9e7a-0ad9a588f770.png">

- Run Real-time Web Dashboard for handling optimization results.
  - Unlike other optimization components, Tunny does not automatically launch a window to check the optimization status when optimization is performed
  - The "5s" in the upper right corner of the above dashboard screen indicates the update frequency. If you want to check the results in real time, please set this to the desired level.
- You can more easily check results or even see results in real time.

## Visualize type

- The following types of graphing are supported. See the [Optuna.visualization](https://optuna.readthedocs.io/en/stable/reference/visualization/index.html) page below for more information.
  1. contour
  2. EDF
  3. intermediate values
  4. optimization history
  5. parallel coordinate
  6. param importance
  7. pareto front
  8. slice
  9. hypervolume **(new in v0.5.0)**
     - If the objective function or the number of trials is large, the calculation becomes very heavy; we recommend a maximum of about 100 trials.
- Show selected type of plots
  - Show the plot selected in Visualize type above.

## k-means clustering

- Cluster the results of the Pareto front when performing multi-objective optimization.Any number of clusters can be specified.
- The k-means method uses random for clustering.
  - The rough outline is not expected to change, but please understand that the results may vary from clustering to clustering.

---
description: |
  In this chapter, you will be introduced to the use of Tunny's Optimization window.
  You'll learn how to run optimize, show result plot, and get result data into grasshopper.
---

<img width="40%" alt="image" src="https://user-images.githubusercontent.com/23289252/208376571-9b062735-f334-4495-b0c5-a4f95c92376c.png">

Values that can be set and their meanings are as follows.

## Open Optuna-Dashboard

<img width="80%" alt="image" src="https://user-images.githubusercontent.com/23289252/190850085-691f3ee1-60c2-4b3c-9e7a-0ad9a588f770.png">

- Run Real-time Web Dashboard for handling optimization results.
  - Unlike other optimization components, Tunny does not automatically launch a
    window to check the optimization status when optimization is performed
  - The "5s" in the upper right corner of the above dashboard screen indicates
    the update frequency. If you want to check the results in real time, please
    set this to the desired level.
- You can more easily check results or even see results in real time.
- Each time you press the button, the Dashboard server starts up.
  - Please be sure to close the server when you are done using it, as multiple
    servers may not load results properly if more than one server is started.

## Target Study **(new in v0.6)**

- Select the Study to be visualized.

## Visualize type

- The following types of graphing are supported. See the
  [Optuna.visualization](https://optuna.readthedocs.io/en/stable/reference/visualization/index.html)
  page below for more information.
  1. contour
  1. EDF
  1. intermediate values
  1. optimization history
  1. parallel coordinate
  1. param importance
  1. pareto front
  1. slice
  1. hypervolume (Tunny only)
  1. clustering (Tunny only)

## Target Objective & Variable **(new in v0.6)**

- You can select the Objective and Variable to be visualized.
- The number of items that can be visualized differs for each Visualize type.

## Show & Save

- The show button displays the optimization results in the browser.
- The save button saves the optimization results. **(new in v0.6)**
  - The results are saved in html format so that the optimization results can be
    viewed interactively.
  - [It can be saved in this way.](/docs/optimize-window/pareto-front.html)

## Number of cluster

- Cluster the results of the Pareto front when performing multi-objective
  optimization.Any number of clusters can be specified.
- The k-means method uses random for clustering.
  - The rough outline is not expected to change, but please understand that the
    results may vary from clustering to clustering.

## Include dominated trials in pareto front **(new in v0.6)**

- If checked, the dominated trials will also be displayed when ParetoFront is
  visualized.

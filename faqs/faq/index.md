---
description: |
  This section is Tunny's Frequently Asked Questions
---

## What's the difference between Artifacts and Attributes, since both add information to Trials?

Artifacts store the actual files, with only the file paths being linked to the
Trial

Attributes are stored directly in the Trial as string information

## Why are there trials that don't satisfy the constraints even though constraints were set?

Because Tunny use soft constraints.

Soft constraints are constraints in optimization problems that "should be
satisfied if possible, but don't absolutely need to be met." This concept is
contrasted with Hard Constraints.

### Key characteristics:

1. Tolerance for violations
   1. Can violate the constraints
   2. Guides solutions toward constraint satisfaction through penalties when
      violated
2. Penalty mechanism
   1. Penalty scores are assigned based on the degree of constraint violation
   2. These penalties are incorporated into the objective function and
      considered during optimization
3. Practical advantages
   1. In real-world problems, it's often difficult to satisfy all constraints
      completely
   2. Using soft constraints allows finding more practical solutions
   3. Expands the search space, increasing the possibility of finding better
      solutions

## Optimization with constraints does not converge well

While Tunny directly supports constraint input, it is not the only way to
consider constraints. The following are possible

1. Consider it as a direct constraint, like Tunny's.
2. Consider constraint violations by adding penalty terms for constraints to the
   objective function.
3. A function of constraints is added to the objective function to make it a
   multi-objective optimization.

1 is as explained above. If your method supports consideration of constraints,
you may want to try this method first.

2 considers constraints by distorting the form of the objective function.
Therefore, it does not have a significant impact in the case of methods such as
GA, but it is different in the case of SMBO, such as Bayesian optimization.

Bayesian optimization(GP or TPE) creates a surrogate model for the objective
function. If there is a minimum value immediately adjacent to a point that does
not satisfy the constraints, the surrogate model may not represent it well. Use
caution about how the penalty term affects the shape of the objective function.

Finally, there will be 3. Many cases where optimization with constraints does
not work are situations where there are not many feasible solutions to begin
with.

In such cases, try solving the minimization with the constraint as the objective
function. It is necessary to know how likely it is that a trial really satisfies
the constraints.

In the case of methods 1 and 2, if few feasible trial, sampler will only know
that everything is bad and have little information about where to search.
Therefore, it will not converge well.

Basically, we recommend using methods 1 and 2, which take into account the
constraint conditions when there are only occasional trials that do not satisfy
the constraints, and using methods 3 for the rest of the time.

## Why is it slower compared to other optimization components like Wallacei or Galapagos?

By default, Tunny saves results to separate files at each trial so that
optimization can be restarted if Rhino crashes. This I/O operation makes it
slower compared to other optimization components.

For faster performance, we recommend using InMemoryMode. With this setting, all
results are saved at once at the end of optimization rather than during the
process, which improves speed.

## There are many optimization methods - which one should I choose?

Since v1.0, Tunny has included AutoSampler, which automatically selects the
appropriate method. It's recommended to try this first.

## Is it possible to invalidate optimization trials when modeling or other aspects don't work as intended?

You can create an Attribute named "IsFAIL" - if it contains True, that Trial is
treated as failed and its results won't be reflected in the optimization.

Note: that with methods like BO-GP that use surrogates to determine the next
search point, the system may repeatedly explore the same point even if it
failed.

This happens because the failure provides no information to the optimization
solver, so there's no indication whether the trial was good, bad, or failed.

## There are two Bayesian optimization methods using Gaussian Process - "GP Optuna" and "GP BoTorch". What are the differences between them?

As its name suggests, GP BoTorch is implemented using BoTorch, a general-purpose
library for Bayesian optimization. While it's highly versatile and can be used
for multi-objective and constrained Bayesian optimization, it has the drawback
of being slow in execution.

GP Optuna is a Gaussian process method that has been reimplemented to work with
Optuna (Tunny) optimization. Although it cannot handle multi-objective
optimization, it can consider constraints and operates faster than GP BoTorch.

If you're not doing multi-objective Bayesian optimization, I recommend using GP
Optuna.

## Tunny's UI freezes during optimization and I cannot press the STOP button even if I wanted to stop the optimization.

Create a file named “quit.fishing” in the ".tunny_env" (or ".tunny_dev_env" for
the development version) folder where Tunny-related files are located.

When Tunny recognizes the file, it will be deleted and optimization will stop on
the current trial.

## If the multi-objective optimization is not converging well, is there anything I can do to improve it?

Tunny's NSGAII and TPE and GP can use initial individuals. Therefore, single
objective optimization can be done first for each of the objective functions,
and then the best combination of variables at that time used as the initial
individuals for multiobjective optimization, which may lead to faster
convergence.

## Is it possible to perform optimization by increasing the initial generation like Galapagos' "INITIAL BOOST"?

Tunny can restart the Study. When restarting, the optimization method can be
changed.

Thus, you can first sample the boosted portion of the random or QMC, and then
perform NSGAII with that as the initial generation.

## Can the dashboard be opened easily as I just want to check the results.

Click on Tunny in the menu bar at the top of the window, and you will see “Run
Optuna Dashboard...” in it.

You can launch the dashboard from there.

## Where are the optimization results stored?

By default, the results are stored in the fish.log file on the desktop and the
artifacts in the artifacts folder. At the top of the UI you can see which path
log file is being used to save the results.

As optimization results accumulate, it will take longer to load the log file
when TunnyUI is launched. It is recommended that the log file be re-created to a
different one at regular intervals.

You can easily create a new results file or re-reference previous files from the
Quick Access at the top of the UI.

Please manage your results files so that they do not grow too large. Overly
large files can affect optimization performance.

## Latin Hypercube Sampling is not supported?

Instead of LHS, Tunny supports QMC.
It is known that QMC samples more uniformly than LHS for a smaller number of samples.
See [this paper](https://arxiv.org/abs/1505.02350) for more details.

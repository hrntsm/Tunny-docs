---
description: |
  This section is Tunny's Frequently Asked Questions
---

## What's the difference between Artifacts and Attributes, since both add information to Trials?

Artifacts store the actual files, with only the file paths being linked to the Trial

Attributes are stored directly in the Trial as string information

## Why are there individuals that don't satisfy the constraints even though constraints were set?

Because Tunny use soft constraints.

Soft constraints are constraints in optimization problems that
"should be satisfied if possible, but don't absolutely need to be met."
This concept is contrasted with Hard Constraints.

### Key characteristics:

1. Tolerance for violations
   1. Can violate the constraints
   2. Guides solutions toward constraint satisfaction through penalties when violated
2. Penalty mechanism
   1. Penalty scores are assigned based on the degree of constraint violation
   2. These penalties are incorporated into the objective function and considered during optimization
3. Practical advantages
   1. In real-world problems, it's often difficult to satisfy all constraints completely
   2. Using soft constraints allows finding more practical solutions
   3. Expands the search space, increasing the possibility of finding better solutions

## Why is it slower compared to other optimization components like Wallacei or Galapagos?

By default, Tunny saves results to separate files at each trial so that optimization can be restarted if Rhino crashes. This I/O operation makes it slower compared to other optimization components.

For faster performance, we recommend using InMemoryMode. With this setting, all results are saved at once at the end of optimization rather than during the process, which improves speed.

## There are many optimization methods - which one should I choose?

Since v1.0, Tunny has included AutoSampler, which automatically selects the appropriate method. It's recommended to try this first.

## Is it possible to invalidate optimization trials when modeling or other aspects don't work as intended?

You can create an Attribute named "IsFAIL" - if it contains True, that Trial is treated as failed and its results won't be reflected in the optimization.

Note: that with methods like BO-GP that use surrogates to determine the next search point, the system may repeatedly explore the same point even if it failed.

This happens because the failure provides no information to the optimization solver, so there's no indication whether the trial was good, bad, or failed.

## There are two Bayesian optimization methods using Gaussian Process - "GP Optuna" and "GP BoTorch". What are the differences between them?

As its name suggests, GP BoTorch is implemented using BoTorch, a general-purpose library for Bayesian optimization.
While it's highly versatile and can be used for multi-objective and constrained Bayesian optimization,
it has the drawback of being slow in execution.

GP Optuna is a Gaussian process method that has been reimplemented to work with Optuna (Tunny) optimization.
Although it cannot handle multi-objective optimization, it can consider constraints and operates faster than GP BoTorch.

If you're not doing multi-objective Bayesian optimization, I recommend using GP Optuna.

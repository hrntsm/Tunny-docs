---
description: |
  This section provides an overview of the Random & Quasi-Monte Carlo.
---

# Random & Quasi-Monte Carlo

Tunny provides not only optimization algorithms such as Bayesian optimization and genetic algorithms, but also the Random Sampler and the QMC Sampler, which simply sample using random.  
In this section, why they are in Tunny and when they are needed will be explained, including the technical details.

## Difference between the two

Before reading the detailed explanation, it is best to first look at the results of sampling with each sampler for the best understanding.

Since Tunny's Quasi-MonteCarlo sampler can use two algorithms, Halton and Sobol, these are the results of what values were sampled when `x` and `y` were sampled in the range of `-10 to 10` using those two and a random sampler.
In the following, 256 individuals were sampled, and the darker the color, the later they were sampled.

- QMC(Halton)
  <img width="300" src="/docs/technical-info/halton.png">

- QMC(Sobol')
  <img width="300" src="/docs/technical-info/sobol.png">

- Random
  <img width="300" src="/docs/technical-info/random.png">

I hope everyone who has seen these figures already understands the difference between Random and QMC.

Sampling with QMC is random, but the points are not crowded together in one place, and are sampled at moderate intervals.
A number sequence with this characteristic is called a `low-discrepancy sequence`.

On the other hand, the Random Sampler is required to be as "random" as possible, as the word implies, so it may sample a point very close to a point that has already been observed.

## When to use it

## Which to use?

If you want to know the entire solution space cleanly, I recommend using `QMC`.  
The distinction between the use of Halton and Sobol' is that sobol has the feature of being able to sample with more variables, while still keeping a constant interval.
However, Sobol' is an algorithm that results in a low-discrepancy sequence when sampling to powers of two, so Halton may be used if sampling to powers of two is not possible.

Next, let's look at when to use `Random`.
Random is useful, for example, when the objective function may zigzag within a short range.  
As explained above, QMC has low discrepancy, so there is always a fixed interval between the observation points. Therefore, zigzagging in a short range may not be observable.

Tunny allows you to change the range of variables within the same study. Thus, for example, you can start with QMC to check the entire study, and then change the range of the Number slider to sample only the areas you want to look at in more detail with Random.
Using this functionality, it is possible to not only perform simple optimization, but also to gain a more detailed understanding of the solution space.

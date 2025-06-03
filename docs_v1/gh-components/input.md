---
description: |
  In this chapter of the Fresh documentation, you'll be introduced to the
  framework. Create a new project, run it locally, edit and create pages, fetch
  data, handle user interactions, and deploy it.
---

## :ocean: Variables

Tunny support Number slider, GenePool & Fish Egg. Optimization is performed when
this value is changed by Tunny. FishEgg input is not required.

In this example, FishEgg is input, so `x1=-1.03`, `x2=-10`, and `x3=-7.25` are
the first combination of variables that will be evaluated when the optimization
is run.

It is recommended that components be given nicknames, as this makes it easier to
understand the resulting process. Here it is named x1, x2, x3. The genepool
values are nicknamed from the top as genepool1, genepool2, and so on.

<img width="60%" src="https://user-images.githubusercontent.com/23289252/208358693-79efbfae-3527-4f26-8d5d-81fe582ebf99.png">

## :whale2: Objectives

Optimization is performed to minimize the value input here. Multi-objective
optimization is also supported.

Each objective value have to be separated to a number component. It is
recommended to set nickname like input variables.

<img width="40%" src="https://user-images.githubusercontent.com/23289252/178102527-4d8a90f1-c2d6-4611-8b20-ea655c9f752b.png">

## :fried_shrimp: Attributes

This input is optional.

The Construct Fish Attribute component allows you to set an Attribute for each
trial of optimization. "ZUI" is supported, so you can increase the number of
inputs to any number and set Attribute.

The nickname of the Construct Fish Attribute component input is stored paired
with the value entered as the name of that Attribute.

### Geometry

The Geometry input has a special meaning; what is entered here will be displayed
as a Geometry when the results are sorted in the FishMarket component described
below. `Curve`, `Surface`, `Mesh`, `Brep`, and `SubD` are supported, but inputs
other than Mesh are not recommended due to the large size of the resulting file.

### Constraint

The Constraint inputs are also special inputs. The values entered here are the
constraints in the optimization. When this value is less than 0, the trial is
feasible. Constraint conditions are supported by `TPE`, `GP` and `NSGAII`.

Tunny's optimization constraints are called "soft constraint". Although some
optimization results may not satisfy the constraint, the information that they
do not satisfy is also used to find the optimal solution.

<img width="60%" alt="image" src="https://user-images.githubusercontent.com/23289252/188254609-3c8432ba-3f1c-45f4-bd2a-9e3f08271c2b.png">

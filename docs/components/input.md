---
description: |
  In this chapter of the Fresh documentation, you'll be introduced to the
  framework. Create a new project, run it locally, edit and create pages, fetch
  data, handle user interactions, and deploy it.
---

## :ocean: Variables

Tunny support Number slider & GenePool.
Optimization is performed when this value is changed by Tunny.

It is recommended that components be given nicknames, as this makes it easier to understand the resulting process. Here it is named x1, x2, x3.
The genepool values are nicknamed from the top as genepool1, genepool2, and so on.

<img width="40%" src="https://user-images.githubusercontent.com/23289252/178102419-903887d3-6a30-4485-adf8-369ac218a28b.png">

## :whale2: Objectives

Optimization is performed to minimize the value input here. Multi-objective optimization is also supported.

Each objective value have to be separated to a number component.
It is recommended to set nickname like input variables.

<img width="40%" src="https://user-images.githubusercontent.com/23289252/178102527-4d8a90f1-c2d6-4611-8b20-ea655c9f752b.png">

## :fried_shrimp: Attributes

This input is optional.

The ConstructFishAttribute component allows you to set an Attribute for each trial of optimization.
ZUI is supported, so you can increase the number of inputs to any number and set Attribute.

The nickname of the ConstructFishAttribute component input is stored paired with the value entered as the name of that Attribute.

The Geometry input has a special meaning;
what is entered here will be displayed as a Geometry when the results are sorted in the FishMarket component described below.

Constraint inputs are also special inputs.**(new in v0.5.0)** The values entered here are the constraints in the optimization.
When this value is less than 0, the constraint is considered satisfied.
Constraint conditions are supported by TPE, GP and NSGAII.

<img width="60%" alt="image" src="https://user-images.githubusercontent.com/23289252/188254609-3c8432ba-3f1c-45f4-bd2a-9e3f08271c2b.png">

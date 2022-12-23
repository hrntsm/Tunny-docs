---
description: |
  In this chapter, you will be introduced to the use of Tunny's Optimization window.
  You'll learn how to run optimize, show result plot, and get result data into grasshopper.
---

<img width="40%" alt="image" src="https://user-images.githubusercontent.com/23289252/208377086-b452abc5-3332-4d11-8642-b553567b6194.png">

Values that can be set and their meanings are as follows.

## Target Study

- Select the Study to be output.

## Parato solutions

- Output Parato solutions.

## All trials

- Output all trials.

## Use model number

- Multiple values can be entered separated by commas, such as "1,3,42".
  - Do not insert any space between each letter

## Output the above number models

- The model with the number entered here is restored from the optimization results file and is the output of the component.
- Model numbers are easiest to see in the diagrams produced from each plotting function.
  - In the example below, model number 424 with a value of -11.49 for the objective ID:0 is selected.

<img width="80%" alt="image" src="https://user-images.githubusercontent.com/23289252/178103519-70286138-3dc4-4d65-ae66-7c918e5b4805.png">

## Reflect the result on the sliders

- The result of the input model number is reflected in Slider and Genepool.
- Only one result can be reflected in Grasshopper's slider, so if multiple values are entered for Model Number, the first one will be used.

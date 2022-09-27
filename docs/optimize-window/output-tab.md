---
description: |
  In this chapter of the Fresh documentation, you'll be introduced to the
  framework. Create a new project, run it locally, edit and create pages, fetch
  data, handle user interactions, and deploy it.
---

<img width="40%" alt="image" src="https://user-images.githubusercontent.com/23289252/188255933-62df2324-29b0-40e2-9568-6b825ed147dd.png">

Values that can be set and their meanings are as follows.

## Output result

First, the model number matches the tree structure of the output  
If the model number is 42, the output is {0; 42}

### Parato solutions

- Output Parato solutions.

### All trials

- Output all trials.

### Use model number

- Multiple values can be entered separated by commas, such as "1,3,42".
  - Do not insert any space between each letter

#### Output button

- The model with the number entered here is restored from the optimization results file and is the output of the component.
- Model numbers are easiest to see in the diagrams produced from each plotting function.
  - In the example below, model number 424 with a value of -11.49 for the objective ID:0 is selected.

<img width="80%" alt="image" src="https://user-images.githubusercontent.com/23289252/178103519-70286138-3dc4-4d65-ae66-7c918e5b4805.png">

#### Reflect the result on the sliders

- The result of the input model number is reflected in Slider and Genepool.
- Only one result can be reflected in Grasshopper's slider, so if multiple values are entered for Model Number, the first one will be used.

---
description: |
  This section describes how to support Tunny development.
---

In plots of Tunny's optimization results, do you sometimes want to plot any value, not just the optimization results?
For example, you may want to compare the pre-optimization values with the optimization results.  
Unfortunately, this operation cannot be done on Grasshopper, but it can be done using Python code.

This operation can be achieved with a few additions to the code that displays the optimization results using the code introduced in the previous section.  
First, read the optimization results and create a `fig`.

```cs
# set storage path
storage = "sqlite:///PATH_TO/Tunny_Opt_Result.db"

# load tunny result RDB file to get study data
study = optuna.load_study(storage=storage, study_name="your_study_name")

# get figure instance
fig = optuna.visualization.plot_pareto_front(study)
```

In the above example, the scatter plot is being created,
so any values are added using `add_scatter3d`,
which adds values to the scatter plot.
After add values, the plot is displayed and saved below.
The following example adds a new point at coordinates [1,1,1] with the name "added point" displayed on mouse hover.

```cs
# add data point
fig.add_scatter3d(x=[1], y=[1], z=[1], name="added point")

# show figure
fig.show()

# save figure as html
fig.write_html(./fig.html)
```

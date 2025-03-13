---
description: |
  This section describes how to support Tunny development.
---

Tunny performs optimization by running Optuna, a Python optimization library,
from Grasshopper. How this is achieved is the same as RhinoCode, a feature
available from Rhino8, using a library called Pythonnet.

When Tunny is launched for the first time, several libraries are automatically
installed. This downloads the Python runtime environment to your computer. If
you have used Python before, look in the folder where the "Tunny.gha" file is
located. The python runtime environment is created in the folder
"python-3.10.0-embed-amd64".

Therefore, execute the following command in that installed Python folder.

```bash
$ ./python.exe
```

Then the interactive mode of the Python environment used by Tunny will be
started as follows.

```
Python 3.10.0 (tags/v3.10.0:b494f59, Oct  4 2021, 19:00:18) [MSC v.1929 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information. 
>>>
```

The following command confirms that the libraries required for optimization have
already been installed by Tunny.

```bash
$ ./python.exe -m pip list
```

The following results will be output.

```
Package           Version
----------------- -------
alembic           1.8.0
attrs             21.4.0
autopage          0.5.1
botorch           0.6.5
bottle            0.12.21
cliff             3.10.1
...
```

Since Tunny only uses this environment, you can perform optimizations and chart
the results from the code just as you would from regular Python code. In this
chapter, you will learn how to do this.

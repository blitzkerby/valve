---
title: LINEAR REGRESSION
allDay: true
date: 2024-07-06
completed: 
tags:
  - statistics
---
# Least-Squares Regression Line

Suppose that the desired polynomial, $p(x)$, is written
## $$
p(x) = a+\sum_{i=1}^{b} {b_i x^i}
$$
The polynomial $p(x)$ that we will call the “best” is the one whose coefficients minimize the function L, where
## $$
L = \sum_{i=1}^{m} ( {y_i} - p(x_i) )^2
$$
Given n points $\begin{bmatrix} x_1 \\ y_1 \end{bmatrix}$ , $\begin{bmatrix} x_2 \\ y_2 \end{bmatrix}$ , … , $\begin{bmatrix} x_n \\ y_n \end{bmatrix}$ the straight line  $y=a+bx$  minimizing $L$ has slope:
## $$
\begin{align}
 b &= \frac{\displaystyle  n\sum_{i=1}^{n} {x_i y_i} - \sum_{i=1}^{n} {x_i} \sum_{i=1}^{n} {y_i}   }
			{\displaystyle n \sum_{i=1}^{n} {x_i^2} -  ( \sum_{i=1}^{n} x_i )^2 } \\ \\
			
		&= \frac{  n S_{x y}  -  S_x S_y } 
				{  n S_{x^2}  -  S_x^2}
\end{align}
$$






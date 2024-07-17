---
title: A trick for Logarithm integrals
allDay: true
date: 2024-06-03
completed: 
tags:
  - integral
  - logarithm
---

--- start-multi-column: ID_4uxw
```column-settings
Number of Columns: 2
Largest Column: standard
```
$$
\begin{equation} 
	\begin{split} 
		\int^{e}_{1}{\ln x}{\ dx} &={\int^e_1}{\int^x_1}{\frac{1}
													          {t}}{\ dt}{\ dx}  
													          \\ \\
								  &={\int^e_1}{\int^e_t}{\frac{1}
													          {t}{\ dx}{\ dt}}  
													          \\ \\
						          &={\int^e_1}{\frac{x}
											        {t}{\Big|^e_t}{\ dt}} 
											        \\ \\
								  &={\int^e_1}{(\frac{e}
												     {t} - 1)}{\ dt} 
												     \\ \\
								  &={e\ln(t)-t}{\Big|^e_1} \\ \\
								  &={1}
	\end{split}
\end{equation}
$$


--- column-break ---
$$
\begin{equation} 
	\begin{split} 
		\text{use the integral definition of Logarithms}\\ \\ \\
		\text{change order of partial integrals}\\ \\ \\
		\text{evaluate the inner integral} \\ \\ \\
		\text{evaluate the outer integral} \\ \\ \\
	\end{split}
\end{equation}
$$


--- end-multi-column


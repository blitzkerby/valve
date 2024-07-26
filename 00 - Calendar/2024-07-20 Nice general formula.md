---
title: Nice general formula
allDay: false
startTime: 23:00
endTime: 23:30
date: 2024-07-20
completed: null
---
### $$
\begin{align}
	&
	\begin{matrix}
		\displaystyle{ \int^{\infty}_{0}  e^{-x^{n}}  dx } & & (n>0)
	\end{matrix}	\\ \\ \\
	\text{we have,} \\
	u  &= x^n \\ \\
	du &= nx^{n-1} dx \\ \\
	dx &= \frac{1}{n} x^{1-n} du \\ \\
	   &= \frac{1}{n} x^{ n \frac{1-n}{n} } du \\ \\
	   &= \frac{1}{n} u^{   \frac{1-n}{n} } du \\ \\
	\int_{ }^{ }dx &= \int_{ }^{ }\frac{1}{n}u^{\frac{1-n}{n}}du \\ \\
	x  &= \frac{1}{n}\left(\frac{1-n}{n}+1\right)^{-1}u^{\left(\frac{1-n}{n}+1\right)} \\ \\
	x  &= \frac{1}{n}\left(\frac{1}{n}\right)^{-1}u^{\left(\frac{1}{n}\right)} \\ \\
	x  &=  u^{\frac{1}{n}}
	\\ \\ \\	
	=&
	\begin{matrix}
		\displaystyle{ \int^{\infty}_{0}  e^{-x^{n}}  dx } & & & 
	\end{matrix}	\\ \\
\end{align}
$$



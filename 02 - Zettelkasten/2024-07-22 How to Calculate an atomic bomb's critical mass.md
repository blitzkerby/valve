---
title: test
allDay: false
startTime: 18:00
endTime: 18:30
date: 2024-07-17
completed: 
tags:
  - physics
---

## The Neutron Diffusion Equation

$$
\large
{
	\begin{align}
		& \frac{\partial N}
			{\partial t} = \frac{(v-1)}
						{\tau}N  + \frac{\lambda_t \lambda_f}
										{3\tau} \nabla^2 N
	\end{align}
}
$$
#####  $$
\begin{align}
	 &N(x,t) \ \text{ is the neutron density function (inside of the material)}
	 \\
	 \\
	 
	 &\frac{\partial N}{\partial t} \ \text{ is the rate at which density changes with time}
\end{align}
$$


## Continuity Equation
 $$
\large
{
	\frac{\partial N}
		{\partial t} + \nabla \cdot J = 0
}
$$
#####  $$
\begin{align}
	 & J \ \text{ is the flow of neutrons through a small volume}
	 \\
	 \\
\end{align}
$$

However, in nuclear fission, a neutron disappears and 3 more is generated. Thus the continuity equation is written as follows:


## Continuity with sources
## $$
\frac{\partial N}
	{\partial t} + \nabla \cdot J = S_+ - S_-
$$
#####  $$
\begin{align}
	 &S_+ \ \text{ is the rate at which new neutrons are created by fission}
	 \\
	 \\
	 
	 &S_- \ \text{ is the rate at which new neutrons are consumed by fission}
\end{align}
$$

## Source and Sink

The source of neutrons is fundamentally the average number of neutron creations times 
$$
\begin{align}
	{S_+} = v \frac{N}{\tau} \\ \\
	{S_-} =   \frac{N}{\tau} 
\end{align}
$$
#####  $$
\begin{align}
	 &v \ \text{ is the average number of neutron created}
	 \\
	 \\
	 
	 &N \ \text{ is the average density}
	 \\
	 \\
	 
	&\tau \ \text{ is the average time between fissions}

\end{align}
$$



The neutrons will first start off in a region of high-density as a result of the burst, and will spread out to lower-density. This is called Fick’s law.

![[Screenshot 2024-07-17 at 6.45.36 in the evening.png]]
Fick’s Law is represented mathematically as:
## $$
J = -D \nabla N
$$
#####  $$
\begin{align}
	 &D \ \text{ is the diffusion factor}
	 
	 \\
	 \\
\end{align}
$$
#### Diffusion Constant
## $$
	 D = \frac{1}{3} \lambda_t \Braket{v} 
$$
#####  $$
\begin{align}
	 &\lambda_t \ \text{ is the transport mean-free path}
	 \\
	 \\
	 
	 &\Braket{v} \ \text{ is the average speed of the neutrons}
\end{align}
$$




Putting the continuity equation and the diffusion factor together:

### $$
\begin{cases}
	\begin{align} 
		\frac{\partial N}
		{\partial t} + \nabla \cdot J &= S_+ - S_- 
		
		\\ 
	
		J &= -D \nabla N
	
	\end{align} 

    \ \ \ 
\end{cases}
$$

## $$
\begin{align} 
	\frac{\partial N}
		{\partial t} + \nabla \cdot (-D \nabla N) &= S_+ - S_-  \\ \\
\end{align}
$$


## Laplacian Operator

#### $$
\begin{align}
	\Delta f 
	&= \nabla^2f
	
	\\ \\
	
	&= \nabla\cdot(\nabla f) 
	
	\\ \\
	
	&= \frac{\partial f}{\partial x^2} + \frac{\partial f}{\partial y^2} + \frac{\partial f}{\partial z^2}
\end{align}
$$

## Diffusion equation 

#### $$
\begin{align}

	\frac{\partial N}{\partial t} -D\nabla^2N &= S_+ - S_-

	 \\ \\

	\frac{\partial N}{\partial t} &= S_+ - S_-  + D \nabla^2 N

\end{align}
$$



---
title: DESIGN DOCUMENTATION
allDay: false
startTime: 15:30
endTime: 16:00
date: 2024-08-06
completed: null
---

# Screen Sizes


**Our app will feature a responsive design that seamlessly adapts to various screen sizes.** To optimize user experience, we will focus on two primary design layouts: tablet and mobile.

*We have adopted a design approach similar to Facebook's*, where the core design elements are consistent across mobile and desktop platforms. Consequently, our desktop view will be primarily based on the tablet layout. While our app is not specifically designed for ultra-wide screens, it will be compatible with them.

Mobile users can expect a stable and enjoyable experience, regardless of device specifications.


* Desktop
	* Size class: Large
	* breakpoint: down to 1007px

* Tablet
	* Size class: Medium
	* Breakpoint: 1007-641px
	
* Phone
	* Size class: Small
	* Breakpoint: up to 640p
	

$$
\large{
	\begin{matrix}
	   & 
	   & 
	   & \text{Desktop} 
	   & > 
	   & 1007px \\
	   
	   & 1007px 
	   & \ge 
	   & \text{Tablets} 
	   & > 
	   & 641 px \\
	   
	   & 641px  
	   & \ge 
	   & \text{Phone}
	\end{matrix}
}

$$


# Miscellaneous


For other niche considerations, in relation to the components and page layouts, we have the following:

- **Navbar** : transparent design similar to GitHub’s layout
- **Home** **Layout**: similar design layout to Chosic (very minimal in design)

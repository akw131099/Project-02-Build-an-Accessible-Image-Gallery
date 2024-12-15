#Reflection

In this project I have used a large JS function to generate thumbnail images that are wrapped inside buttons which, when clicked, create a copy of themselves that fill the screen.

I declared an array with the src and alt details of four images, then used a loop to go through each part of the array automatically, using the src and alt details to generate images.
This loop was inside a large function, which was essentially responsible for generating everything on the page. I decided to keep everything inside the same function instead of using a couple different ones for convenience, as I wanted to be able to access the variables inside the scope of the function for multiple different purposes.

I wrapped my img elements in buttons as when I initially created the function, I did not use buttons and as a result could not use the tab bar to navigate to them. Unfortunately, the downside to using buttons is that I could not get the images to fill them properly, hence the blank line at the bottom of each thumbnail.

most of the issues I had with this project were with CSS. Getting flex-box to behave as intended was seemingly impossible for some reason, and when I tried to use grid, I had the same issue.

I have used a media query for screen size-max: 375px. I belive this is the dimension of the iPhone SE. The page should also look decent on laptop screens, as that is the other screen size I styled it for.

Overall, this assignment was an odd one for me. I must say that I learned a lot about JavaScript during this process, and building the function was satisfying. However, as mentioned before, CSS styling elements proved to be more of a pain than they should have, with one example being that no matter what I did, wether it was trying to use flex or grid on different elements, the thumbnail container would just default to the top left of the screen. Justify-content on the relevant target wasn't doing anything, and as mentioned before, the grid was behaving erratically and a lot of the time grid-row-start etc were having no effect. Sometimes the grid would be there, other times it would be nowhere to be seen.

I am submitting the project in a state that I am not 100% proud of, as I would like to fix all these minor issues, but due to time I will have to do that later down the line when I have a better understanding.

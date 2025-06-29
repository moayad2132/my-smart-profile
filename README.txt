Hey everyone! Welcome to my "My Smart Profile" project.

I've put together a cool, multi-page personal profile website using HTML5, CSS3, JavaScript, jQuery, and Bootstrap 5. 
It's fully responsive.

Here's how I've organized everything in the project folder:

my-smart-profile/
├── index.html
├── about.html
├── contact.html
├── portfolio.html
├── fun.html
├── smart.html
├── style.css
├── script.js
├── quote.txt
└── images/
├── image1.jpg
Here is the hosted website URL using GitHub Pages: https://moayad2132.github.io/my-smart-profile/index.html 
Let's dive into what each page does:

1. Home Page (index.html) 
This is the first page you'll see when you open the site. 
I've built a responsive Bootstrap navbar at the top that links to all the other pages,
There's a friendly welcome message, an image, and a brief description about me,
all using Bootstrap's grid system.
I've added a responsive Bootstrap carousel with three icons and quotes. 



2. About Me Page (about.html) 
This is the about me page.
This page contains three sections: my biography, hobbies, and personal goals.
And I added my style with an external CSS file (style.css) and Bootstrap to keep things clean and responsive.
I have also added a "Show More" button with JavaScript that reveals extra content.
and a "Theme Switcher" toggle between Light and Dark Mode.



3. Contact Page (contact.html) 
On this page, you can contact me if you have any questions or advice.
I included a complete HTML form.
With fields such as your Name (text), Email, Age (number), Gender (radio buttons),
Your favorite language (a dropdown!), and a Message area.
I've used HTML5 validation (like required and type="email")
to make sure everything's filled out correctly, and it's all styled nicely with CSS and Bootstrap's form controls. 



4. Portfolio Page (portfolio.html) 
On this page, I show some of my projects 
I created three of my projects using Bootstrap cards.
To make it more dynamic, 
I added some JavaScript so you can update one of the cards dynamically when you click in the Card container, or the image will load
The dynamic card and changing the content.




5. Fun Page (fun.html) 
It is a page for some fun interactions.
I've used jQuery here to show and hide a block using slideToggle(), and there is an image that you can fadeIn() and fadeOut()
When you click a button, you can load external text content (like a quote or a joke) from 
quote.txt right into a <div> using jQuery AJAX. 
Note: Please make sure the live server is running to load the quotes correctly or if the web is hosted on the internet.



6. Smart Interaction Page (smart.html) 
This page demonstrates some more interactive elements. 
There's an input field that gives you a live, personalized greeting as you type,
Using keyup events.
I've also used jQuery to change the background color of an element when you hover over it,
and you can animate an element (like making it bounce, fade, or slide) with a click. I've also integrated the Light/Dark theme switcher here, or you can find it globally if I decided to keep it that way! 

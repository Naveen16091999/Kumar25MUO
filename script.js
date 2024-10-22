    
        // Function to switch tabs
        function switchTab(tabId) {
            // Hide both sections
            document.getElementById('technology').style.display = 'none';
            document.getElementById('pc-mobile').style.display = 'none';

            // Remove active class from both buttons
            document.querySelectorAll('.tab').forEach(function (tab) {
                tab.classList.remove('active');
            });

            // Show the selected section and mark the button as active
            document.getElementById(tabId).style.display = 'block';
            event.target.classList.add('active');
        }

    // JavaScript for slider
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slider img');
    const newsTitles = [
        "OpenAI's New 'Canvas' Tool Likely to Annoy Pro Writers",
        "How to Use a Gaming Handheld Efficiently",
        "Understanding the Future of Mobile Technology"
    ];
    const titleElement = document.getElementById('news-title');
    
    function showSlide(index) {
        // Ensure the slide index wraps around
        if (index >= slides.length) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = slides.length - 1;
        } else {
            slideIndex = index;
        }
    
        // Hide all slides
        slides.forEach((slide, i) => {
            slide.style.display = 'none';
        });
    
        // Show the active slide
        slides[slideIndex].style.display = 'block';
    
        // Update the news title based on the active slide
        titleElement.textContent = newsTitles[slideIndex];
    }
    
    function nextSlide() {
        showSlide(slideIndex + 1);
    }
    
    function prevSlide() {
        showSlide(slideIndex - 1);
    }
    
    // Initialize the first slide
    showSlide(slideIndex);
    
   
        document.querySelectorAll('.more-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        alert('You clicked MORE!');
    });
});

// Select the button and text elements
const toggleBtn = document.querySelector('.toggle-btn');
const threadText = document.querySelector('.thread-text');

// Toggle text expansion
toggleBtn.addEventListener('click', function() {
    if (threadText.classList.contains('expanded')) {
        threadText.classList.remove('expanded');
        toggleBtn.textContent = 'Show More';
    } else {
        threadText.classList.add('expanded');
        toggleBtn.textContent = 'Show Less';
    }
});

// Select all comment icons
const commentIcons = document.querySelectorAll('.comments');

commentIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        let commentCount = icon.querySelector('.comment-count');
        let count = parseInt(commentCount.textContent, 10);
        commentCount.textContent = count + 1;
    });
});


    
    function switchTab(tabId) {
        // Hide all tabs
        var tabs = document.getElementsByClassName('sidebar-articles');
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.display = 'none';
        }

        // Remove active class from all buttons
        var buttons = document.getElementsByClassName('tab');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('active');
        }

        // Show the selected tab
        document.getElementById(tabId).style.display = 'block';

        // Add active class to the clicked button
        event.target.classList.add('active');
    }

    // Initially show the technology tab
    document.getElementById('technology').style.display = 'block';

    document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    lazyImages.forEach((img) => {
        img.addEventListener("load", () => {
            img.classList.add("loaded");
        });
    });

    // Mobile-specific enhancements, if needed
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
});


    document.getElementById('see-more-button').addEventListener('click', function () {
    // You can add any action here, like loading more content dynamically
    alert('Loading more content...');
});


    document.querySelector('.card').addEventListener('click', function() {
    // Add functionality for a click event (e.g., redirect or show more info)
    alert('Card clicked!');
});


    document.getElementById('seeMoreBtn').addEventListener('click', function() {
    alert('You clicked SEE MORE!');
});


    // JavaScript to switch between tabs
    function switchTab(tabId) {
        const tabs = document.querySelectorAll('.sidebar-articles');
        tabs.forEach(tab => tab.style.display = 'none');
        document.getElementById(tabId).style.display = 'block';
        
        const buttons = document.querySelectorAll('.tab');
        buttons.forEach(button => button.classList.remove('active'));
        event.target.classList.add('active');
    }

    // Placeholder function for 'See More' button
    function loadMoreArticles() {
        alert('Loading more articles...');
        // Add logic to load more articles here (e.g., AJAX request).
    }
































































































































































































































































// Function to switch tabs
        //function switchTab(tabId) {
            // Hide both sections
            //document.getElementById('technology').style.display = 'none';
            //document.getElementById('pc-mobile').style.display = 'none';

            // Remove active class from both buttons
           // document.querySelectorAll('.tab').forEach(function (tab) {
                //tab.classList.remove('active');//
            

            // Show the selected section and mark the button as active
            //document.getElementById(tabId).style.display = 'block';
            //event.target.classList.add('active');
        


// JavaScript for slider
    //let slideIndex = 0;
    //const slides = document.querySelectorAll('.slider img');
    //const newsTitles = [
        //"OpenAI's New 'Canvas' Tool Likely to Annoy Pro Writers",
       // "How to Use a Gaming Handheld Efficiently",
       // "Understanding the Future of Mobile Technology"
    
    //const titleElement = document.getElementById('news-title');
    
    //function showSlide(index) {
        // Ensure the slide index wraps around
        //if (index >= slides.length) {
            //slideIndex = 0;
         //else if (index < 0) {
            //slideIndex = slides.length - 1;
         //else {
           // slideIndex = index;
        
    
        // Hide all slides
        //slides.forEach((slide, i) => {
            //slide.style.display = 'none';
        
    
        // Show the active slide
        //slides[slideIndex].style.display = 'block';
    
        // Update the news title based on the active slide
        //titleElement.textContent = newsTitles[slideIndex];
    
    
    //function nextSlide() {
        //showSlide(slideIndex + 1);
    
    
    //function prevSlide() {
        //showSlide(slideIndex - 1);
    
    
    // Initialize the first slide
    //showSlide(slideIndex);


 //document.querySelectorAll('.more-link').forEach(link => {
    //link.addEventListener('click', (event) => {
        //event.preventDefault();
        //alert('You clicked MORE!');
    


// Select the button and text elements
//const toggleBtn = document.querySelector('.toggle-btn');
//const threadText = document.querySelector('.thread-text');

// Toggle text expansion
//toggleBtn.addEventListener('click', function() {
    //if (threadText.classList.contains('expanded')) {
        //threadText.classList.remove('expanded');
        //toggleBtn.textContent = 'Show More';
     //else {
       // threadText.classList.add('expanded');
        //toggleBtn.textContent = 'Show Less';
    


// Select all comment icons
//const commentIcons = document.querySelectorAll('.comments');

//commentIcons.forEach(icon => {
    //icon.addEventListener('click', function() {
        //let commentCount = icon.querySelector('.comment-count');
        //let count = parseInt(commentCount.textContent, 10);
       // commentCount.textContent = count + 1;
    


//function switchTab(tabId) {
        // Hide all tabs
        //var tabs = document.getElementsByClassName('sidebar-articles');
        //for (var i = 0; i < tabs.length; i++) {
            //tabs[i].style.display = 'none';
        

        // Remove active class from all buttons
        //var buttons = document.getElementsByClassName('tab');
        //for (var i = 0; i < buttons.length; i++) {
            //buttons[i].classList.remove('active');
        

        // Show the selected tab
        //document.getElementById(tabId).style.display = 'block';

        // Add active class to the clicked button
        //event.target.classList.add('active');
    

    // Initially show the technology tab
    //document.getElementById('technology').style.display = 'block';

//let currentSlide = 0;
//document.addEventListener('DOMContentLoaded', function() {
    //const slides = document.querySelectorAll('.slide');
    // Your logic here



//function showSlide(index) {
    //if (index < 0) {
        //currentSlide = slides.length - 1; // Wrap to last slide
    //else if (index >= slides.length) {
       // currentSlide = 0; // Wrap to first slide
     //else {
        //currentSlide = index; // Update current slide
    

    //const slider = document.querySelector('.slider');
    //const offset = -currentSlide * 100; // Calculate offset
    //slider.style.transform = `translateX(${offset}%)`; // Move to slide


// Function to show the next slide
//function nextSlide() {
    //showSlide(currentSlide + 1); // Move to next slide


// Function to show the previous slide
//function prevSlide() {
    //showSlide(currentSlide - 1); // Move to previous slide


// Initialize to show the first slide
//showSlide(currentSlide);

























/*document.querySelector('.image-container').addEventListener('click', function() {
    alert("You clicked on the image!");
});

// JavaScript to handle active state and additional interactivity
document.querySelectorAll('.bc-listing-categories-link').forEach(function(categoryLink) {
    categoryLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link action
        
        // Remove active class from all links
        document.querySelectorAll('.bc-listing-categories-link').forEach(function(link) {
            link.classList.remove('active');
        });

        // Add active class to the clicked link
        categoryLink.classList.add('active');

        // Optional: You can perform additional actions, like loading content dynamically
        console.log('Selected category:', categoryLink.innerText);
    });
});*/

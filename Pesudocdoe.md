Requirements
To complete the assignment, you must complete the following:

Display the current time (Hour:Minute:Second AM/PM) as a digital clock format

Make sure it updates every second without refreshing the page



Additional Requirements:
Website must be responsive
Website must be styled
Use the tools and technologies covered in class to complete your website. To see what we have covered, check the Class Resources Repo.
Your repo should be public so that others can see your code and comment on it.
Potential employers will view your GitHub profile, so activity is crucial!



Stretch Goal
Change the font for the display; a mono-spaced font would look more like a digital clock, and it wouldn't jar your eyes as the variable-width string is re-centered every second.
Add the date (day, month, and year)
Make a button for toggling between a 12-hour and a 24-hour display
Turn it into an ANALOG clock!

STEPS
    create a basic html layout
    in .html file cheat a bisic header and body with paragraph
    in js use the date object to create the data 
    then use set interval on the set object to refresh the date boject rather than the page 
    this is to keep the current time in 
    var refresh= setInterval ("function to be called","time in millsecs between intervals)
        this is to refresh the time 

    creat function to generat cunnrent time 
        uses new date 
        set new date equal to a variable
        date var now has properties of the date array
        us"var".getHours/min/sec to select each part
        seperate by ":"

        use .innerText to create new clock on page 
            set equal to

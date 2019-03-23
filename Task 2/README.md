TASK 2 : CONVERTOR
Make a javascript function to turn the TrackML challenge data provided in the google drive
(the files are called event0000000000-*) into a javascript dictionary, then use this to
use three.js to draw a curved line, representing the charged particle trajectory (or “track”).
You can see this as a two-stage process:
1 - You take the parameters of a track out of the provided data, and store them into a
custom javascript dictionary
2 - You read data from the javascript dictionary you create for the first step, and you create a
curved line in three.js out of them, representing the original track.
The task involves the design of a convenient data format for the javascript dictionary, to
efficiently and easily store track data. There is a lot of information in the Kaggle dataset that
isn’t really required - the minimum is just the points (or “hits”) which correspond to each
track.
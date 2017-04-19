Template directive mini project: <br />

1. Take a look at the files in this project and become familiar with them. You have a working angular app. If you run live-server, you should see 'My students:' in the browser. <br />

2. Create a custom template directive. This directive does not need its own controller and does not need the link function. The template you will use for the directive has already been created for you, 'studentTmpl.html'. <br />

3. Put one instance of the directive in the index.html file. <br />

4. In controller, the value of $scope.students is an array of student objects. You can see exactly what the array looks like if you look at the mainService.js file. <br />

Using ng-repeat in the studentTmpl.html file, repeat the student data. <br />

5. You now see the list of students in the browser. There are two buttons for each student, 'Hide grade' and 'Show grade'. A student's grade and 'Hide grade' button should be HIDDEN, at first. When the 'Show grade' button is clicked on: <br />

- the 'Show grade' button should be hidden
- the student's grade should be shown
- the 'Hide grade' button should be shown <br />
- the opposite should occur when the 'Hide grade' button is clicked on <br />

6. After the functionality of showing and hiding the students' buttons and grades is completed, show your mentor this project.

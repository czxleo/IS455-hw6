const displayText400 = () => {
  const courses = document.querySelectorAll('[class="400level"]');

  courses.forEach((course) => {
    console.log(course.textContent);
  });
};

displayText400();
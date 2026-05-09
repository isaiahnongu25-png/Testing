const schoolData = {
  courses: [
    {
      id: "course-01",
      title: "Full-Stack Web Development",
      category: "Technology",
      level: "Beginner",
      duration: "12 weeks",
      lessons: 42,
      students: 384,
      instructor: "Amina Okafor",
      summary: "Build websites, APIs, and interactive apps with HTML, CSS, JavaScript, and Node.js.",
      resources: ["Video lessons", "Project files", "Weekly quizzes", "Community support"],
    },
    {
      id: "course-02",
      title: "Data Science & Analytics",
      category: "Business",
      level: "Intermediate",
      duration: "10 weeks",
      lessons: 35,
      students: 286,
      instructor: "Samuel Wiggles",
      summary: "Learn data analysis, visualization, and machine learning using Python and real datasets.",
      resources: ["Hands-on labs", "Jupyter notebooks", "Case studies", "Data library"],
    },
    {
      id: "course-03",
      title: "Digital Marketing Strategy",
      category: "Marketing",
      level: "All Levels",
      duration: "8 weeks",
      lessons: 28,
      students: 192,
      instructor: "Nia Karanja",
      summary: "Master social media, SEO, email campaigns, and online brand growth with a modern curriculum.",
      resources: ["Marketing templates", "Ad guides", "Analytics tools", "Live sessions"],
    },
    {
      id: "course-04",
      title: "Design Thinking & UX",
      category: "Design",
      level: "Beginner",
      duration: "9 weeks",
      lessons: 30,
      students: 144,
      instructor: "Adisa Bello",
      summary: "Create intuitive digital experiences with research-led UX design practices and prototyping.",
      resources: ["Design kits", "UX templates", "User research guides", "Portfolio tasks"],
    },
    {
      id: "course-05",
      title: "Leadership & Career Growth",
      category: "Professional",
      level: "Advanced",
      duration: "6 weeks",
      lessons: 22,
      students: 104,
      instructor: "Olivia Mendes",
      summary: "Develop management skills, career planning, and team leadership for modern workplaces.",
      resources: ["Action plans", "Career tools", "Interview coaching", "Success worksheets"],
    },
    {
      id: "course-06",
      title: "Creative Writing Workshop",
      category: "Arts",
      level: "All Levels",
      duration: "7 weeks",
      lessons: 24,
      students: 89,
      instructor: "Daniel Kim",
      summary: "Turn your ideas into stories, articles, and scripts with interactive writing labs.",
      resources: ["Writing prompts", "Feedback sessions", "Publishing tips", "Community review"],
    }
  ],
  resources: [
    {
      title: "Downloadable course guides",
      description: "Complete notes and lesson checklists for each program.",
      link: "Download guide"
    },
    {
      title: "Video library",
      description: "High-quality recorded lectures and tutorials for every topic.",
      link: "Watch videos"
    },
    {
      title: "Learning community",
      description: "Join discussion groups, live office hours, and study circles.",
      link: "Join community"
    }
  ],
  testimonials: [
    {
      name: "Ama Osei",
      message: "The course structure is clear, and the resources helped me complete my first web project confidently.",
      rating: 5
    },
    {
      name: "Tariq Hassan",
      message: "Enrollment was easy, and I loved having everything available from videos to downloadable notes.",
      rating: 4
    }
  ],
  stats: {
      totalCourses: 34,
      enrolledStudents: "1.2k+",
      resourcesCount: 115,
      instructors: 24
  }
};

function createElement(tag, attrs = {}, content = "") {
  const element = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === "className") {
      element.className = value;
    } else if (key === "html") {
      element.innerHTML = value;
    } else {
      element.setAttribute(key, value);
    }
  });
  if (typeof content === "string") {
    element.textContent = content;
  }
  return element;
}

function renderCourses() {
  const courseList = document.getElementById("courseList");
  const courseSelect = document.getElementById("courseSelect");

  if (!courseList || !courseSelect) return;

  courseList.innerHTML = "";
  courseSelect.innerHTML = "";

  schoolData.courses.forEach((course, index) => {
    const card = createElement("article", { className: "course-card" });
    const badge = createElement("span", { className: "badge" }, course.category);
    const title = createElement("h3", {}, course.title);
    const summary = createElement("p", {}, course.summary);
    const meta = createElement("div", { className: "course-meta" }, "");
    meta.innerHTML = `<span>${course.level}</span><span>${course.duration}</span><span>${course.lessons} lessons</span>`;
    const button = createElement("button", { type: "button", onclick: `selectCourse('${course.id}')` }, "Enroll now");

    const instructor = createElement("p", { className: "badge" }, `Instructor: ${course.instructor}`);
    instructor.style.background = "#f0f4ff";
    instructor.style.color = "#3645d3";

    card.append(badge, title, summary, meta, instructor, button);
    courseList.append(card);

    const option = createElement("option", { value: course.id }, course.title);
    if (index === 0) option.selected = true;
    courseSelect.append(option);
  });

  selectCourse(schoolData.courses[0].id);
}

function renderResources() {
  const resourceList = document.getElementById("resourceList");
  if (!resourceList) return;
  resourceList.innerHTML = "";

  schoolData.resources.forEach((resource) => {
    const card = createElement("div", { className: "resource-card" });
    const title = createElement("h3", {}, resource.title);
    const description = createElement("p", {}, resource.description);
    const footer = createElement("div", { className: "resource-footer" }, "");
    footer.innerHTML = `<span>${resource.link}</span><i class='fa-solid fa-arrow-right'></i>`;
    card.append(title, description, footer);
    resourceList.append(card);
  });
}

function renderTestimonials() {
  const testimonialList = document.getElementById("testimonialList");
  if (!testimonialList) return;
  testimonialList.innerHTML = "";

  schoolData.testimonials.forEach((item) => {
    const card = createElement("article", { className: "testimonial-card" });
    const header = createElement("div", { className: "testimonial-header" });
    const avatar = createElement("div", { className: "testimonial-avatar" }, item.name.charAt(0));
    const name = createElement("div", {}, item.name);
    header.append(avatar, name);
    const message = createElement("p", {}, item.message);
    const stars = createElement("div", { className: "review-stars" });

    for (let i = 0; i < 5; i++) {
      const icon = createElement("i", { className: `fa-solid ${i < item.rating ? "fa-star" : "fa-star-half-stroke"}` });
      stars.append(icon);
    }

    card.append(header, message, stars);
    testimonialList.append(card);
  });
}

function renderStats() {
  const statCards = document.querySelectorAll(".stat-card span");
  if (!statCards.length) return;
  const stats = schoolData.stats;
  statCards[0].textContent = stats.totalCourses;
  statCards[1].textContent = stats.enrolledStudents;
  statCards[2].textContent = stats.resourcesCount;
  statCards[3].textContent = stats.instructors;
}

function getUniqueOptions(field) {
  return ["all", ...new Set(schoolData.courses.map((item) => item[field]))];
}

function populateCourseFilters() {
  const categorySelect = document.getElementById("filterCategory");
  const levelSelect = document.getElementById("filterLevel");
  if (!categorySelect || !levelSelect) return;

  const categories = getUniqueOptions("category");
  const levels = getUniqueOptions("level");

  categorySelect.innerHTML = categories
    .map((value) => `<option value="${value}">${value === "all" ? "All categories" : value}</option>`)
    .join("");
  levelSelect.innerHTML = levels
    .map((value) => `<option value="${value}">${value === "all" ? "All levels" : value}</option>`)
    .join("");
}

function buildCourseCard(course) {
  const card = createElement("article", { className: "course-card" });
  const badge = createElement("span", { className: "badge" }, course.category);
  const title = createElement("h3", {}, course.title);
  const summary = createElement("p", {}, course.summary);
  const meta = createElement("div", { className: "course-meta" }, "");
  meta.innerHTML = `<span>${course.level}</span><span>${course.duration}</span><span>${course.lessons} lessons</span>`;
  const instructor = createElement("p", { className: "badge" }, `Instructor: ${course.instructor}`);
  instructor.style.background = "#f0f4ff";
  instructor.style.color = "#3645d3";
  const button = createElement("button", { type: "button", onclick: `selectCourse('${course.id}')` }, "View details");
  card.append(badge, title, summary, meta, instructor, button);
  return card;
}

function renderCoursesPage() {
  const courseList = document.getElementById("coursesPageList");
  if (!courseList) return;

  const search = document.getElementById("filterSearch")?.value.toLowerCase() || "";
  const selectedCategory = document.getElementById("filterCategory")?.value || "all";
  const selectedLevel = document.getElementById("filterLevel")?.value || "all";

  const filtered = schoolData.courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(search) || course.summary.toLowerCase().includes(search);
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  courseList.innerHTML = "";
  if (!filtered.length) {
    courseList.innerHTML = `<div class="empty-state">No courses match your filter. Try another category or search term.</div>`;
    return;
  }
  filtered.forEach((course) => courseList.append(buildCourseCard(course)));
}

function renderResourceLibrary() {
  const resourceLibrary = document.getElementById("resourceLibrary");
  if (!resourceLibrary) return;
  resourceLibrary.innerHTML = "";

  schoolData.resources.forEach((resource) => {
    const card = createElement("div", { className: "resource-card" });
    const title = createElement("h3", {}, resource.title);
    const description = createElement("p", {}, resource.description);
    const footer = createElement("div", { className: "resource-footer" }, "");
    footer.innerHTML = `<span>${resource.link}</span><i class='fa-solid fa-arrow-right'></i>`;
    card.append(title, description, footer);
    resourceLibrary.append(card);
  });
}

function selectCourse(courseId) {
  const course = schoolData.courses.find((item) => item.id === courseId);
  const selectedCourseName = document.getElementById("selectedCourseName");
  const courseSelect = document.getElementById("courseSelect");

  if (!course || !selectedCourseName || !courseSelect) return;

  selectedCourseName.textContent = `${course.title} — ${course.summary}`;
  courseSelect.value = courseId;
}

function handleEnrollment(event) {
  event.preventDefault();
  const name = document.getElementById("studentName").value.trim();
  const email = document.getElementById("studentEmail").value.trim();
  const courseId = document.getElementById("courseSelect").value;
  const goal = document.getElementById("studentGoal").value.trim();

  const success = document.getElementById("formSuccess");
  if (!name || !email || !courseId) {
    success.textContent = "Please complete all required fields.";
    success.style.color = "#d63a3a";
    return;
  }

  const course = schoolData.courses.find((item) => item.id === courseId);
  success.textContent = `You are now registered for ${course.title}. Check ${email} for details.`;
  success.style.color = "#206a49";
  event.target.reset();
  selectCourse(courseId);
}

function initializeHomePage() {
  renderCourses();
  renderResources();
  renderTestimonials();
  renderStats();

  const enrollForm = document.getElementById("enrollForm");
  if (enrollForm) {
    enrollForm.addEventListener("submit", handleEnrollment);
  }
}

function renderAdminSummary() {
  const metrics = {
    courses: schoolData.courses.length,
    students: 1280,
    resources: schoolData.resources.length * 5,
    instructors: 24,
  };

  document.getElementById("metricCourses").textContent = metrics.courses;
  document.getElementById("metricStudents").textContent = `${metrics.students}+`;
  document.getElementById("metricResources").textContent = metrics.resources;
  document.getElementById("metricInstructors").textContent = metrics.instructors;
}

function renderAdminCourses() {
  const tableBody = document.getElementById("courseTableBody");
  if (!tableBody) return;
  tableBody.innerHTML = "";

  schoolData.courses.forEach((course) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${course.title}</td>
      <td>${course.category}</td>
      <td>${course.level}</td>
      <td>${course.instructor}</td>
      <td><span class="toggle-badge">Published</span></td>
      <td><button type="button" onclick="togglePublished('${course.id}')">Toggle</button></td>
    `;
    tableBody.append(row);
  });
}

function togglePublished(courseId) {
  const button = document.querySelector(`button[onclick="togglePublished('${courseId}')"]`);
  if (!button) return;
  const badge = button.closest("tr").querySelector(".toggle-badge");
  const isPublished = badge.textContent.includes("Published");
  badge.textContent = isPublished ? "Draft" : "Published";
  badge.style.background = isPublished ? "rgba(244, 231, 255, 0.8)" : "rgba(221, 255, 221, 0.8)";
  badge.style.color = isPublished ? "#7c3aed" : "#157a2e";
}

function handleAddCourse(event) {
  event.preventDefault();
  const title = document.getElementById("newCourseTitle").value.trim();
  const category = document.getElementById("newCourseCategory").value.trim();
  const level = document.getElementById("newCourseLevel").value;
  const duration = document.getElementById("newCourseDuration").value.trim();
  const instructor = document.getElementById("newCourseInstructor").value.trim();

  if (!title || !category || !duration || !instructor) return;

  schoolData.courses.push({
    id: `course-${Date.now()}`,
    title,
    category,
    level,
    duration,
    lessons: 18,
    students: 0,
    instructor,
    summary: "New course added by the admin dashboard.",
    resources: ["Intro guide", "Course workbook", "Video lessons"],
  });

  renderCourses();
  renderAdminCourses();
  document.getElementById("addCourseForm").reset();
}

function initializeAdminPage() {
  renderAdminSummary();
  renderAdminCourses();
  const addCourseForm = document.getElementById("addCourseForm");
  if (addCourseForm) addCourseForm.addEventListener("submit", handleAddCourse);
}

function initializeMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.querySelector(".main-nav");
  if (!menuToggle || !mainNav) return;

  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
  });
}

window.addEventListener("DOMContentLoaded", () => {
  initializeMenu();
  if (document.getElementById("courseList")) {
    initializeHomePage();
  }
  if (document.getElementById("coursesPageList")) {
    populateCourseFilters();
    renderCoursesPage();
    document.getElementById("filterCategory")?.addEventListener("change", renderCoursesPage);
    document.getElementById("filterLevel")?.addEventListener("change", renderCoursesPage);
    document.getElementById("filterSearch")?.addEventListener("input", renderCoursesPage);
  }
  if (document.getElementById("resourceLibrary")) {
    renderResourceLibrary();
  }
  if (document.getElementById("adminDashboard")) {
    initializeAdminPage();
  }
});

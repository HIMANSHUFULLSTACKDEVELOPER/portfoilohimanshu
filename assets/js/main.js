

const status = document.getElementById('status');
const fill = document.getElementById('progress-bar-fill');
const loader = document.getElementById('loader');
const main = document.getElementById('main-content');

let progress = 0;
const interval = setInterval(() => {
  if (progress >= 100) {
    clearInterval(interval);
    loader.classList.add('hidden');
    main.style.display = 'block';
    document.body.style.overflow = 'auto';
  } else {
    progress++;
    status.textContent = `Loading... ${progress}%`;
    fill.style.width = `${progress}%`;
  }
}, 30);











(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });


  // project

  // Enhanced project data with all your projects
  const projects = {
    all: [
      // HTML Projects
      {
        title: "Sant Kabir",
        description: "Sant Kabir Das His writings influenced Hinduism's Bhakti movement",
        tags: ["HTML", "Structure", "Biography"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdf7mRd4RUAaBJWDHhX-nN6-h50qyiNB_KFQ&s",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "./projects/kabir saheb.html" }
        ]
      },
      {
        title: "Dr. APJ",
        description: "Distinguished Indian scientist and the 11th President of India, serving from 2002 to 2007.",
        tags: ["HTML", "Semantic", "Biography"],
        image: "https://cdn.britannica.com/56/148856-004-2F59E2D9/APJ-2008.jpg",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "./projects/ajabualkalam.html" }
        ]
      },
      {
        title: "KGF",
        description: "The KGF film series is an Indian Kannada-language period action franchise centered around the Kolar Gold Fields in Karnataka.",
        tags: ["HTML", "Content", "Movies"],
        image: "https://m.media-amazon.com/images/M/MV5BM2M0YmIxNzItOWI4My00MmQzLWE0NGYtZTM3NjllNjIwZjc5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "./projects/kgfmovies.html" }
        ]
      },
      {
        title: "HTMLCSS",
        description: "To create a single horizontal line in HTML, you can use the tag, which represents a thematic break between paragraph-level elements.",
        tags: ["HTML", "CSS", "Tutorial"],
        image: "https://cloud2data.com/wp-content/uploads/2023/01/HTML-CSS-Review.png",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "./projects/cssinf.htm" }
        ]
      },
      {
        title: "Form",
        description: "A form is a structured document designed to collect specific information from individuals in a logical and organized manner.",
        tags: ["HTML", "CSS", "Forms"],
        image: "https://cdn.marketing123.123formbuilder.com/wp-content/uploads/2022/08/school-admission-form.jpg",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "./projects/form.html" }
        ]
      },
      // JavaScript Projects
      {
        title: "Calculator",
        description: "A calculator is a device designed to perform arithmetic operations on numbers. Basic calculators can execute simple operations.",
        tags: ["JavaScript", "Functions", "Math"],
        image: "https://media.istockphoto.com/id/1470926869/vector/calculator-icon-vector-on-white-background-savings-finances-sign-economy-calculate-for-ui-ux.jpg?s=612x612&w=0&k=20&c=eKuFOmQyAxxKfAMeD-h2gSJEh_ctNdWuNPPn2-E1Gno=",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "./projects/calulator.html" }
        ]
      },
      {
        title: "Even/Odd",
        description: "Even numbers are divisible by 2. Odd numbers are not divisible by 2.",
        tags: ["JavaScript", "Logic", "Numbers"],
        image: "https://i.ytimg.com/vi/3iQqmmG8wQQ/maxresdefault.jpg",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "./projects/evenorodd.html" }
        ]
      },
      {
        title: "Vowel",
        description: "They are spoken without blocking air from the lungs. Every English word has at least one vowel",
        tags: ["JavaScript", "String", "Logic"],
        image: "https://i.pinimg.com/474x/3c/27/fc/3c27fc6ab3c07c0ffa7ae79b606c54ea.jpg",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "./projects/vowel.html" }
        ]
      },
      {
        title: "KBC",
        description: "Computer ji, sawaal lock kiya jaye!",
        tags: ["JavaScript", "Quiz", "Game"],
        image: "https://images.odishatv.in/uploadimage/library/16_9/16_9_0/IMAGE_1638171703.jpg",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "./projects/kbcnew.html" }
        ]
      },
      {
        title: "Ticket Booking",
        description: "I can make a fun bus booking simulation with: Seat selection grid Live fare calculation",
        tags: ["JavaScript", "Booking", "Simulation"],
        image: "https://5.imimg.com/data5/YB/NO/GLADMIN-14745370/ticket-booking-500x500.jpg",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "./projects/ticket.html" }
        ]
      },
      {
        title: "Weeks",
        description: "There are 7 days in a week. A weekend is usually Saturday and Sunday (holiday/fun time 🎉). A weekday is from Monday to Friday (work/school days 📚💼).",
        tags: ["JavaScript", "Calendar", "Logic"],
        image: "https://cdn.shopify.com/s/files/1/2081/8163/files/Days-of-the-Weeks-Poster-for-Kids.jpg?v=1639569087",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "./projects/weeks.html" }
        ]
      },
      {
        title: "Electric Bill",
        description: "Got it! Let's talk about the Electricity Bill — what it is, how it works, and maybe even simulate or create one.",
        tags: ["JavaScript", "Calculator", "Bill"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRH3KQULdvbHcfe3zydCFJxnvO-ZmW5mUaG3QKVIBqh6JkboJj5_vSrfhHczRThCGbYKE&usqp=CAU",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "./projects/electricbill.html" }
        ]
      },
      {
        title: "Box Game",
        description: "There are lots of ways we can do a Box Game — from guessing games to interactive ones. Here's a simple version to start with",
        tags: ["JavaScript", "Game", "DOM"],
        image: "https://images.theconversation.com/files/527116/original/file-20230518-29-egvjik.jpg?ixlib=rb-4.1.0&rect=0%2C20%2C4500%2C2970&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "./projects/dom.html" }
        ]
      },
      {
        title: "Input Table",
        description: "An input table is used to enter and organize data in a structured format for easy understanding and processing.",
        tags: ["JavaScript", "Table", "Input"],
        image: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types/email_address_invalid.png",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "./projects/inputtable.html" }
        ]
      },
      {
        title: "Add Numbers",
        description: "Addition means putting things together. When we add numbers, the total gets bigger",
        tags: ["JavaScript", "Math", "Calculator"],
        image: "https://www.onlinemathlearning.com/image-files/add-decimals.png",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "./projects/addorsubnumber.html" }
        ]
      }, {
        title: "Light",
        description: "On Off Light ",
        tags: ["JavaScript", "Math", "Calculator"],
        image: "https://www.onlinemathlearning.com/image-files/add-decimals.png",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "./projects/light.html" }
        ]
      },
      {
        title: "Age Calculator",
        description: "Age is the number of years a person has lived since birth",
        tags: ["JavaScript", "Calculator", "Date"],
        image: "https://static.vecteezy.com/system/resources/thumbnails/021/615/426/small_2x/age-3d-render-icon-illustration-png.png",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "./projects/ages.html" }
        ]
      },
      {
        title: "Equal/Not Equal",
        description: "Awesome! Let's learn about Equal (=) and Not Equal (≠) — super useful in math and everyday life!",
        tags: ["JavaScript", "Comparison", "Logic"],
        image: "https://i.ytimg.com/vi/zDM7IslxODs/maxresdefault.jpg",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "./projects/inputvaleequal.html" }
        ]
      },{
        title: "Age Calculator and To Do List",
        description: "A freedom fighter is an individual who participates in a resistance movement against an oppressive political or social establishment.",
        tags: ["CSS", "Design", "History"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2et78vllAoReFPPAZjjigUIXGIuo9A3ZZw&s",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "https://himanshufullstackdeveloper.github.io/task1/" }
        ]
      },
      {
        title: "Match Game",
        description: "Match means to connect two related things — like a question to its correct answer, or a word to its meaning",
        tags: ["JavaScript", "Game", "Matching"],
        image: "https://www.india.com/wp-content/uploads/2021/10/IND-vs-AUS-Live-Score-Today-T20-World-Cup-2021-Live-Match-India-vs-Australia-Live-Streaming-Cricket-Hotstar-JIOTV-TV-Star-Sports%C2%A9BCCI-1.jpg",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "./projects/match.html" }
        ]
      },
      // CSS Projects
      {
        title: "Indian Flag",
        description: "The National Flag of India, commonly known as the 'Tiranga' (meaning 'Tricolour'), is a horizontal tricolour featuring three equal bands.",
        tags: ["CSS", "Design", "Animation"],
        image: "https://5.imimg.com/data5/SELLER/Default/2023/6/320145536/UJ/BL/QH/810622/indian-national-flag.webp",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "./projects/flag.html" }
        ]
      },
      {
        title: "Freedom Fighter",
        description: "A freedom fighter is an individual who participates in a resistance movement against an oppressive political or social establishment.",
        tags: ["CSS", "Design", "History"],
        image: "https://redshine.co.in/wp-content/uploads/2024/05/9789189764248_thumbnail-scaled-1.jpg",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "./projects/freedomfighter.html" }
        ]
      },{
        title: "Age Calculator and To Do List",
        description: "A freedom fighter is an individual who participates in a resistance movement against an oppressive political or social establishment.",
        tags: ["CSS", "Design", "History"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2et78vllAoReFPPAZjjigUIXGIuo9A3ZZw&s",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "./projects/freedomfighter.html" }
        ]
      },
      
      // Live Projects
     
    {
        title: "July Calendar",
        description: "commonly referred to as a schedule in American English, is a structured plan that outlines specific times at which events, tasks, or activities are intended to occur.",
        tags: ["CSS", "Table", "Calendar"],
        image: "https://rukminim3.flixcart.com/image/850/1000/xif0q/calendar/y/w/8/desk-table-calendar-1-2024-table-pixel-original-imah2wfgfrmfhu6t.jpeg?q=90&crop=false",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "View Project", url: "./projects/calenders.html" }
        ]
      },
     
    ],
    html: [],
    css: [],
    javascript: [],
    testing: [
      {
        title: "Smart Board Testing",
        description: "Nice! You're working on or preparing for Smart Board Testing — let's get you set up for it!",
        tags: ["Testing", "Hardware", "UI/UX"],
        image: "https://igsglobal.com/wp-content/uploads/2023/12/UI-and-UX-Testing-blog-banner-01.jpg",
        links: [{ text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

        { text: "view project", url: "projects/uiux.html" }
        ]
      },
      {
        title: "Fan Testing",
        description: "Great! Here's a simple and clear guide with lines for Fan Testing — whether it's for classroom activities, science lab work, or technical inspection.",
        tags: ["Testing", "Hardware", "Quality"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR74sEZtmUv8gkXYeftcMIxDy0HZQRb9uRaqQ&s",
        links: [
          { text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

          { text: "view project", url: "projects/uiux1.html" }
        ]
      },
      {
        title: "Portfolio Testing",
        description: "Perfect! You're looking for Portfolio Testing Lines — here are some clear, simple, and professional ones you can use for explaining, checking, or writing about portfolio testing",
        tags: ["Testing", "Portfolio", "QA"],
        image: "https://cdn.prod.website-files.com/63654bd86ca1f62de498214b/65296ea1aae72cb48335e0f9_1.jpg",
        links: [
          { text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },

          { text: "view project", url: "https://docs.google.com/spreadsheets/d/1rElhbhllmYyHYkW90J8wi7XuIvOVTHykrZ0OABr4GoE/edit?gid=0#gid=0" }
        ]
      }
    ],
    live: [],
    nodejs: [
      {
        title: "comeing node js",
        description: " node js Scalable REST API with authentication, rate limiting, and documentation",
        tags: ["Node.js", "Express", "MongoDB"],
        image: "https://static.vecteezy.com/system/resources/thumbnails/003/582/701/small_2x/coming-soon-background-illustration-template-design-free-vector.jpg",
        links: [
          { text: "View Code", url: "projects/comeingsoon.html" },
          { text: "view project", url: "projects/comeingsoon.html" }
        ]
      }
    ],
    dbms: [
      {
        title: " Anvay Kidz World Designer",
        description: "Anvay Kidz World shop web site Designe in figma",
        tags: ["Figma"],
        image: "https://media.istockphoto.com/id/1499053648/photo/childrens-toy-rack-at-the-store.jpg?s=612x612&w=0&k=20&c=6ydMEA4GQOllbTUauseCi8RlftvFL9S-iWpzrUQh1LA=",
        links: [
          { text: "View Design", url: "https://www.figma.com/design/UXaFBgOnM6CRDQFGlJgJ9q/Untitled?node-id=0-1&t=4ffduiZHOqRPhlyr-1" }
         
        ]
      }
    ],
    reactjs: [
      {
        title: "  comeing  ",
        description: "Reusable React component library with Storybook documentation",
        tags: ["React", "Storybook", "Components"],
        image: "https://static.vecteezy.com/system/resources/thumbnails/003/582/701/small_2x/coming-soon-background-illustration-template-design-free-vector.jpg",
        links: [
          { text: "View Code", url: "projects/comeingsoon.html" },
          { text: "view project", url: "projects/comeingsoon.html" }
        ]
      }
    ],
    assignment: [
      {
        title: "weeks",
        description: "Interactive visualization of sorting and searching algorithms for educational purposes",
        tags: ["JavaScript", "HTML", "CSS"],
        image: "https://i.ytimg.com/vi/F11LZ0Wu104/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCdHAD_--H3sAFM1o5wBONwPAwrQw",
        links: [
          { text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },
          { text: "view project", url: "projects/weeks.html" }
        ]
      }, {
        title: "colors change ",
        description: "Interactive visualization of sorting and searching algorithms for educational purposes",
        tags: ["JavaScript", "HTML", "CSS"],
        image: "https://www.shutterstock.com/shutterstock/videos/140206/thumb/1.jpg",
        links: [
          { text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },
          { text: "view project", url: "projects/color.html" }
        ]
      },
      {
        title: "Students Name",
        description: "Interactive visualization of sorting and searching algorithms for educational purposes",
        tags: ["JavaScript", "HTML", "CSS"],
        image: "https://www.shutterstock.com/shutterstock/videos/30319135/thumb/11.jpg?ip=x480",
        links: [
          { text: "View Code", url: "https://github.com/HIMANSHUFULLSTACKDEVELOPER/portfoilohimanshu/blob/main/projects/ages.css" },
          { text: "view project", url: "projects/name.html" }
        ]
      }
      
    ],
    languages: [
      {
        title: "comeing  languages",
        description: "Tool for translating code snippets between different programming languages",
        tags: ["Python", "JavaScript", "Java"],
        image: "https://static.vecteezy.com/system/resources/thumbnails/003/582/701/small_2x/coming-soon-background-illustration-template-design-free-vector.jpg",
        links: [
          { text: "View Code", url: "projects/comeingsoon.html" },
          { text: "view project", url: "projects/comeingsoon.html" }
        ]
      }
    ]
  };

  // Populate category arrays from main projects
  function categorizeProjects() {
    projects.all.forEach(project => {
      project.tags.forEach(tag => {
        const category = tag.toLowerCase().replace(/\s+/g, '');
        if (projects[category] && !projects[category].some(p => p.title === project.title)) {
          projects[category].push(project);
        }
      });
    });

    // Populate live projects
    projects.live = projects.all.filter(project =>
      project.links.some(link => link.url.includes('github.io') || link.text.includes('Live'))
    );
  }

  // Initialize categories
  categorizeProjects();

  // Create animated stars background
  function createStars() {
    const starscontai = document.getElementById('stars');
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 3 + 's';
      starscontai.appendChild(star);
    }
  }

  // Render projects
  function renderProjects(projectList) {
    const grid = document.getElementById('projectsGrid');

    if (projectList.length === 0) {
      grid.innerHTML = '<div class="no-projects">No projects found matching your criteria.</div>';
      return;
    }

    grid.innerHTML = projectList.map((project, index) => `
                <div class="project-card" style="animation-delay: ${index * 0.1}s">
                    <div class="project-image" style="background-image: url('${project.image}')">
                     
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            ${project.links.map(link => `
                                <a href="${link.url}" class="project-link" target="_blank">${link.text}</a>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
  }

  // Filter functionality
  function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        const projectsToShow = projects[filter] || [];
        renderProjects(projectsToShow);
      });
    });
  }

  // Search functionality
  function setupSearch() {
    const searchBox = document.getElementById('searchBox');

    searchBox.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
      let projectsToFilter = projects[activeFilter] || [];

      if (searchTerm === '') {
        renderProjects(projectsToFilter);
        return;
      }

      const filteredProjects = projectsToFilter.filter(project =>
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );

      renderProjects(filteredProjects);
    });
  }

  // Smooth scroll animation observer
  function setupScrollAnimations() {
    const cards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
  }

  // Add floating animation to cards
  function addFloatingEffect() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.03)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
      });
    });
  }

  // Dynamic particle effects
  function createParticleEffect(x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = '#00f5ff';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    particle.style.animation = 'particle-float 1s ease-out forwards';

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1000);
  }

  // Add particle CSS animation
  const particleStyle = document.createElement('style');
  particleStyle.textContent = `
            @keyframes particle-float {
                0% {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
                100% {
                    opacity: 0;
                    transform: translateY(-100px) scale(0);
                }
            }
        `;
  document.head.appendChild(particleStyle);

  // Add click effects
  function setupClickEffects() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contais('filter-btn') || e.target.classList.contais('project-link')) {
        createParticleEffect(e.clientX, e.clientY);
      }
    });
  }

  // Initialize everything
  function init() {
    createStars();
    renderProjects(projects.all);
    setupFilters();
    setupSearch();
    setupClickEffects();

    // Add floating effect after a small delay to ensure cards are rendered
    setTimeout(() => {
      addFloatingEffect();
      setupScrollAnimations();
    }, 500);
  }

  // Start the application when DOM is loaded
  document.addEventListener('DOMContentLoaded', init);

  // Add responsive navigation for mobile
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
      const filterButtons = document.querySelector('.filter-buttons');
      filterButtons.style.overflowX = 'auto';
      filterButtons.style.justifyContent = 'flex-start';
      filterButtons.style.paddingBottom = '10px';
    }
  });

  // Add keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('searchBox').blur();
    }

    if (e.key === '/' && !e.target.matches('input')) {
      e.preventDefault();
      document.getElementById('searchBox').focus();
    }
  });

  // Add loading state
  function showLoading() {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 50px;">
                    <div style="display: inline-block; width: 50px; height: 50px; border: 3px solid #00d4aa; border-radius: 50%; border-top-color: transparent; animation: spin 1s ease-in-out infinite;"></div>
                    <p style="margin-top: 20px; color: #b0b3b8;">Loading projects...</p>
                </div>
            `;
  }

  // Add spin animation for loading
  const loadingStyle = document.createElement('style');
  loadingStyle.textContent = `
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
        `;
  document.head.appendChild(loadingStyle);

  // Performance optimization: Lazy load images
  function lazyLoadImages() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.style.backgroundImage = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('.project-image.lazy').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Add theme toggle functionality (bonus feature)
  function createThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '🌙';
    themeToggle.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: rgba(255, 255, 255, 0.1);
                border: 2px solid #00d4aa;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                color: white;
                font-size: 20px;
                cursor: pointer;
                backdrop-filter: blur(10px);
                z-index: 1000;
                transition: all 0.3s ease;
            `;

    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      themeToggle.innerHTML = document.body.classList.contais('light-theme') ? '☀️' : '🌙';
    });

    document.body.appendChild(themeToggle);
  }









  // 
  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
      filters.addEventListener('click', function () {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();


// skills// JS to pause scrolling when hovered
const scrollingText = document.getElementById('scrollingText');

scrollingText.addEventListener('mouseover', () => {
  scrollingText.style.animationPlayState = 'paused';
});

scrollingText.addEventListener('mouseout', () => {
  scrollingText.style.animationPlayState = 'running';
});
// skills

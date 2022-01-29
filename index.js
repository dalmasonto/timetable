const sidebar = document.getElementById('sidebar');
const container = document.getElementById('container');
const sidebarToggle = document.getElementById('sidebar-toggle');
const date = document.getElementById('date');
const start = document.getElementById('start');
const end = document.getElementById('end');
const activity = document.getElementById('activity');

const theme_mode = document.getElementById('theme-mode');
const mode_switcher = document.getElementById('mode-switcher');

const form = document.getElementById('_form_');
const timetable = document.querySelector('.table table tbody');

const all_links = document.querySelectorAll('.link a');

const toggleFullSidebar = () => {
  // sidebar.classList.toggle('full');
  sidebarToggle.classList.toggle('fa-chevron-right');
  container.classList.toggle('mono-sidebar');
}

// sidebarToggle.addEventListener('click', toggleFullSidebar);

// A function to change the theme mode href
const changeThemeMode = () => {
  if (theme_mode.href.includes('light')) {
    theme_mode.href = 'dark.css';
    // mode_switcher.classList.add('fa-sun');
  } else {
    theme_mode.href = 'light.css';
    // mode_switcher.classList.remove('fa-sun');
  }
  chooseCorrectThemeModeIcon();
}

const chooseCorrectThemeModeIcon = () => {
  if (theme_mode.href.includes('light')) {
    // theme_mode.href = 'dark.css';
    mode_switcher.classList.add('fa-moon');
    mode_switcher.classList.remove('fa-sun');
  } else {
    // theme_mode.href = 'light.css';
    mode_switcher.classList.add('fa-sun');
    mode_switcher.classList.remove('fa-moon');
  }
}


function openCloseSidebar() {
  sidebar.classList.toggle('sidebar-active');
}


const timetable_data = [
  {
    date: '2022-01-27',
    start: '14:40',
    end: '18:40',
    activity: 'HTML'
  },
  {
    date: '2022-01-27',
    start: '14:40',
    end: '18:40',
    activity: 'JS'
  },
  {
    date: '2022-01-27',
    start: '14:40',
    end: '18:40',
    activity: 'Python'
  },
  {
    date: '2022-01-27',
    start: '14:40',
    end: '18:40',
    activity: 'Django'
  }
];
// var/let;

const tableRow = (data) => {

  const row = `<tr>
                    <td>${data.date}</td>
                    <td>${data.start} - ${data.end}</td>
                    <td>${data.activity}</td>
                  </tr>`;

  return row;
}

const writeData = (data) => {
  const row = tableRow(data);
  timetable.innerHTML += row;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    date: date.value,
    start: start.value,
    end: end.value,
    activity: activity.value
  }
  writeData(data);
});

timetable_data.forEach(data => {
  writeData(data);
});


const setActiveLink = () => {
  const path = window.location.hash.substr(1);
  removeActiveLink();
  scrollTo(path);
  all_links.forEach(link => {
    const href = link.getAttribute('href');
    if (href.substring(1, href.length) === path) {
      link.parentElement.classList.add('active');
    }
  });
}

// a function to scroll to given id element passed in
const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}


const removeActiveLink = () => {
  all_links.forEach(link => {
    link.parentElement.classList.remove('active');
  });
}

window.addEventListener('hashchange', e => {
  setActiveLink();
});

// Add load event listener and scroll to the current hash
window.addEventListener('load', () => {
  setActiveLink();
  chooseCorrectThemeModeIcon();
}
);



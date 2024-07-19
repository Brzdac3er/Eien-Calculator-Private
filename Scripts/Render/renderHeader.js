function renderHeader() {
  const header = document.querySelector(".js-header");

  header.innerHTML += `
    <div class="header-left">
      <div class="profile">
        <a href="https://github.com/Brzdac3er" class="profile-link">
          <img src="../../Images/Header-Profile/header-profile.png" alt="profile picture" 
            class="profile-picture" />
        </a> 
      </div>
    </div>

    <div class="header-middle">
      <div class="creator">
        <p class="creator-name">Created by: Eien</p>
      </div>
    </div>

    <div class="header-right">
      <div class="other-projects">
        <a href="https://brzdac3er.github.io/Other-Projects-Webiste/index.html" 
          class="other-project-link">
          Other Projects
        </a>
      </div>
    </div>
  `;
}

export default renderHeader;

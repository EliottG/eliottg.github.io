handleClickSkill = (id) => {
  let skill = document.getElementById(id);
  if (skill.classList.contains("skill-on")) {
    return skill.classList.remove("skill-on");
  }

  skill.classList.add("skill-on");
};

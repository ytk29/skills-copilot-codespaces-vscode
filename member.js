function skillsMember() {
  var member = document.getElementById('member').value;
  var memberSkills = document.getElementById('memberSkills');
  memberSkills.innerHTML = '';
  var skills = [];
  for (var i = 0; i < team.length; i++) {
    if (team[i].name === member) {
      skills = team[i].skills;
      break;
    }
  }
  for (var i = 0; i < skills.length; i++) {
    var skill = document.createElement('li');
    skill.textContent = skills[i];
    memberSkills.appendChild(skill);
  }
}
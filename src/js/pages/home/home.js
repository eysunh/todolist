import logo from "~/src/js/components/icons/logo";
import tagline from "~/src/js/components/header/tagline";
import link from "~/src/js/components/ui/link"
import makeElement from "~/src/js/utils/makeElement";

const home = function(){
  
  const homeHeader = document.createElement('header');

  homeHeader.innerHTML = '';

  function render(){
    homeHeader.classList.add('home-header');

    const pageLogo = makeElement(logo());
    const pageTagline = makeElement(tagline('Manage Your Tasks with To Do List!'))
    const appLink = link('To Do App', '/app')
    
    homeHeader.append(pageLogo);
    homeHeader.append(pageTagline);
    homeHeader.append(appLink);
  }
  
  render();
  return homeHeader;
}

export default home;
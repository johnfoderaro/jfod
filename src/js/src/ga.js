// send a ga event for target _blank links and treat as 'outbound'
const links = Array.from(document.getElementsByTagName('a'));
links.forEach((link) => {
  link.onclick = (event) => {
    const name = link.innerText;
    const external = link.target === '_blank';
    if (external) {
      ga('send', 'event', 'link', {
        eventCategory: 'Outbound Link',
        eventAction: 'click',
        eventLabel: event.target.href
      });
    }
  }
});

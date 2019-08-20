function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

const socialIcon = document.getElementById("socialIcon");
const socialLink = document.getElementById("socialLink");
function openLinks() {
	if (socialLink.style.display === "none") {
    			socialLink.style.display = "block";
    			socialIcon.style.display = "none";

  			} else {
    			socialIcon.style.display = "none";
    			socialLink.style.display = "block";
  			}
		}
function closeLinks() {
	if (socialLink.style.display === "block") {
    			socialLink.style.display = "none";
    			socialIcon.style.display = "block";

  			} else {
    			socialIcon.style.display = "block";
    			socialLink.style.display = "none";
  			}
		}

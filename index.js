<script type="text/javascript">
var form = document.getElementById('contactus');

if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}

function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    var _feedback = document.getElementById('feedback');
		_feedback.innerHTML = "Thank You - your query has been submitted."
    // You must return false to prevent the default form behavior
    return false;
}

</script>
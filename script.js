function submitForm() {
    var name = document.getElementById('name').value;

    // Send the name to the server using AJAX
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Update the greeting on the webpage
            document.getElementById('greeting').innerHTML = xhr.responseText;
        }
    };
    xhr.open('POST', 'greet.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send('name=' + name);
}

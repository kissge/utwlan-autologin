// Saves options to chrome.storage
function save_options(evt) {
    var userid = document.getElementById('user').value;
    var password = document.getElementById('pass').value;
    chrome.storage.sync.set({
        userid: userid,
        password: password
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = '保存しました';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });

    evt.preventDefault();
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        userid: '',
        password: ''
    }, function(items) {
        document.getElementById('user').value = items.userid;
        document.getElementById('pass').value = items.password;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementsByTagName('form')[0].addEventListener('submit', save_options);

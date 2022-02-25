document.getElementById('add-border').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    container.style.border = '4px solid yellow';
});
function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightBlue';
    }
}
document.getElementById('add-friend').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
        <h3 class="friend-name">new friend</h3>
        <p>Deserunt sapiente quasi totam dolor.</p>
    `;
    container.appendChild(friendDiv);
})

// Close Sidebar toggle
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Close Sidebar When Clicking Outside
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const sidebarButton = document.querySelector('input[value="Sidebar"]');
    if (sidebar.classList.contains('open') && 
        !sidebar.contains(event.target) && 
        event.target !== sidebarButton) {
        sidebar.classList.remove('open');
    }
});
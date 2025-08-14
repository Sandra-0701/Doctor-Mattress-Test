// Toggle sidebar on mobile
document.getElementById('sidebarToggle').addEventListener('click', function() {
    const sidebar = document.querySelector('[src="sidebar.html"]').parentElement;
    sidebar.classList.toggle('hidden');
});

// Highlight active menu item
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuItems = document.querySelectorAll('nav a');
    
    menuItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        if (currentPage === itemHref) {
            item.classList.remove('text-gray-600', 'hover:bg-gray-100');
            item.classList.add('text-white', 'bg-primary');
        }
    });
});

// Product Modal Handling
        document.addEventListener('DOMContentLoaded', function() {
            // Modal elements
            const addModal = document.getElementById('addProductModal');
            const openModalBtn = document.getElementById('openAddModal');
            const closeModalBtn = document.getElementById('closeAddModal');
            const cancelModalBtn = document.getElementById('cancelAddModal');
            const saveProductBtn = document.getElementById('saveProduct');
            
            // Delete modal elements
            const deleteModal = document.getElementById('deleteModal');
            const deleteButtons = document.querySelectorAll('.delete-product');
            const confirmDeleteBtn = document.getElementById('confirmDelete');
            const cancelDeleteBtn = document.getElementById('cancelDelete');
            
            // Edit buttons
            const editButtons = document.querySelectorAll('.edit-product');
            
            // Open add modal
            openModalBtn.addEventListener('click', function() {
                addModal.classList.remove('hidden');
            });
            
            // Close add modal
            function closeAddModal() {
                addModal.classList.add('hidden');
            }
            
            closeModalBtn.addEventListener('click', closeAddModal);
            cancelModalBtn.addEventListener('click', closeAddModal);
            
            // Save product
            saveProductBtn.addEventListener('click', function() {
                alert('Product saved successfully!');
                closeAddModal();
                document.getElementById('productForm').reset();
            });
            
            // Open delete modal
            deleteButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const productId = this.getAttribute('data-id');
                    deleteModal.classList.remove('hidden');
                    confirmDeleteBtn.setAttribute('data-id', productId);
                });
            });
            
            // Confirm delete
            confirmDeleteBtn.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                alert(`Product ${productId} deleted successfully!`);
                deleteModal.classList.add('hidden');
            });
            
            // Cancel delete
            cancelDeleteBtn.addEventListener('click', function() {
                deleteModal.classList.add('hidden');
            });
            
            // Edit product
            editButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const productId = this.getAttribute('data-id');
                    alert(`Editing product ${productId}`);
                    addModal.classList.remove('hidden');
                    
                });
            });
        });
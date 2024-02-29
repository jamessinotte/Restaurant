export function initializeHome() {
    const contentDiv = document.getElementById('content');
    const homepage = document.createElement('div');
    homepage.innerHTML = `<h1>Welcome to Our Restaurant</h1>
    <img src="restaurant_image.jpg" alt="Restaurant Image">
    <p>Experience the finest dining experience in town at our restaurant. Our chefs prepare delicious dishes with the freshest ingredients, ensuring a memorable culinary journey for our guests.</p>`;
    contentDiv.appendChild(homepage);


}
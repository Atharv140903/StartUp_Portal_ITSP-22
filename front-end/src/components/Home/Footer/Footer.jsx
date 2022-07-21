import React from "react";
import "./Footer.css"

export default function Footer() {
  return (
    <div class="container">
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Home</a></li>
        <li class="nav-item"><a href="/Profile" class="nav-link px-2 text-muted">Profile</a></li>
        <li class="nav-item"><a href="/Blog" class="nav-link px-2 text-muted">Blog</a></li>
        <li class="nav-item"><a href="/FAQs" class="nav-link px-2 text-muted">FAQs</a></li>
        <li class="nav-item"><a href="/Aboutus" class="nav-link px-2 text-muted">About Us</a></li>
      </ul>
      <p class="text-center text-muted">© 2022 Company, Inc</p>
    </footer>
  </div>
    
  );
}

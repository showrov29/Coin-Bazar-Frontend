const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-12">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="mb-2">Company Overview</p>
          <p className="mb-2">Our Team</p>
          <p>Testimonials</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Services</h2>
          <p className="mb-2">Web Development</p>
          <p className="mb-2">Graphic Design</p>
          <p>Marketing</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="mb-2">Address | City | Country</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p>Email: info@example.com</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Connect With Us</h2>
          <p className="mb-2">Facebook</p>
          <p className="mb-2">Twitter</p>
          <p>Instagram</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; COIN BAZAR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

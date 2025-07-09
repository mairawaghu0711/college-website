import './App.css'
// src/App.jsx
// src/App.jsx
function App() {
  return (
    <>
      {/* Header/Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">ABC Institute</a>
        </div>
      </nav>

      {/* About, Courses, Admissions — All inside proper containers */}
      <main className="py-4">
        {/* Contact Info */}
        <section className="container text-center mb-5">
          <h1 className="display-5 text-dark">ABC Institute of Technology</h1>
          <p className="lead">
            <strong>Email:</strong> contact@abc.edu | <strong>Phone:</strong> (123) 456-7890
          </p>
        </section>

        {/* About Us */}
        <section className="container mb-5">
          <h2 className="text-secondary border-bottom pb-2">About Us</h2>
          <p className="mt-3">
            ABC Institute of Technology is a premier educational institution offering world-class education
            in engineering, science, and management. With a commitment to innovation, excellence, and integrity,
            we strive to shape future leaders and professionals.
          </p>
        </section>

        {/* Courses Offered */}
        <section className="container mb-5">
          <h2 className="text-secondary border-bottom pb-3">Courses Offered</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
            {[
              { title: 'B.Tech', desc: '4-year undergraduate engineering program.' },
              { title: 'M.Tech', desc: '2-year postgraduate engineering program.' },
              { title: 'B.Sc', desc: '3-year undergraduate science program.' },
              { title: 'MBA', desc: '2-year business administration program.' },
              { title: 'Ph.D.', desc: 'Doctoral research in various disciplines.' },
              { title: 'Diploma', desc: 'Short-term technical certification courses.' }
            ].map((course, index) => (
              <div className="col" key={index}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">{course.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Admission Process */}
        <section className="container mb-5">
          <h2 className="text-secondary border-bottom pb-2">Admission Process</h2>
          <p className="mt-3">
            Admissions are conducted based on national-level entrance exams and academic merit. Applicants must
            apply online through our official portal. The process includes document verification, counseling, and final enrollment.
          </p>
          <ul>
            <li>Submit online application</li>
            <li>Upload required documents</li>
            <li>Appear for entrance exam (if applicable)</li>
            <li>Attend counseling session</li>
            <li>Confirm admission with fee payment</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-light text-center text-muted py-3 mt-auto border-top">
        <div className="container">
          <p className="mb-0">&copy; 2025 ABC Institute of Technology. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;




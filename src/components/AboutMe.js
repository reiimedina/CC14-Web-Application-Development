const AboutMe = () => (
  <section className="my-12">
    <h2 className="text-3xl font-semibold text-blue-600">About Me</h2>

    {/* Image */}
    <img
      src="https://static.wikia.nocookie.net/bleach/images/c/ce/685Post-War_Rukia.png"
      alt="Profile"
      className="w-40 mt-4"
    />

    <p className="mt-4">
      <strong>Medina, Shandrei</strong><br />
      21 years old<br />
      From La Trinidad, Benguet, Philippines
    </p>

    <p className="mt-4">
      I am a passionate IT student focused on web development and building
      user-friendly applications. I enjoy learning new technologies and improving
      my skills through hands-on projects.
    </p>

    {/* Hobbies */}
    <p className="mt-4"><strong>Hobbies:</strong></p>
    <ul className="list-disc ml-6">
      <li>Configuring applications</li>
      <li>Exploring new skills</li>
    </ul>

    {/* Interests */}
    <p className="mt-4"><strong>Interests:</strong></p>
    <ul className="list-disc ml-6">
      <li>Web development</li>
      <li>Technology</li>
      <li>Learning new tools</li>
    </ul>
  </section>
);

export default AboutMe;
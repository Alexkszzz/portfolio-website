import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiDotnet,
  SiPostgresql,
  SiJest,
  SiRailway,
  SiPostman,
} from "react-icons/si";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Trong Tuan Mai
          </h1>
          <div className="flex gap-6">
            <a
              href="#experience"
              className="hover:text-blue-400 transition-colors"
            >
              Experience
            </a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Trong Tuan
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack Developer | Software Engineer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              I craft beautiful, functional web experiences. Passionate about
              clean code, elegant design, and solving complex problems with
              simple solutions.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-gray-600 hover:border-blue-400 rounded-lg font-semibold transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {/* <section className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Featured Project
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gray-700/50 rounded-lg aspect-video flex items-center justify-center border border-gray-600">
                <span className="text-gray-500 text-lg">
                  Project Screenshot
                </span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h4 className="text-3xl font-bold mb-4">Amazing Project Name</h4>
              <p className="text-gray-300 mb-6">
                This is your standout project. Describe what makes it special,
                the problem it solves, and the impact it has made. Highlight the
                technologies you used and any unique challenges you overcame
                during development.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-600/20 border border-blue-600 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-600/20 border border-blue-600 rounded-full text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-blue-600/20 border border-blue-600 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-blue-600/20 border border-blue-600 rounded-full text-sm">
                  Tailwind CSS
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href="#"
                  className="px-6 py-2 border border-gray-600 hover:border-blue-400 rounded-lg transition-colors"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Work Experience
          </h3>
          <div className="space-y-8">
            {/* Experience Item 1 - Saras Care */}
            <div className="border-l-2 border-blue-600 pl-8 py-4">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h4 className="text-2xl font-semibold">
                  Website & Front-End Lead (Volunteer Project)
                </h4>
                <span className="text-gray-400">Mar 2025 - Jul 2025</span>
              </div>
              <p className="text-blue-400 mb-3">
                Saras Care | Melbourne, VIC 3000
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Led the UX/UI redesign of the Melbourne Diwali 2025 website,
                  focusing on layout clarity, responsive design, and user flow
                </li>
                <li>
                  Mapped user journeys to guide site structure and content for
                  attendees, sponsors, and community members
                </li>
                <li>
                  Designed and automated event-driven email workflows using n8n,
                  Sendy, and Amazon SES, supporting large-scale communications
                  for 7000+ users
                </li>
                <li>
                  Integrated CRM flows with Monday.com and handled segmentation,
                  bounce tracking, and unsubscribe logic
                </li>
                <li>
                  Delivered mobile-first, visually consistent layouts that
                  improved navigation and engagement
                </li>
              </ul>
            </div>

            {/* Experience Item 2 - Corporate Interactive */}
            <div className="border-l-2 border-blue-600 pl-8 py-4">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h4 className="text-2xl font-semibold">
                  Software Developer (Internship + Contract)
                </h4>
                <span className="text-gray-400">Jul 2024 - Dec 2024</span>
              </div>
              <p className="text-blue-400 mb-3">
                Corporate Interactive | Remote (Based in Sydney, NSW)
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Designed and developed modular, reusable React components for
                  a scalable Next.js-based email campaign management platform
                </li>
                <li>
                  Built a Material UI based interface for composing email
                  campaigns, featuring a rich-text editor, image embedding, and
                  email preview functionality prior to sending
                </li>
                <li>
                  Implemented RESTful APIs and OAuth authentication for secure
                  integration with third-party email-sending services such as
                  Google, Outlook and SMTP providers
                </li>
                <li>
                  Enabled multi-provider email service management and
                  implemented secure credential storage using highly secure
                  encryption to protect sensitive data
                </li>
                <li>
                  Developed features for managing large-scale customer contact
                  data, including CRUD and a high-performance CSV import feature
                  with drag-and-drop and batch processing
                </li>
                <li>
                  Actively participated in Agile development practices including
                  daily standups, sprint planning, retrospectives, and regular
                  code reviews
                </li>
                <li>
                  Designed and implemented database schemas to support email
                  campaigns and contact management with efficient data
                  organization and retrieval
                </li>
              </ul>
            </div>

            {/* Experience Item 3 - YouC PTY Ltd */}
            <div className="border-l-2 border-blue-600 pl-8 py-4">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h4 className="text-2xl font-semibold">Web Developer</h4>
                <span className="text-gray-400">Jul 2022 - Nov 2022</span>
              </div>
              <p className="text-blue-400 mb-3">
                YouC PTY Ltd | Dandenong, VIC 3175
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Designed and implemented a responsive, modern UI using
                  React.js and Next.js for an online warehouse store platform
                </li>
                <li>
                  Enhanced application performance by leveraging static
                  generation and server-side rendering
                </li>
                <li>
                  Optimized state management with Redux, improving data handling
                  and user experience
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Skills & Technologies
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold mb-4 text-blue-400">
                Frontend
              </h4>
              <div className="grid grid-cols-4 gap-6">
                <div className="flex flex-col items-center gap-2 group">
                  <FaReact className="text-3xl text-[#61DAFB] group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400">React</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <SiNextdotjs className="text-5xl text-white group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400">Next.js</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <SiTypescript className="text-3xl text-[#3178C6] group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400">TypeScript</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <SiJavascript className="text-3xl text-[#F7DF1E] group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400">JavaScript</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <FaHtml5 className="text-3xl text-[#E34F26] group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400">HTML5</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <FaCss3Alt className="text-3xl text-[#1572B6] group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400">CSS</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <SiTailwindcss className="text-3xl text-[#06B6D4] group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400">Tailwind</span>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold mb-4 text-purple-400">
                Backend
              </h4>
              <div className="grid grid-cols-4 gap-6">
                <div className="flex flex-col items-center gap-2 group">
                  <FaNodeJs className="text-3xl text-[#339933] group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400">Node.js</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <SiExpress className="text-5xl text-white group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400">Express</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <SiDotnet className="text-3xl text-[#512BD4] group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400">.NET</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <SiPostgresql className="text-3xl text-[#4169E1] group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400">PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* Tools & Other */}
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold mb-4 text-pink-400">
                Tools & Other
              </h4>
              <div className="grid grid-cols-4 gap-6">
                <div className="flex flex-col items-center gap-2 group">
                  <FaGitAlt className="text-3xl text-[#F05032] group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400">Git</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <FaDocker className="text-3xl text-[#2496ED] group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400">Docker</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <FaAws className="text-3xl text-[#FF9900] group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400">AWS</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <SiJest className="text-3xl text-[#C21325] group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400">Jest</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <FaFigma className="text-3xl text-[#F24E1E] group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400">Figma</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <SiRailway className="text-5xl text-white group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400">Railway</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <SiPostman className="text-3xl text-[#FF6C37] group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400">Postman</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Recent Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors">
              <div
                className="aspect-video bg-cover bg-center"
                style={{ backgroundImage: "url(/projects/JAT.PNG)" }}
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">
                  Job Application Tracker
                </h4>
                <p className="text-gray-400 mb-4">
                  A full-stack application to track job applications with
                  search, filtering, and status management features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">
                    .NET
                  </span>
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">
                    Tailwind CSS
                  </span>
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">
                    Jest
                  </span>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://job-application-tracker-dun.vercel.app/"
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    Live Demo →
                  </a>
                  <a
                    href="https://github.com/Alexkszzz/job-application-tracker"
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors">
              <div
                className="aspect-video bg-cover bg-center"
                style={{ backgroundImage: "url(/projects/NhanvanEdu.PNG)" }}
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">
                  NhanVan Education Commercial Project
                </h4>
                <p className="text-gray-400 mb-4">
                  Contributed to migrating an IELTS learning platform backend to
                  .NET 9 with AWS cloud infrastructure and implemented APIs.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">
                    .NET
                  </span>
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">
                    AWS
                  </span>
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">
                    Terraform
                  </span>
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">
                    Docker
                  </span>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/Jung-Talents/ielts-platform-dotnet-be"
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors">
              <div
                className="aspect-video bg-cover bg-center"
                style={{ backgroundImage: "url(/projects/QuoteCloud.PNG)" }}
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">QuoteCloud</h4>
                <p className="text-gray-400 mb-4">
                  Built drag-and-drop email template builder allowing users to
                  create custom formats and send to multiple clients through
                  various channels (Gmail, Outlook, etc.).
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">
                    React
                  </span>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://www.quote.cloud/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    View Live Site →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Let's Work Together</h3>
          <p className="text-gray-300 text-lg mb-12">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="mailto:maitrongtuanbmt@gmail.com"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            >
              Send Email
            </a>
          </div>
          <div className="flex justify-center gap-8 text-gray-400">
            <a
              href="https://github.com/Alexkszzz"
              className="hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ttm27/"
              className="hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2026 Trong Tuan Mai. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

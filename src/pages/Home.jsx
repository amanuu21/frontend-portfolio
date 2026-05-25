import { motion } from "framer-motion"

import {
  FaReact,
  FaFigma,
  FaGithub,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa"

function Home() {
  const skills = [
    {
      name: "React Development",
      icon: <FaReact size={140} color="#61DBFB" />
    },
    {
      name: "JavaScript",
      icon: <FaJs size={140} color="#facc15" />
    },
    {
      name: "Node.js Backend",
      icon: <FaNodeJs size={140} color="#4ade80" />
    },
    {
      name: "UI/UX with Figma",
      icon: <FaFigma size={140} color="#f472b6" />
    },
    {
      name: "GitHub & Git",
      icon: <FaGithub size={140} color="white" />
    },
    {
      name: "HTML5 & CSS3",
      icon: (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px"
          }}
        >
          <FaHtml5 size={120} color="#f97316" />
          <FaCss3Alt size={120} color="#38bdf8" />
        </div>
      )
    }
  ]

  const projects = [
    {
      title: "Event Booking System",
      desc:
        "Built a scalable event booking application using TypeScript with responsive frontend architecture and modern UI principles.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "Blockchain Smart Contracts",
      desc:
        "Designed and implemented blockchain smart contracts integrated with frontend applications using Web3 technologies.",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0"
    },
    {
      title: "Responsive Web Applications",
      desc:
        "Developed multiple responsive websites and frontend features during a remote internship with a US-based company.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    }
  ]

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        overflow: "hidden"
      }}
    >
      {/* HERO */}

      <section
        id="home"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "140px 60px 80px",
          flexWrap: "wrap",
          gap: "40px",
          minHeight: "100vh"
        }}
      >
        {/* LEFT SIDE */}

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            flex: 1,
            minWidth: "320px"
          }}
        >
          <p
            style={{
              color: "#38bdf8",
              fontSize: "22px",
              marginBottom: "20px"
            }}
          >
            Full Stack & Frontend Developer
          </p>

          <h1
            style={{
              color: "white",
              fontSize: "82px",
              lineHeight: "1.05",
              marginBottom: "25px",
              fontWeight: "bold"
            }}
          >
            Creating
            <br />
            Interactive
            <br />
            Digital Products
          </h1>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "22px",
              lineHeight: "1.8",
              maxWidth: "700px",
              marginBottom: "45px"
            }}
          >
            Frontend developer passionate about modern
            interfaces, animation systems, responsive web
            applications, and immersive user experiences.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap"
            }}
          >
            <a href="#projects">
              <button
                style={{
                  background:
                    "linear-gradient(to right, #3b82f6, #8b5cf6)",
                  border: "none",
                  color: "white",
                  padding: "18px 36px",
                  borderRadius: "14px",
                  fontSize: "18px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  boxShadow:
                    "0 10px 30px rgba(59,130,246,0.5)"
                }}
              >
                View Projects
              </button>
            </a>

            <a href="#contact">
              <button
                style={{
                  background: "transparent",
                  border: "1px solid #334155",
                  color: "white",
                  padding: "18px 36px",
                  borderRadius: "14px",
                  fontSize: "18px",
                  cursor: "pointer"
                }}
              >
                Contact Me
              </button>
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "320px"
          }}
        >
          <div
            style={{
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              background:
                "linear-gradient(to bottom right, #2563eb, #7c3aed)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              boxShadow:
                "0 20px 100px rgba(59,130,246,0.6)"
            }}
          >
            <FaReact size={180} color="white" />

            {/* FLOATING ICONS */}

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3
              }}
              style={{
                position: "absolute",
                top: "10%",
                left: "5%"
              }}
            >
              <FaJs size={60} color="#facc15" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4
              }}
              style={{
                position: "absolute",
                bottom: "15%",
                right: "5%"
              }}
            >
              <FaGithub size={60} color="white" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5
              }}
              style={{
                position: "absolute",
                top: "20%",
                right: "-5%"
              }}
            >
              <FaFigma size={60} color="#f472b6" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.5
              }}
              style={{
                position: "absolute",
                bottom: "10%",
                left: "-5%"
              }}
            >
              <FaNodeJs size={60} color="#4ade80" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        style={{
          padding: "120px 60px"
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "68px",
            marginBottom: "80px",
            textAlign: "center"
          }}
        >
          Featured Projects
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "40px"
          }}
        >
          {projects.map((project) => (
            <motion.div
              whileHover={{
                y: -12,
                scale: 1.03
              }}
              key={project.title}
              style={{
                background: "#050816",
                borderRadius: "28px",
                overflow: "hidden",
                border: "1px solid #1e293b",
                boxShadow:
                  "0 10px 40px rgba(0,0,0,0.6)"
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover"
                }}
              />

              <div
                style={{
                  padding: "30px"
                }}
              >
                <h2
                  style={{
                    color: "white",
                    marginBottom: "20px",
                    fontSize: "30px"
                  }}
                >
                  {project.title}
                </h2>

                <p
                  style={{
                    color: "#94a3b8",
                    lineHeight: "1.9",
                    fontSize: "17px"
                  }}
                >
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}

      <section
        id="skills"
        style={{
          padding: "120px 60px"
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "68px",
            textAlign: "center",
            marginBottom: "90px"
          }}
        >
          How I Can Contribute & My Key Skills
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px"
          }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{
                y: -12,
                scale: 1.03
              }}
              style={{
                background: "#050816",
                border: "1px solid #1e293b",
                borderRadius: "28px",
                padding: "55px 35px",
                textAlign: "center",
                boxShadow:
                  "0 10px 40px rgba(0,0,0,0.6)"
              }}
            >
              <div
                style={{
                  marginBottom: "35px"
                }}
              >
                {skill.icon}
              </div>

              <h2
                style={{
                  color: "white",
                  fontSize: "30px",
                  lineHeight: "1.4"
                }}
              >
                {skill.name}
              </h2>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        style={{
          padding: "120px 60px",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "68px",
            marginBottom: "40px"
          }}
        >
          Contact Me
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "22px",
            marginBottom: "20px"
          }}
        >
          Addis Ababa, Ethiopia
        </p>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "22px",
            marginBottom: "20px"
          }}
        >
          amanuelabb@gmail.com
        </p>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "22px",
            marginBottom: "50px"
          }}
        >
          0994333391
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://github.com/amanuu21"
          target="_blank"
          style={{
            display: "inline-block",
            background:
              "linear-gradient(to right, #3b82f6, #8b5cf6)",
            color: "white",
            textDecoration: "none",
            padding: "18px 42px",
            borderRadius: "14px",
            fontSize: "18px",
            fontWeight: "bold"
          }}
        >
          Visit My GitHub
        </motion.a>
      </section>
    </div>
  )
}

export default Home
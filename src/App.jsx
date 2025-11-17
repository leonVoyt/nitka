import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

const loveMessages = [
  "You are my sunshine ☀️",
  "You make every day special ✨",
  "I love you more than words can say 💕",
  "You are my everything 🌟",
  "You light up my world 🌈",
  "I'm so lucky to have you 🍀",
  "You are the most beautiful girl i ever seen 💐",
  "Love youuu so much Buuusikkk 🌸",
  "Cпасибо за то что ты есть...❤️",
];

const Heart = ({ delay, left, duration }) => {
  return (
    <motion.div
      className="floating-heart"
      initial={{
        y: window.innerHeight + 50,
        x: left,
        scale: 0,
        opacity: 0,
      }}
      animate={{
        y: -100,
        scale: [0, 1.2, 1],
        opacity: [0, 1, 0.8, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    >
      💖
    </motion.div>
  );
};

function App() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Create floating hearts
    const heartArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      left: Math.random() * 100,
      duration: 8 + Math.random() * 4,
    }));
    setHearts(heartArray);
  }, []);

  useEffect(() => {
    // Cycle through messages
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % loveMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      {/* Animated gradient background */}
      <motion.div
        className="background"
        animate={{
          background: [
            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating hearts */}
      <div className="hearts-container">
        {hearts.map((heart) => (
          <Heart
            key={heart.id}
            delay={heart.delay}
            left={`${heart.left}%`}
            duration={heart.duration}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="content">
        <motion.div
          className="title-container"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.5,
          }}
        >
          <motion.h1
            className="main-title"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            For My Kukolka , 6 month together 💕💕
          </motion.h1>
        </motion.div>

        {/* Animated love messages */}
        <div className="message-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessageIndex}
              className="message"
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.8,
                rotateX: -90,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
              }}
              exit={{
                opacity: 0,
                y: -50,
                scale: 0.8,
                rotateX: 90,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              {loveMessages[currentMessageIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="decorative-hearts"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.span
            className="decorative-heart"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0,
            }}
          >
            💖
          </motion.span>
          <motion.span
            className="decorative-heart"
            animate={{
              y: [0, -20, 0],
              rotate: [0, -10, 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            💕
          </motion.span>
          <motion.span
            className="decorative-heart"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            💝
          </motion.span>
        </motion.div>

        {/* Sparkle effect */}
        <div className="sparkles">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                rotate: 360,
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            >
              ✨
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

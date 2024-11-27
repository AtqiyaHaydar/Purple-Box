"use client";

// Library Import
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Main = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animationControls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animationControls.start("visible");
    }
  }, [inView, animationControls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      className="text-center space-y-6 mt-[80px] wrapper"
      initial="hidden"
      animate={animationControls}
      variants={containerVariants}
    >
      <motion.h1
        className="text-3xl lg:text-4xl font-bold font-gotham text-white"
        variants={textVariants}
      >
        Our <span className="text-gradient">Privacy Policy</span>
      </motion.h1>

      <motion.p
        className="max-w-3xl mx-auto text-md lg:text-lg text-purple-200"
        variants={textVariants}
      >
        At Purple Box AI SL, accessible through{" "}
        <a href="https://purple-box.app" className="text-purple-400">
          purple-box.app
        </a>
        , we are deeply committed to safeguarding your privacy and ensuring the
        secure handling of your personal information. This privacy policy
        outlines the types of data we collect, the reasons we collect it, how we
        use and protect it, and your rights regarding the data you provide. By
        using our services, you agree to this privacy policy, and we encourage
        you to review it regularly.
      </motion.p>

      <motion.h2
        className="text-2xl lg:text-3xl font-semibold text-white"
        variants={textVariants}
      >
        Data Collection
      </motion.h2>
      <motion.p
        className="max-w-3xl mx-auto text-md lg:text-lg text-purple-200"
        variants={textVariants}
      >
        We collect data to provide and improve our services, ensuring a seamless
        and efficient experience for all users.
      </motion.p>

      <motion.h3
        className="text-xl lg:text-2xl font-semibold text-white"
        variants={textVariants}
      >
        1.1 Personal Information
      </motion.h3>
      <motion.p
        className="max-w-3xl mx-auto text-md lg:text-lg text-purple-200"
        variants={textVariants}
      >
        When you register, purchase a subscription, or contact us via{" "}
        <a href="https://purple-box.app" className="text-purple-400">
          purple-box.app
        </a>
        , we may collect your name, email address, phone number, business
        details, and payment information. This data is essential for managing
        your account, processing payments, and providing customer support.
      </motion.p>

      <motion.h3
        className="text-xl lg:text-2xl font-semibold text-white"
        variants={textVariants}
      >
        1.2 Automatically Collected Data
      </motion.h3>
      <motion.p
        className="max-w-3xl mx-auto text-md lg:text-lg text-purple-200"
        variants={textVariants}
      >
        We use cookies and tracking technologies to collect data automatically,
        such as your IP address, device type, and browser settings. This data
        helps us improve functionality, analyze user behavior, and protect
        against fraud. You can manage cookies through your browser settings.
      </motion.p>

      <motion.h3
        className="text-xl lg:text-2xl font-semibold text-white"
        variants={textVariants}
      >
        1.3 Third-Party Integrations
      </motion.h3>
      <motion.p
        className="max-w-3xl mx-auto text-md lg:text-lg text-purple-200"
        variants={textVariants}
      >
        Our app integrates with third-party tools, such as Meta Pixel, Facebook
        Ads, and APIs. These integrations allow us to optimize ad targeting,
        track performance, and deliver personalized services. Any data shared
        with third parties complies with relevant laws and is governed by
        agreements to protect your privacy.
      </motion.p>

      <motion.h2
        className="text-2xl lg:text-3xl font-semibold text-white"
        variants={textVariants}
      >
        User Rights
      </motion.h2>
      <motion.p
        className="max-w-3xl mx-auto text-md lg:text-lg text-purple-200"
        variants={textVariants}
      >
        You have the right to:
        <ul className="list-disc text-left ml-8">
          <li>Access the data we store about you.</li>
          <li>Rectify any inaccuracies in your data.</li>
          <li>Request deletion of your personal data.</li>
          <li>Opt-out of targeted advertising or data processing.</li>
        </ul>
        To exercise these rights, contact us at{" "}
        <a href="mailto:info@purple-box.app" className="text-purple-400">
          info@purple-box.app
        </a>
        .
      </motion.p>

      <motion.h2
        className="text-2xl lg:text-3xl font-semibold text-white"
        variants={textVariants}
      >
        Data Retention
      </motion.h2>
      <motion.p
        className="max-w-3xl mx-auto text-md lg:text-lg text-purple-200"
        variants={textVariants}
      >
        We retain your data only for as long as necessary to provide our
        services or comply with legal requirements. You may request deletion of
        your data at any time by contacting us.
      </motion.p>

      <motion.h2
        className="text-2xl lg:text-3xl font-semibold text-white"
        variants={textVariants}
      >
        Cookies and Consent
      </motion.h2>
      <motion.p
        className="max-w-3xl mx-auto text-md lg:text-lg text-purple-200"
        variants={textVariants}
      >
        We use cookies to enhance your experience. You can manage or disable
        cookies through your browser settings. By using our services, you
        consent to the use of cookies. You may revoke this consent at any time.
      </motion.p>

      <motion.h2
        className="text-2xl lg:text-3xl font-semibold text-white"
        variants={textVariants}
      >
        Updates to this Policy
      </motion.h2>
      <motion.p
        className="max-w-3xl mx-auto text-md lg:text-lg text-purple-200"
        variants={textVariants}
      >
        This privacy policy may be updated periodically. Changes will be posted
        on this page, with the latest revision date clearly indicated.
      </motion.p>
    </motion.div>
  );
};

export default Main;
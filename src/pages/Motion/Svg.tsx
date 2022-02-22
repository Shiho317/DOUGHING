import { motion } from "framer-motion";

const Svg = () => {

  const svgVariants = {
    hidden: {
      rotate: -180
    },
    visible: {
      rotate: 0,
      transition: { duration: 1 }
    }
  };

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return(
    <motion.svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"
    variants={svgVariants} initial="hidden" animate="visible">
    <circle cx="250" cy="250" r="245" stroke="url(#paint0_linear_3_38)" stroke-width="10"/>
    <motion.line x1="4.99976" y1="245" x2="491" y2="245" stroke="url(#paint1_linear_3_38)" stroke-width="10" variants={pathVariants}/>
    <motion.line x1="255" y1="10.0002" x2="255" y2="492" stroke="url(#paint2_linear_3_38)" stroke-width="10" variants={pathVariants}/>
    <motion.line x1="82.5353" y1="74.4647" x2="426.189" y2="418.119" stroke="url(#paint3_linear_3_38)" stroke-width="10" variants={pathVariants}/>
    <motion.line x1="423.896" y1="80.5357" x2="79.5354" y2="424.897" stroke="url(#paint4_linear_3_38)" stroke-width="10" variants={pathVariants}/>
    <motion.path d="M250.5 51.0001C164 -8.99987 199 108.5 109.5 108.5C1.49972 118.5 109.5 159 50.4998 249.5C-8.50026 340 91.4998 298.5 109.5 389.5C127.5 480.5 153.5 402 250.5 449.5C347.5 497 292.5 408 391 389.5C489.5 371 391 328 449.5 249.5C508 171 405.5 199.5 391 108.5C376.5 17.5001 313.873 94.9584 250.5 51.0001Z" stroke="url(#paint5_linear_3_38)" stroke-width="10" variants={pathVariants}/>
    <circle cx="134" cy="196" r="20" stroke="url(#paint6_linear_3_38)" stroke-width="10"/>
    <circle cx="207" cy="140" r="20" stroke="url(#paint7_linear_3_38)" stroke-width="10"/>
    <circle cx="299" cy="140" r="20" stroke="url(#paint8_linear_3_38)" stroke-width="10"/>
    <circle cx="378" cy="196" r="20" stroke="url(#paint9_linear_3_38)" stroke-width="10"/>
    <circle cx="378" cy="297" r="20" stroke="url(#paint10_linear_3_38)" stroke-width="10"/>
    <circle cx="207" cy="360" r="20" stroke="url(#paint11_linear_3_38)" stroke-width="10"/>
    <circle cx="134" cy="297" r="20" stroke="url(#paint12_linear_3_38)" stroke-width="10"/>
    <circle cx="299" cy="360" r="20" stroke="url(#paint13_linear_3_38)" stroke-width="10"/>
    <defs>
    <linearGradient id="paint0_linear_3_38" x1="250" y1="0.000198364" x2="250" y2="500" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFD600"/>
    <stop offset="0.171875" stop-color="#FFB800"/>
    <stop offset="0.854167" stop-color="#FF7A00"/>
    <stop offset="1" stop-color="#FF5C00"/>
    </linearGradient>
    <linearGradient id="paint1_linear_3_38" x1="248" y1="250" x2="248" y2="251" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFD600"/>
    <stop offset="0.171875" stop-color="#FFB800"/>
    <stop offset="0.854167" stop-color="#FF7A00"/>
    <stop offset="1" stop-color="#FF5C00"/>
    </linearGradient>
    <linearGradient id="paint2_linear_3_38" x1="250" y1="251" x2="249" y2="251" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD600"/>
<stop offset="0.171875" stop-color="#FFB800"/>
<stop offset="0.854167" stop-color="#FF7A00"/>
<stop offset="1" stop-color="#FF5C00"/>
    </linearGradient>
    <linearGradient id="paint3_linear_3_38" x1="250.827" y1="249.827" x2="250.12" y2="250.534" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFD600"/>
    <stop offset="0.171875" stop-color="#FFB800"/>
    <stop offset="0.854167" stop-color="#FF7A00"/>
    <stop offset="1" stop-color="#FF5C00"/>
    </linearGradient>
    <linearGradient id="paint4_linear_3_38" x1="248.18" y1="249.181" x2="247.473" y2="248.474" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFD600"/>
    <stop offset="0.171875" stop-color="#FFB800"/>
    <stop offset="0.854167" stop-color="#FF7A00"/>
    <stop offset="1" stop-color="#FF5C00"/>
    </linearGradient>
    <linearGradient id="paint5_linear_3_38" x1="249.731" y1="33.9361" x2="249.731" y2="463.287" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD600"/>
<stop offset="0.171875" stop-color="#FFB800"/>
<stop offset="0.854167" stop-color="#FF7A00"/>
<stop offset="1" stop-color="#FF5C00"/>
    </linearGradient>
    <linearGradient id="paint6_linear_3_38" x1="134" y1="171" x2="134" y2="221" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFD600"/>
    <stop offset="0.171875" stop-color="#FFB800"/>
    <stop offset="0.854167" stop-color="#FF7A00"/>
    <stop offset="1" stop-color="#FF5C00"/>
    </linearGradient>
    <linearGradient id="paint7_linear_3_38" x1="207" y1="115" x2="207" y2="165" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFD600"/>
    <stop offset="0.171875" stop-color="#FFB800"/>
    <stop offset="0.854167" stop-color="#FF7A00"/>
    <stop offset="1" stop-color="#FF5C00"/>
    </linearGradient>
    <linearGradient id="paint8_linear_3_38" x1="299" y1="115" x2="299" y2="165" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFD600"/>
    <stop offset="0.171875" stop-color="#FFB800"/>
    <stop offset="0.854167" stop-color="#FF7A00"/>
    <stop offset="1" stop-color="#FF5C00"/>
    </linearGradient>
    <linearGradient id="paint9_linear_3_38" x1="378" y1="171" x2="378" y2="221" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFD600"/>
    <stop offset="0.171875" stop-color="#FFB800"/>
    <stop offset="0.854167" stop-color="#FF7A00"/>
    <stop offset="1" stop-color="#FF5C00"/>
    </linearGradient>
    <linearGradient id="paint10_linear_3_38" x1="378" y1="272" x2="378" y2="322" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFD600"/>
    <stop offset="0.171875" stop-color="#FFB800"/>
    <stop offset="0.854167" stop-color="#FF7A00"/>
    <stop offset="1" stop-color="#FF5C00"/>
    </linearGradient>
    <linearGradient id="paint11_linear_3_38" x1="207" y1="335" x2="207" y2="385" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFD600"/>
    <stop offset="0.171875" stop-color="#FFB800"/>
    <stop offset="0.854167" stop-color="#FF7A00"/>
    <stop offset="1" stop-color="#FF5C00"/>
    </linearGradient>
    <linearGradient id="paint12_linear_3_38" x1="134" y1="272" x2="134" y2="322" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFD600"/>
    <stop offset="0.171875" stop-color="#FFB800"/>
    <stop offset="0.854167" stop-color="#FF7A00"/>
    <stop offset="1" stop-color="#FF5C00"/>
    </linearGradient>
    <linearGradient id="paint13_linear_3_38" x1="299" y1="335" x2="299" y2="385" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFD600"/>
    <stop offset="0.171875" stop-color="#FFB800"/>
    <stop offset="0.854167" stop-color="#FF7A00"/>
    <stop offset="1" stop-color="#FF5C00"/>
    </linearGradient>
    </defs>
    </motion.svg>
  )
};

export default Svg;
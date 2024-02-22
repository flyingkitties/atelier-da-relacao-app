import * as React from 'react';
import {
  SVGMotionProps,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';

function LogoSvg(props: SVGMotionProps<SVGSVGElement>) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          delayChildren: 1,
          pathLength: {
            delay,
            type: 'spring',
            duration: 1.5,
            bounce: 0,
          },
          opacity: { delay, duration: 0.5 },
        },
      };
    },
  };

  return (
    <motion.svg
      initial="hidden"
      animate="visible"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      zoomAndPan="magnify"
      viewBox="0 0 375 374.999991"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <defs>
        <clipPath id="7a42135cbd">
          <path
            d="M 289.074219 187.5 L 362.574219 187.5 L 362.574219 366.75 L 289.074219 366.75 Z M 289.074219 187.5 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#7a42135cbd)">
        <motion.path
          id="flower"
          variants={draw}
          custom={8}
          fill="#000000"
          d="M 360.996094 298.65625 C 360.625 290.609375 362.476562 283.132812 365.578125 275.957031 C 361.507812 280.738281 360.785156 286.863281 359.675781 292.859375 C 359.472656 291.414062 359.386719 289.996094 359.308594 288.585938 C 359.222656 287.164062 359.132812 285.746094 359.082031 284.328125 C 358.980469 281.328125 358.988281 281.328125 358.335938 280.238281 C 358.246094 282.871094 358.09375 285.304688 358.125 287.730469 C 358.15625 290.160156 358.386719 292.585938 358.523438 295.011719 C 356.902344 292.238281 355.007812 289.957031 352.582031 288.160156 C 350.246094 286.417969 347.882812 284.777344 344.855469 283.683594 C 347.046875 294.238281 350.355469 303.625 358.582031 309.890625 C 357.683594 314.5 356.332031 318.6875 353.996094 322.4375 C 351.46875 326.476562 348.652344 330.25 345.390625 333.625 C 343.03125 336.066406 340.429688 338.140625 337.617188 339.910156 C 337.269531 340.125 336.894531 340.308594 336.535156 340.511719 C 336.675781 339.902344 336.953125 339.492188 337.261719 339.09375 C 338.960938 336.84375 340.726562 334.644531 342.363281 332.355469 C 344.863281 328.859375 346.839844 325.03125 348.136719 320.820312 C 348.6875 319.023438 349.152344 317.183594 348.859375 315.253906 C 348.453125 312.582031 346.738281 311.582031 344.503906 312.757812 C 342.785156 313.664062 341.417969 315.042969 340.253906 316.660156 C 337.378906 320.644531 335.167969 324.996094 334.203125 329.996094 C 334.179688 330.128906 334.148438 330.257812 334.117188 330.390625 L 334.117188 225.738281 C 335.84375 224.75 337.480469 223.84375 339.0625 222.863281 C 343.515625 220.089844 346.847656 216.175781 348.941406 211.058594 C 349.539062 209.609375 349.890625 208.113281 349.542969 206.523438 C 349 204.046875 346.808594 202.953125 344.773438 204.1875 C 344.128906 204.585938 343.5 205.0625 342.984375 205.632812 C 341.492188 207.257812 340.074219 208.945312 338.566406 210.667969 C 340.082031 204.757812 344.535156 201.070312 347.769531 196.433594 C 346.351562 197.480469 344.976562 198.558594 343.769531 199.8125 C 342.515625 201.117188 341.308594 202.507812 340.273438 204.023438 C 339.335938 205.402344 338.65625 206.992188 337.863281 208.5 C 338.472656 204.820312 339.765625 201.367188 339.632812 197.539062 C 338.777344 200.132812 337.910156 202.730469 337.054688 205.328125 C 336.402344 201.351562 335.242188 197.734375 333.210938 194.339844 C 330.105469 198.023438 328.316406 202.203125 326.972656 206.695312 C 326.496094 204.910156 326.257812 203.128906 325.800781 201.417969 C 325.339844 199.703125 324.964844 197.910156 323.730469 196.53125 C 323.835938 197.949219 324.097656 199.324219 324.351562 200.691406 C 324.617188 202.085938 324.882812 203.484375 325.148438 204.910156 C 323.632812 202.953125 322.3125 200.988281 320.738281 199.277344 C 319.183594 197.582031 317.308594 196.28125 315.210938 195.472656 C 317.527344 198.722656 321.070312 200.679688 322.804688 204.484375 C 322.222656 204.242188 321.734375 203.871094 321.226562 203.542969 C 318.964844 202.085938 317.25 203.023438 317.15625 205.878906 C 317.117188 207.125 317.378906 208.441406 317.738281 209.644531 C 319.082031 214.0625 321.417969 217.773438 324.761719 220.691406 C 326.472656 222.171875 328.199219 223.625 329.980469 224.984375 C 330.898438 225.6875 331.492188 226.46875 331.773438 227.492188 L 331.773438 274.5625 C 331.582031 273.796875 331.398438 273.035156 331.226562 272.261719 C 329.972656 266.742188 327.453125 261.960938 323.824219 257.898438 C 322.804688 256.757812 321.5 255.828125 320.183594 255.125 C 318.328125 254.117188 316.648438 255.136719 316.3125 257.378906 C 316.148438 258.488281 316.1875 259.699219 316.402344 260.792969 C 316.964844 263.734375 318.15625 266.425781 319.503906 269.035156 C 321.695312 273.257812 324.648438 276.84375 327.605469 280.433594 C 328.117188 281.066406 328.625 281.707031 329.347656 282.585938 C 321.929688 279.984375 307.503906 264.351562 306.527344 252.5625 C 314.519531 246.074219 317.554688 236.671875 319.453125 226.175781 C 316.515625 227.355469 314.222656 229 311.949219 230.742188 C 309.601562 232.558594 307.792969 234.867188 306.242188 237.558594 C 306.402344 232.636719 306.472656 227.828125 305.78125 223.054688 C 305.652344 223.046875 305.535156 223.046875 305.402344 223.042969 C 305.269531 227.273438 305.128906 231.515625 304.996094 235.753906 C 304.171875 232.792969 303.609375 229.816406 302.847656 226.90625 C 302.074219 223.921875 300.542969 221.363281 298.644531 218.660156 C 299.984375 222.679688 301.40625 226.289062 302.378906 230.035156 C 303.976562 236.195312 304.222656 239.496094 303.671875 241.609375 C 302.601562 238.109375 302.121094 234.460938 300.585938 231.171875 C 301.675781 237.488281 302.859375 243.769531 304.230469 250.015625 C 305.101562 254.023438 305.921875 258.101562 307.792969 261.730469 C 312.675781 271.226562 319.296875 278.894531 328.308594 283.898438 C 329.441406 284.519531 330.59375 285.113281 331.785156 285.742188 L 331.785156 368.21875 L 216.011719 368.21875 L 216.011719 82.808594 L 241.453125 82.808594 L 333.9375 175.292969 L 333.9375 80.464844 L 242.421875 80.464844 L 215.835938 53.898438 L 95.738281 173.996094 L 95.738281 369.390625 L 98.074219 369.390625 L 98.074219 174.960938 L 215.835938 57.203125 L 239.097656 80.464844 L 213.664062 80.464844 L 213.664062 370.5625 L 334.109375 370.5625 L 334.109375 343.394531 C 334.140625 343.378906 334.179688 343.355469 334.210938 343.335938 C 343.265625 339.0625 349.921875 331.828125 355.308594 323.054688 C 357.046875 320.226562 358.347656 317.152344 359.105469 313.839844 C 359.878906 310.429688 360.722656 307.035156 361.363281 303.59375 C 362.300781 298.507812 363.085938 293.390625 363.933594 288.28125 C 363.800781 288.25 363.667969 288.210938 363.535156 288.179688 C 362.683594 291.675781 361.84375 295.164062 360.996094 298.65625 Z M 310.1875 234.441406 C 312.378906 231.945312 315.171875 230.25 317.882812 228.226562 C 317.542969 233.429688 311.886719 245.410156 307.992188 249.078125 C 308.664062 247.613281 309.183594 246.46875 309.714844 245.320312 C 309.605469 245.234375 309.492188 245.15625 309.398438 245.074219 C 308.929688 245.542969 308.460938 246.019531 307.992188 246.488281 C 308.441406 244.125 309.574219 242.078125 310.574219 239.984375 C 311.59375 237.847656 312.601562 235.703125 313.417969 233.445312 C 310.105469 237.429688 307.742188 241.996094 305.902344 246.976562 C 305.863281 242.207031 307.15625 237.910156 310.1875 234.441406 Z M 327.5625 269.605469 C 327.851562 271.15625 328.136719 272.707031 328.429688 274.257812 C 328.328125 274.289062 328.230469 274.328125 328.132812 274.359375 C 327.511719 273.167969 326.882812 271.972656 326.261719 270.773438 C 326.1875 270.8125 326.105469 270.851562 326.027344 270.882812 C 326.535156 272.503906 327.042969 274.132812 327.546875 275.753906 C 327.480469 275.792969 327.402344 275.828125 327.332031 275.867188 C 326.058594 274.152344 324.792969 272.433594 323.527344 270.722656 C 323.449219 270.761719 323.367188 270.8125 323.292969 270.859375 C 323.324219 271.199219 323.355469 271.554688 323.398438 272.011719 C 323.230469 271.964844 323.027344 271.980469 322.964844 271.882812 C 320.707031 268.519531 318.851562 264.9375 317.890625 260.882812 C 317.679688 259.984375 317.59375 259 317.65625 258.082031 C 317.769531 256.429688 318.613281 255.886719 319.9375 256.691406 C 321.0625 257.375 322.183594 258.203125 323.0625 259.210938 C 326.046875 262.65625 328.308594 266.613281 329.511719 271.1875 C 330.359375 274.421875 331.019531 277.730469 331.582031 281.054688 C 330.355469 277.210938 329.746094 273.117188 327.5625 269.605469 Z M 331.582031 82.808594 L 331.582031 169.644531 L 244.746094 82.808594 Z M 337.644531 215.449219 C 339.308594 212.273438 341.0625 209.160156 343.691406 206.769531 C 344.121094 206.378906 344.546875 205.964844 345.015625 205.648438 C 346.707031 204.472656 348.335938 205.410156 348.351562 207.59375 C 348.351562 208.316406 348.183594 209.082031 347.941406 209.761719 C 346.707031 213.15625 344.871094 216.132812 342.265625 218.429688 C 341.144531 219.417969 339.695312 219.980469 338.382812 220.734375 C 338.308594 220.648438 338.21875 220.570312 338.136719 220.488281 C 339.09375 219.449219 340.054688 218.417969 341.011719 217.371094 C 340.957031 217.277344 340.898438 217.175781 340.839844 217.074219 C 339.992188 217.59375 339.144531 218.113281 338.28125 218.632812 C 338.207031 218.578125 338.125 218.527344 338.046875 218.476562 C 338.664062 217.5625 339.269531 216.65625 339.890625 215.746094 C 339.804688 215.648438 339.714844 215.550781 339.621094 215.453125 C 338.972656 216.167969 338.308594 216.878906 337.675781 217.621094 C 337.0625 218.34375 336.484375 219.109375 335.617188 219.679688 C 336.28125 218.273438 336.910156 216.828125 337.644531 215.449219 Z M 328.433594 218.359375 C 327.523438 216.886719 326.609375 215.417969 325.691406 213.933594 C 325.605469 213.992188 325.523438 214.035156 325.433594 214.09375 C 326.308594 216.390625 327.179688 218.703125 328.074219 221.066406 C 326.789062 219.996094 326.074219 218.355469 324.792969 216.847656 C 324.734375 217.390625 324.703125 217.664062 324.679688 217.957031 C 321.214844 215.71875 317.953125 207.890625 319.183594 204.605469 C 320.269531 204.496094 320.992188 205.28125 321.703125 206.015625 C 323.988281 208.367188 325.789062 211.101562 327.15625 214.175781 C 327.738281 215.484375 328.246094 216.835938 328.796875 218.164062 C 328.667969 218.226562 328.550781 218.296875 328.433594 218.359375 Z M 332.429688 208.359375 C 331.460938 212.117188 331.925781 215.929688 331.765625 220.007812 C 331.753906 220.445312 331.726562 220.882812 331.695312 221.324219 C 331.367188 220.628906 331.15625 220.28125 331.023438 219.886719 C 330.257812 217.664062 329.5 215.453125 328.789062 213.210938 C 328.082031 210.984375 328.046875 208.722656 328.5625 206.417969 C 329.402344 202.636719 331.4375 199.488281 332.925781 195.757812 C 336.035156 203.191406 336.230469 210.398438 334.101562 217.582031 C 333.824219 218.527344 333.5 219.46875 333.148438 220.414062 C 332.90625 216.402344 332.671875 212.375 332.429688 208.359375 Z M 335.179688 333.691406 C 335.066406 333.644531 334.9375 333.59375 334.820312 333.558594 C 335.339844 331.359375 335.738281 329.109375 336.425781 326.976562 C 337.585938 323.378906 339.320312 320.085938 341.664062 317.253906 C 342.679688 316.019531 343.957031 314.996094 345.257812 314.121094 C 346.363281 313.378906 347.21875 313.910156 347.382812 315.3125 C 347.492188 316.292969 347.449219 317.34375 347.246094 318.3125 C 346.441406 322.253906 344.710938 325.761719 342.691406 329.105469 C 342.082031 330.117188 341.488281 331.167969 340.726562 332.042969 C 340.1875 332.65625 340.132812 334.210938 338.746094 333.519531 C 338.132812 334.253906 337.511719 334.976562 336.894531 335.710938 C 336.832031 335.671875 336.78125 335.632812 336.71875 335.601562 C 337.28125 334.152344 337.839844 332.703125 338.402344 331.25 C 338.300781 331.175781 338.199219 331.105469 338.09375 331.035156 C 337.695312 331.519531 337.296875 331.992188 336.742188 332.65625 C 336.738281 331.921875 336.730469 331.335938 336.71875 330.746094 C 336.628906 330.730469 336.546875 330.714844 336.453125 330.699219 C 336.035156 331.695312 335.605469 332.695312 335.179688 333.691406 Z M 358.835938 304.277344 C 356.789062 299.046875 354.402344 294.558594 351.203125 290.617188 C 351.078125 290.695312 350.960938 290.761719 350.84375 290.832031 C 352.664062 294.46875 354.484375 298.109375 356.308594 301.738281 C 356.210938 301.816406 356.117188 301.898438 356.035156 301.972656 C 354.984375 300.769531 353.933594 299.578125 352.875 298.375 C 352.785156 298.453125 352.699219 298.539062 352.601562 298.617188 C 354.210938 301.226562 355.808594 303.839844 357.484375 306.578125 C 356.066406 305.957031 354.472656 304.308594 352.46875 300.832031 C 351.128906 298.484375 350.105469 295.929688 349.050781 293.417969 C 348.023438 290.992188 347.015625 288.554688 346.445312 285.867188 C 349.277344 287.691406 352.160156 289.339844 354.4375 291.847656 C 357.265625 294.941406 358.601562 298.84375 359.003906 303.144531 C 359.023438 303.371094 358.941406 303.605469 358.835938 304.277344 Z M 358.835938 304.277344 "
          fillOpacity={1}
          fillRule="nonzero"
        />
      </g>

      <motion.path
        id="line 1"
        variants={draw}
        custom={1}
        strokeLinecap="butt"
        transform="matrix(-0.0049543, -0.749984, 0.749984, -0.0049543, 37.499391, 366.83652)"
        fill="none"
        strokeLinejoin="miter"
        d="M -0.00202386 2.000843 L 302.76502 2.000841 "
        stroke="#000000"
        strokeWidth={4}
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <motion.path
        id="line 2"
        variants={draw}
        custom={2}
        strokeLinecap="butt"
        transform="matrix(0.549128, -0.510841, 0.510841, 0.549128, 35.877464, 140.124572)"
        fill="none"
        strokeLinejoin="miter"
        d="M -0.000536939 1.999189 L 272.398412 1.999591 "
        stroke="#000000"
        strokeWidth={4}
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <motion.path
        id="line 3"
        variants={draw}
        custom={3}
        strokeLinecap="butt"
        transform="matrix(-0.548771, -0.511225, 0.511225, -0.548771, 333.361739, 140.852012)"
        fill="none"
        strokeLinejoin="miter"
        d="M 0.0018552 1.999299 L 271.476325 2.000597 "
        stroke="#000000"
        strokeWidth={4}
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <motion.path
        id="line 4"
        variants={draw}
        custom={4}
        strokeLinecap="butt"
        transform="matrix(0.00028564, 0.75, -0.75, 0.00028564, 335.845295, 36.004117)"
        fill="none"
        strokeLinejoin="miter"
        d="M -0.00104413 2.00206 L 139.702101 1.997975 "
        stroke="#000000"
        strokeWidth={4}
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <motion.path
        id="line 5"
        variants={draw}
        custom={5}
        strokeLinecap="butt"
        transform="matrix(0.749991, 0.00376582, -0.00376582, 0.749991, 186.489455, 36.000023)"
        fill="none"
        strokeLinejoin="miter"
        d="M -0.0019401 2.000004 L 199.162036 1.999984 "
        stroke="#000000"
        strokeWidth={4}
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <motion.path
        id="line 6"
        variants={draw}
        custom={6}
        strokeLinecap="butt"
        transform="matrix(-0.00273282, 0.749995, -0.749995, -0.00273282, 189.445391, 37.503191)"
        fill="none"
        strokeLinejoin="miter"
        d="M -0.00217499 2.000126 L 439.104925 1.999081 "
        stroke="#000000"
        strokeWidth={4}
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
      <motion.path
        id="line 7"
        variants={draw}
        custom={7}
        strokeLinecap="butt"
        transform="matrix(0.75, 0, 0, 0.75, 185.41098, 365.327261)"
        fill="none"
        strokeLinejoin="miter"
        d="M -0.0010977 2.001152 L 198.63954 2.001152 "
        stroke="#000000"
        strokeWidth={4}
        strokeOpacity={1}
        strokeMiterlimit={4}
      />
    </motion.svg>
  );
}

export default LogoSvg;

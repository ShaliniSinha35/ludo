import * as React from "react"
// import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"
import Svg, {
  Defs,
  RadialGradient,
  LinearGradient,
  Stop,
  Path,
  Ellipse,
  Circle
} from "react-native-svg"
import { View } from "react-native"
import * as Animatable from 'react-native-animatable';
const ReadyGreen = (props) => (

    <Animatable.View 
    style={[{height:30,width:30,position:"absolute", top:-10, right:-3},]}
     animation="fadeIn"// Specify the animation name
    easing="ease-in-out"
    iterationCount="infinite"
    duration={500} // Animation duration in milliseconds
  >


<Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 1080 1080",
    }}
    viewBox="0 0 1080 1080"
    {...props}
  >
    <RadialGradient
      id="a"
      cx={346.235}
      cy={820.642}
      r={229.141}
      gradientUnits="userSpaceOnUse"
    >
      <Stop
        offset={0.162}
        style={{
          stopColor: "#84ca6f",
        }}
      />
      <Stop
        offset={1}
        style={{
          stopColor: "#2b8226",
        }}
      />
    </RadialGradient>
    <Ellipse
      cx={540.29}
      cy={812.82}
      rx={314.51}
      ry={127.94}
      style={{
        fill: "url(#a)",
      }}
    />
    <LinearGradient
      id="b"
      x1={229.495}
      x2={724.495}
      y1={857.577}
      y2={922.577}
      gradientUnits="userSpaceOnUse"
    >
      <Stop
        offset={0.222}
        style={{
          stopColor: "#0c5c23",
        }}
      />
      <Stop
        offset={0.529}
        style={{
          stopColor: "#71c26f",
        }}
      />
      <Stop
        offset={0.904}
        style={{
          stopColor: "#0c5c23",
        }}
      />
    </LinearGradient>
    <Path
      d="M853.6 811.82v46.49c0 34.15-13.41 66.44-36.33 85.39-97.28 80.41-270.24 80.35-270.24 80.35-159.99-9.26-240.29-45.35-280.34-76.76-24.25-19.01-39.18-51.86-40.43-87.39l-1.57-44.51c4.64 69.02 143.62 124.39 314.39 124.39 173.71-.02 314.52-57.3 314.52-127.96z"
      style={{
        fill: "url(#b)",
      }}
    />
    <RadialGradient
      id="c"
      cx={501.176}
      cy={795.059}
      r={228.706}
      gradientUnits="userSpaceOnUse"
    >
      <Stop
        offset={0.162}
        style={{
          stopColor: "#84ca6f",
        }}
      />
      <Stop
        offset={1}
        style={{
          stopColor: "#2b8226",
        }}
      />
    </RadialGradient>
    <Path
      d="M762.41 758.74c0 47.08-98.86 85.26-220.84 85.26s-220.84-38.18-220.84-85.26c0-17.25 13.25-33.29 36.04-46.7a92.9 92.9 0 0 0 3.1-1.79c.03 0 .03-.03.03-.03 97.84-59.5 72.65-322.58 72.65-322.58h214.63c-12.83 229.51 43.27 298.99 67.11 317.94 30.14 14.59 48.12 33.06 48.12 53.16z"
      style={{
        fill: "url(#c)",
      }}
    />
    <RadialGradient
      id="d"
      cx={569.635}
      cy={223.31}
      r={211.641}
      gradientUnits="userSpaceOnUse"
    >
      <Stop
        offset={0.162}
        style={{
          stopColor: "#84ca6f",
        }}
      />
      <Stop
        offset={1}
        style={{
          stopColor: "#2b8226",
        }}
      />
    </RadialGradient>
    <Circle
      cx={540.36}
      cy={279.56}
      r={225.05}
      style={{
        fill: "url(#d)",
      }}
    />
    <LinearGradient
      id="e"
      x1={256.427}
      x2={691.251}
      y1={840.33}
      y2={812.094}
      gradientUnits="userSpaceOnUse"
    >
      <Stop
        offset={0.222}
        style={{
          stopColor: "#0c5c23",
        }}
      />
      <Stop
        offset={0.529}
        style={{
          stopColor: "#71c26f",
        }}
      />
      <Stop
        offset={0.904}
        style={{
          stopColor: "#0c5c23",
        }}
      />
    </LinearGradient>
    <Path
      d="M761.26 752.65v32.76c0 24.06-9.42 46.81-25.51 60.16-68.31 56.65-189.78 56.61-189.78 56.61-112.36-6.52-168.75-31.95-196.88-54.08-17.03-13.39-27.51-36.54-28.39-61.57l-1.1-31.36c3.26 48.63 100.86 87.64 220.79 87.64 121.98-.02 220.87-40.37 220.87-90.16z"
      style={{
        fill: "url(#e)",
      }}
    />
  </Svg>
    
{/* <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    x="0%"
    y="0%"
 
    viewBox="0 0 24 24"
    {...props}
  >
    <Defs>
      <LinearGradient
        id="a"
        x1="-3.107%"
        x2="100.605%"
        y1="49.865%"
        y2="50.091%"
      >
        <Stop
          offset="0%"
          style={{
            stopColor: "#000",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="6.078%"
          style={{
            stopColor: "#000",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="6.915%"
          style={{
            stopColor: "#fff",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="15.308%"
          style={{
            stopColor: "#fff",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="15.397%"
          style={{
            stopColor: "#000",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="24.482%"
          style={{
            stopColor: "#000",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="23.852%"
          style={{
            stopColor: "#fff",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="31.406%"
          style={{
            stopColor: "#fff",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="31.673%"
          style={{
            stopColor: "#000",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="40.151%"
          style={{
            stopColor: "#000",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="39.95%"
          style={{
            stopColor: "#fff",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="47.912%"
          style={{
            stopColor: "#fff",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="48.169%"
          style={{
            stopColor: "#000",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="56.636%"
          style={{
            stopColor: "#000",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="56.896%"
          style={{
            stopColor: "#fff",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="63.504%"
          style={{
            stopColor: "#fff",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="63.484%"
          style={{
            stopColor: "#000",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="70.505%"
          style={{
            stopColor: "#000",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="70.453%"
          style={{
            stopColor: "#fff",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="78.398%"
          style={{
            stopColor: "#fff",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="78.685%"
          style={{
            stopColor: "#000",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="86.747%"
          style={{
            stopColor: "#000",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="86.677%"
          style={{
            stopColor: "#fff",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="95.395%"
          style={{
            stopColor: "#fff",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="95.665%"
          style={{
            stopColor: "#000",
            stopOpacity: 1,
          }}
        />
        <Stop
          offset="100%"
          style={{
            stopColor: "#000",
            stopOpacity: 1,
          }}
        />
      </LinearGradient>
    </Defs>
    <Path
      fill="none"
      stroke="#000"
      strokeLinecap="square"
      strokeWidth={1.556}
      d="M12.15 12.38c2.8 0 5.06 2.15 5.06 4.81 0 2.65-2.26 4.8-5.06 4.8s-5.06-2.15-5.06-4.8c0-2.66 2.26-4.81 5.06-4.81z"
    />
    <Path
      fill="#FFF"
      stroke="#000"
      strokeLinecap="square"
      strokeWidth={0.901}
      d="M12.15 17.19c-2.82-3.06-5.98-6.88-6.14-10.5 0-7.79 12.14-7.79 12.1-.04-.15 3.35-2.99 7.52-5.96 10.54z"
    />
    <Path
      fill="#01A147"
      stroke="#000"
      strokeLinecap="square"
      strokeWidth={0.901}
      d="M11.92 2.7c2.25 0 4.07 1.82 4.07 4.07s-1.82 4.08-4.07 4.08-4.07-1.83-4.07-4.08S9.67 2.7 11.92 2.7z"
    />
  </Svg> */}
  </Animatable.View>
)
export default ReadyGreen
